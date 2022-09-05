import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";

import {
    follow, setCurrentPage, unfollow,
    toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import userPhoto from "../../assets/images/user_img.jpg";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers, getUsersPortionSize
} from "../../redux/users-selectors";





class UsersContainer extends React.Component {


    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, pageSize)


    }

    render() {
        
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                userPhoto={userPhoto}
                followingInProgress={this.props.followingInProgress}
                usersPortionSize ={this.props.usersPortionSize} />
        </>

    }
}



// const mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => ({

    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    usersPortionSize: getUsersPortionSize(state)
})


/*const mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage : (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount : (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching : (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, toggleFollowingProgress,
        setCurrentPage, requestUsers
    })
)(UsersContainer)

