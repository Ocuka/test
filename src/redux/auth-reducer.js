import { profileAPI, authAPI } from "../API/api"

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_USER_PROFILE = 'auth/SET-AUTH-USER-PROFILE'
const SET_FORM_ERROR = 'auth/SET-FORM-ERROR'
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profileInfo: {
        aboutMe: null,
        fullName: null,
        photos: {
            small: null,
            large: null
        }
    },
    formError: null,
    captchaUrl: null
    // isFetching: false
}

const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                profileInfo: {
                    ...action.profileInfo,
                    photos: { ...action.profileInfo.photos }
                }
            }

        case SET_FORM_ERROR:
            return {
                ...state,
                formError: action.message
            }

        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }

}

//Action creators

export const setAuthUserData = ({ id, email, login, isAuth }) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const setAuthUserProfile = ({ aboutMe, fullName, smallAva, largeAva }) =>
    ({ type: SET_AUTH_USER_PROFILE, profileInfo: { aboutMe, fullName, photos: { small: smallAva, large: largeAva } } })
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFormError = (message) => ({ type: SET_FORM_ERROR, message })
const setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL, url })

//Thunk creators

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.getAuthUserInfo()
    if (data.resultCode === 0)
        dispatch(setAuthUserData({ ...data.data, isAuth: true }))

}


export const getAuthUserProfile = (userId) => async (dispatch) => {
        if (userId) {
            const data = await profileAPI.getProfile(userId)
            const { aboutMe, fullName, photos } = data
            const { large, small } = photos
            dispatch(setAuthUserProfile({ aboutMe, fullName, small, large }))        
        } else dispatch(setAuthUserProfile({ aboutMe: null, fullName: null, small: null, large: null }))
    }


export const login = ({ email, password, rememberMe, captcha }) => async (dispatch) => {
    const data = await authAPI.login({ email, password, rememberMe, captcha })
    switch (data.resultCode) {

        case 0:
            dispatch(getAuthUserData())
            dispatch(setCaptchaUrl(null))
            dispatch(setFormError(null))
            break

        case 1:
            dispatch(setFormError(data.messages[0]))
            dispatch(setCaptchaUrl(null))
            break

        case 10:
            dispatch(setFormError(data.messages[0]))
            dispatch(getCaptcha())
            //authAPI.getCaptchaUrl()
            //    .then(data => {dispatch(setCaptchaUrl(data.url))})
            break

        default:
            dispatch(setCaptchaUrl(null))
            dispatch(setFormError(null))
    }

}



export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0)
        dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }))
}


export const getCaptcha = () => async (dispatch) => {
    const data = await authAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(data.url))
}

export default authReducer;