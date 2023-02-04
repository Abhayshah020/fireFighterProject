import React, { useState, useEffect } from "react";
import axios from "axios";
import '../cssFile/rescueListBox.css'
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import NotificationBox from "./notificationBox";

const Notification = () => {

    const [userList, setuserList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(30)

    const fetchAvailableItems = (page, size) => {
        axios.get(`${process.env.REACT_APP_API_URL}/rescueList?page=${page || 1}&size=${size || 4}`).then((response) => {
            setuserList(response.data.rescueList)
            console.log(response.data.totalRescueListCount)
            setTotalUsersCount(response.data.totalRescueListCount)
            console.log(usersCount)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    },[])

    return (
        <>
            <h2 style={{marginLeft:'100px',marginTop:'20px',color:'blue',textDecoration:'underline'}}>
                <FontAwesomeIcon icon={faBell} style={{color:'black',marginRight:'10px'}}/>
                News
            </h2>
            {userList.length > 0 ? (
                <>
                    {userList.map((item, id) => {
                        return <NotificationBox item={item} key={id} />
                    })}
                    <div style={{margin:"20px", display:"flex",justifyContent:'center'}}>
                    <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={4} onChange={(page,size)=>fetchAvailableItems(page,size)} />
                    </div>
                   
                </>
            ) : "no data"}

        </>
    )
}

export default Notification;