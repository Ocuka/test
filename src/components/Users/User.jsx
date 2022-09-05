import { NavLink } from "react-router-dom";

import classes from "./Users.module.css";




const User = ({user, followingInProgress, userPhoto, unfollow, follow}) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='ava' className={classes.userPhoto} />
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow
                        </button>}
                </div>
            </span>
            <span>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </span>
            <span>
                <div>
                    {"user.location.country"}
                </div>
                <div>
                    {"user.location.city"}
                </div>
            </span>
        </div>
    )
}


export default User;