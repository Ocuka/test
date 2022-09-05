import axios from "axios";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "84e16493-8017-4334-a3b3-f3ebc724061f"
    }
})

export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
    return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow (id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollow (id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (id) {
        return instance
            .get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus (id) {
        return instance
            .get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus (status) {
        return instance
            .put(`profile/status`, {status : status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUserInfo () {
        return instance
            .get(`auth/me`)
            .then(response => response.data)   
    },

    login ({ email, password, rememberMe, captcha }) {
        return instance
            .post(`auth/login`, {email, password, rememberMe, captcha })
            .then(response => response.data)   
    },

    logout () {
        return instance
            .delete(`auth/login`)
            .then(response => response.data)   
    },

    getCaptchaUrl () {
        return instance
            .get(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}

// getAuthUserInfo = async () => {
  
//     const response = await axios.get(`${URL}/auth/me`, {
//       withCredentials: true
//     })

//     if(response.data.resultCode === 0) this.props.setAuthUserData ( {...response.data.data} )
  

// }

// getProfileInfo = async () => {
//   const {userId, setAuthUserProfile} = this.props
//   const profile = await axios.get(`${URL}/profile/${userId}`)
//   const { aboutMe, fullName, photos } = profile.data
//   const {large, small} = photos
//   setAuthUserProfile ( aboutMe, fullName, small, large)
// }