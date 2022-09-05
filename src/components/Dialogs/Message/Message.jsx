import classes from "./../Dialogs.module.css";


const Message = ({msg, user}) => {
    const {text, ava, author} = msg;
    return (
        <div className={user === author ? classes.myMessageBlock : classes.messageBlock}>
            <img className={classes.ava} src={ava} alt='ava'/>
            <div className={classes.message}>{text}</div>
        </div>
    )

}

export default Message;


