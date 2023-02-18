import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import CustomForm from '../../components/form/customForm';
import RescueList from '../../components/rescueListShow/rescueList';
import axios from "axios";
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import '../../components/cssFile/user.css'
const AdminDashboard = () => {
    const { role } = useSelector(state => state.user)
    const [rescueList, setrescueList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems =async(page, size) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/rescueList?page=${page || 1}&size=${role === "admin" ? size || 8 : size || 6}`).then((response) => {
            setrescueList(response.data.rescueList)
            setTotalUsersCount(response.data.totalRescueListCount)
        });
    }
    useEffect(() => {
        fetchAvailableItems()
    }, [])

    return (
        <>
            <img className="wave1" src={img1} alt="loading"/>
            <img className="wave2" src={img2} alt="loading"/>
            <div><CustomForm fetchAvailableItems={()=>fetchAvailableItems()}/></div>
            <div><RescueList rescueList={rescueList} usersCount={usersCount} fetchAvailableItems={()=>fetchAvailableItems()}/></div>      
        </>
    )
}
export default AdminDashboard;
