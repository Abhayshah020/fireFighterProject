import './cssFile/user.css';
import { Link } from 'react-router-dom';
import DropDownButton from './dropDown/dropDownButton';
import img1 from '../img/firefighterLogo.png'
import SerachButton from './serachButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHome, faMap, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd';
import { useSelector } from 'react-redux'
const NavBar = () => {
    const { role } = useSelector(state => state.user)
    return (
        <>
            <nav className="headersLogo">
                <div className="logo">
                    <Link to="/" className="logo">
                        <img src={img1} className="firefighterLogo" alt="loading"/>Fire<strong>Fighter</strong>
                    </Link>
                </div>

                <div className='middleNavLinkFuction'>
                    <Link to="/">
                        <li className='middleNavLinks'>
                            <Button className='middleNavLinkBox'>
                                <FontAwesomeIcon icon={faHome} className="homeIcon" />
                            </Button>
                        </li>
                    </Link>

                    <Link to="/users" style={{display:role==="admin"?'':"none"}}>
                        <li className='middleNavLinks'>
                            <Button className='middleNavLinkBox'>
                                <FontAwesomeIcon icon={faUsers} className="homeIcon" />
                            </Button>
                        </li>
                    </Link>

                    <Link to="/notifications">
                        <li className='middleNavLinks'>
                            <Button className='middleNavLinkBox'>
                                <FontAwesomeIcon icon={faBell} className="homeIcon" />
                            </Button>
                        </li>
                    </Link>
                    <Link to="/map">
                        <li className='middleNavLinks'>
                            <Button className='middleNavLinkBox'>
                                <FontAwesomeIcon icon={faMap} className="homeIcon" />
                            </Button>
                        </li>
                    </Link>
                </div>

                <div style={{ margin: '3px', display: 'flex' }}>
                    <li className="navlinks links" style={{ marginRight: "20px" }}>
                        <SerachButton />
                    </li>
                    <li className="navlinks links">
                        <DropDownButton />
                    </li>
                </div>
            </nav>
        </>
    )
}
export default NavBar