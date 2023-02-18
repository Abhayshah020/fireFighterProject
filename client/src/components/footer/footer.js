
import '../cssFile/footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGamepad, faHome, faMagic, faMap, faLink, faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Footer = () => {
    const {email, address, phone} =useSelector(state=>state.user)

    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Fire<span>Fighter</span></h3>

                    <p className="footer-links">
                        <Link to="/">Home</Link>
                        |
                        <Link to="/profile">About</Link>
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
                        <a href="#"><FontAwesomeIcon icon={faGamepad} className="i1"/></a>                       
                        <a href="#"><FontAwesomeIcon icon={faHome} className="i1"/></a>
                        <a href="#"><FontAwesomeIcon icon={faMagic} className="i1"/></a>
                        <a href="#"><FontAwesomeIcon icon={faMap} className="i1"/></a>
                        <a href="#"><FontAwesomeIcon icon={faLink} className="i1"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;


