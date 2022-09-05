import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png' alt='logo'/>
      <div >
        {props.isAuth 
        ? <div className={classes.loginBlock}><div className={classes.logout} onClick={props.logout}>Logout</div> <NavLink to={'/profile'}><div>{props.login}</div></NavLink></div>
        : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header