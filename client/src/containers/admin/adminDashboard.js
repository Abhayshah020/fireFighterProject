import React from 'react';
import CustomForm from '../../components/form/customForm';
import RescueList from '../../components/rescueListShow/rescueList';
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import '../../components/cssFile/user.css'
const AdminDashboard = () => {
    return (
        <>
            <img className="wave1" src={img1} alt="loading"/>
            <img className="wave2" src={img2} alt="loading"/>
            <div><CustomForm/></div>
            <div><RescueList/></div>      
        </>
    )
}
export default AdminDashboard;
