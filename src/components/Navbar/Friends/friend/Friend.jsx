import classes from './../Friends.module.css';
import {NavLink} from "react-router-dom";



const Friend = (props) => {

  return (

            <div className={classes.item}>

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

export default Friend;