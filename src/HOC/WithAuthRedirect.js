import React from "react"
import {connect} from "react-redux";
import {Navigate} from "react-router-dom"


export const withAuthRedirect = (Component) => {

    class AuthRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"}/>
            return <Component {...this.props} />
        }
    }

    
//     const AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Navigate to={"/login"}/>
//     return <Component {...props} />
// }

const mapStateToPropsForRedirect = (state) => ({ 
    isAuth : state.auth.isAuth
})

const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent
}


