
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
    // isFetching: false
}

const appReducer = (state = initialState, action) => {


    switch (action.type) {

        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }

        default :
            return state
    }

}

//Action creators

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//Thunk creators

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
   Promise.all([promise])
    .then (() => {dispatch(initializedSuccess())})
}


export default appReducer;