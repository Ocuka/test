import {NavLink} from "react-router-dom";

import FriendsContainer from "./Friends/Friends";
import classes from './Navbar.module.css';

const Navbar = (props) => {
                return (
                <div className={classes.aside}>
                    <nav className={classes.nav}>
                        <div className={classes.item}>
                            <NavLink to='/profile' className={({isActive}) =>
                                isActive ? classes.active : undefined}>Profile</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to='/dialogs' className={({isActive}) =>
                                isActive ? classes.active : undefined}>Messages</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to='/news' className={({isActive}) =>
                                isActive ? classes.active : undefined}>News</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to='/music' className={({isActive}) =>
                                isActive ? classes.active : undefined}>Music</NavLink>
                        </div>
                        <div className={`${classes.item} ${classes.item_margin}`}>
                            <NavLink to='/users' className={({isActive}) =>
                                isActive ? classes.active : undefined}>Find users</NavLink>
                        </div>
                        <div className={`${classes.item} ${classes.item_margin}`}>
                            <NavLink to='/settings' className={({isActive}) =>
                                isActive ? classes.active : undefined}>Settings</NavLink>
                        </div>
                    </nav>
                    {/*<Friends state={state.friends}/>*/}
                    <FriendsContainer/>
                </div>
                )

}

export default Navbar;