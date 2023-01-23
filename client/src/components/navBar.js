import { useSelector } from 'react-redux'
import { logoutResetDetails } from "../redux/actions/userAction"
import { useDispatch } from 'react-redux'
import './user.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const dispatch = useDispatch()
    const { name, role } = useSelector(state => state.user)
    const triggerLogout = () => {
        dispatch(logoutResetDetails())
    }
    return (
        <>
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <Link to="/" className="logo"><div className="logo">Fire<strong>Fighter</strong></div></Link>
                <ul className="links">
                    <Link to="/about"><li className="navlinks">About Us</li></Link>
                    <Link to="/contact"><li className="navlinks">Contact</li></Link>
                    <Link to="/"><button className="button_logout" onClick={() => triggerLogout()}>Logout</button></Link>
                </ul>
                <label for="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </>
    )
}

export default NavBar