import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import { compose } from "redux";

import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";






const ProfileContainer = (props) => {
    let { userId } = useParams()
    if (!userId ) {

        userId = props.currentUserId
    }
    useEffect(() => {
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }, [])

   
    return <Profile {...props} />

}


// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//
//
//         axios
//             .get(`https://62cd5e68a43bf7800856f5a2.mockapi.io/api/v1/profile/1`)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             })
//     }
//
//     render() {
//         console.log(this.props)
//         return <Profile {...this.props} />
//     }
//
// }



const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        currentUserId: state.auth.id,
        status: state.profilePage.status
    }
)



export default compose(
    connect(mapStateToProps, {
        getUserProfile, getUserStatus, updateUserStatus}),
    withAuthRedirect
)(ProfileContainer)