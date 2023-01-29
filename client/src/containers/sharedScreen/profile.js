import React from 'react';
import { useSelector } from 'react-redux'
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import img3 from '../../img/waveUser.png'
import '../../components/user.css'

const Profile = () => {
    const { name, role } = useSelector(state => state.user)
    return (
        <>
            <img className={role=="admin"?"wave1":"waveUser"} src={role=="admin"? img1 :img3} />
            <img className="wave2" src={img2} style={{display:role=="admin"?'':"none"}}/>
            <h1>This is Profile page</h1>
        </>
    )
} 
export default Profile;