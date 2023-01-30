
import './footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGamepad, faHome, faMagic, faMap, faLink, faPhone, faEnvelope, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Footer = () => {
    const {email, address, phone} =useSelector(state=>state.user)

    return (
        <>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>Fire<span>Fighter</span></h3>

                    <p class="footer-links">
                        <Link to="/"><a href="#">Home</a></Link>
                        |
                        <Link to="/about"><a href="#">About</a></Link>
                        |
                        <Link to="/contact"><a href="#">Contact</a></Link>
                    </p>

                </div>

                <div class="footer-center">
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
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span><strong>Fire<strong>Fighter</strong></strong></span>
                         Things aren't going well at all with mom today.
                         She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.
                    </p>
                    <div class="footer-icons">
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


