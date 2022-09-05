import preLoader from "../../../assets/images/Fidget-spinner.gif";
import classes from "./Preloader.module.css"

const Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <img src={preLoader} alt='loading...'/>
        </div>
    )
}

export default Preloader