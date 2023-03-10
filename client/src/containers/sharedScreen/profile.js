import React from 'react';
import { useSelector } from 'react-redux'
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import img3 from '../../img/waveUser.png'
import '../../components/cssFile/user.css'
import CredentialsProfile from '../../components/profile/credentialsProfile';
import Footer from '../../components/footer/footer';

const Profile = () => {
    const { role } = useSelector(state => state.user)
    return (
        <>
            <img className={role==="admin"?"wave1":"waveUser"} src={role==="admin"? img1 :img3} alt="loading"/>
            <img className="wave2" src={img2} style={{display:role==="admin"?'':"none"}} alt="loading"/>
            <h1><CredentialsProfile/></h1>
            <Footer/>
        </>
    )
} 
export default Profile;