import React from 'react';
import {connect} from "react-redux";

import Header from './Header';

import { logout } from '../../redux/auth-reducer'



class HeaderContainer extends React.Component {
//   fnAuth = async () => {
//   const data = await axios
//   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
//   })
//  return data
// }

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
//componentDidUpdate () {

//  if (this.props.userId) {
 //   this.props.getAuthUserProfile(this.props.userId)
 // }

//}

// componentDidMount () {


//     this.props.getAuthUserData()

  // if (this.props.userId) {
  //   this.props.getAuthUserProfile(this.props.userId)
  // }

  // await this.fnAuth()
  // .then(response => {
    
  //    if(response.data.resultCode === 0) {
  //     let { id, email, login } = response.data.data
  //     this.props.setAuthUserData ( id, email, login )
  //    }
      
  // })

  
 
  // axios
  // .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
  // .then(response => {
  //  debugger
  //     let { aboutMe, fullName, photos } = response.data
  //     let {large, small} = photos
  //     this.props.setAuthUserProfile ( aboutMe, fullName, small, large)
     
      
  // })
// }

  render () 
  {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect (mapStateToProps, { logout})(HeaderContainer)