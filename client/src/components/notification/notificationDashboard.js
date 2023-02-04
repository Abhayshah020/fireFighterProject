import React from 'react';
import { useSelector } from 'react-redux'
import Notification from './notification';
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import img3 from '../../img/waveUser.png'
import '../cssFile/user.css'

const NotificationDashboard = () => {
    const { role } = useSelector(state => state.user)
    return (
        <>
            <img className={role==="admin"?"wave1":"waveUser"} src={role==="admin"? img1 :img3} alt="loading"/>
            <img className="wave2" src={img2} style={{display:role==="admin"?'':"none"}} alt="loading"/>
            <Notification />
        </>
    )
}
export default NotificationDashboard;