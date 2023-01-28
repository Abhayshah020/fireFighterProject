
import './user.css';
import { Link } from 'react-router-dom';
import DropDownButton from './dropDownButton';
import img1 from '../img/firefighterLogo.png'
import DropDownButtonComment from './dropDownComment';
import SerachButton from './serachButton';
const NavBar = () => {
    return (
        <>
            <nav className="headersLogo">
                <Link to="/" className="logo"><div className="logo"><img src={img1} className="firefighterLogo" />Fire<strong>Fighter</strong></div></Link>
                <div style={{margin:'3px',display:'flex'}}>
                <li className="navlinks links" style={{marginRight:"20px"}}><SerachButton/></li>
                <Link to="/"><li className="navlinks links" style={{marginRight:"20px"}}><DropDownButtonComment/></li></Link>
                <Link to="/"><li className="navlinks links"><DropDownButton /></li></Link>
                </div>
                
            </nav>
        </>
    )
}
export default NavBar