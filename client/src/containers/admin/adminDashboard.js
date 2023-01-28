import React from 'react';
import { useSelector } from 'react-redux'
import CustomForm from '../../components/customForm';
import RescueList from '../../components/rescueList';
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import '../../components/user.css'
const AdminDashboard = () => {
    const {_id} =useSelector(state=>state.user)
    const { name,role } = useSelector(state => state.user)
    return (
        <>
            <img className="wave1" src={img1} />
            <img className="wave2" src={img2} />
            <div><CustomForm/></div>
            <div><RescueList/></div>      
        </>
    )
}
export default AdminDashboard;
