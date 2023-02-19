
import '../cssFile/footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGamepad, faHome, faMagic, faMap, faLink, faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Popover } from 'antd';

const Footer = () => {
    const {email, address, phone, role} =useSelector(state=>state.user)

    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Fire<span>Fighter</span></h3>

                    <p className="footer-links">
                        <Link to="/">Home</Link>
                        |
                        <Link to="/notifications">News</Link>
                        |
                        <Link to="/map">Map</Link>
                        |
                        <Link to="/completedMission">Completed Mission</Link>
                        |
                        <Link to="/profile">Contact</Link>
                    </p>

                </div>

                <div className="footer-center">
                    <div className='footerIcon'>
                    <FontAwesomeIcon icon={faMapMarker} style={{color:"white", margin:"-1px 1px"}}/>
                        <p><strong>{address},Nepal</strong></p>

                    </div>

                    <div className='footerIcon'>
                        <FontAwesomeIcon icon={faPhone} style={{color:"white", margin:"-1px 1px"}}/>
                        <p>{phone}</p>
                    </div >
                    <div className='footerIcon'>
                        <FontAwesomeIcon icon={faEnvelope} style={{color:"white", margin:"-2px 1px"}}/>
                        <p><a href="">{email}</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span><strong>Fire<strong>Fighter</strong></strong></span>
                            Things are not easy for <strong>Fire fighter</strong>, We should be brave and quick thinker in the face of 
                            hostile situation and <strong>Fire Fighter</strong> should be strong enough with both physically and in mind to cope up with every situation that are thrown at them. 
                                              
                    </p>
                    <div className="footer-icons">
                        {role==="admin"?<Link to="/users" style={{backgroundColor:'transparent'}}><FontAwesomeIcon icon={faGamepad} className="i1" style={{border:'1px solid black', margin:'3px',padding:'0 5px 0 5px', borderRadius:'5px'}}/></Link>:""}                       
                        <Link to="/" style={{backgroundColor:'transparent'}}><FontAwesomeIcon icon={faHome} className="i1" style={{border:'1px solid black', margin:'3px',padding:'0 5px 0 5px', borderRadius:'5px'}}/></Link>
                        <Link to="/completedMission" style={{backgroundColor:'transparent'}}><FontAwesomeIcon icon={faMagic} className="i1" style={{border:'1px solid black', margin:'3px',padding:'0 5px 0 5px', borderRadius:'5px'}}/></Link>
                        <Link to="/map" style={{backgroundColor:'transparent'}}><FontAwesomeIcon icon={faMap} className="i1" style={{border:'1px solid black', margin:'3px',padding:'0 5px 0 5px', borderRadius:'5px'}}/></Link>
                        <Link to="/profile" style={{backgroundColor:'transparent'}}><FontAwesomeIcon icon={faLink} className="i1" style={{border:'1px solid black', margin:'3px',padding:'0 5px 0 5px', borderRadius:'5px'}}/></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;


