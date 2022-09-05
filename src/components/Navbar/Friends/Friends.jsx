import {connect} from "react-redux";

import classes from './Friends.module.css';
import Friend from "./friend/Friend";



const Friends = (props) => {

    const friendElement = props.state.map((fr) => <Friend name={fr.name} key={fr.id} id={fr.id} ava={fr.ava}/>)

    return (
        <div className={classes.friendsBlock}>
            <h3>Friends</h3>
            <div className={classes.friends}>
                {
                    friendElement

                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        state: state.sideBar.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;