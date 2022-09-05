import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink
                to={`/dialogs/${props.id}`}
                className={({ isActive }) =>
                isActive ? classes.active: undefined}>
                    <img className={classes.ava} src={props.ava} alt='ava'/>
                    {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;