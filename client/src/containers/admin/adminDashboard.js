import React from 'react';
import { useSelector } from 'react-redux'
import CustomForm from '../../components/customForm';
import UserList from '../../components/rescueList';
// import img1 from '../../img/wave.png'
const AdminDashboard = () => {
    const {_id} =useSelector(state=>state.user)
    const { name,role } = useSelector(state => state.user)
    return (
        <>
        {/* <img className="wave" src={img1} /> */}
            {/* <h1>Welcom Admin {name}. Your Id is #{_id}</h1> */}
            <div><CustomForm/></div>
            <div><UserList/></div>      
        </>
    )
}
export default AdminDashboard;
