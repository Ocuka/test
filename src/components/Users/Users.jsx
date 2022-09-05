


import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css";




const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, usersPortionSize, ...restProps }) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div className={classes.usersContainer}>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} portionSize={usersPortionSize}/>
            {/* <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && classes.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                }} >
                      {page}
                      </span>
                })}

            </div> */}

            {

                users.map(user => <User key={user.id} user={user} {...restProps} />)
                                        // followingInProgress={followingInProgress} userPhoto={userPhoto}
                                        // unfollow={unfollow} follow={follow} />)
            }
        </div>
    )
}


export default Users;