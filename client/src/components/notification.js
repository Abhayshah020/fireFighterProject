import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import './rescueListBox.css'
import UserListBox from "./userListBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import NotificationBox from "./notificationBox";

const Notification = () => {
    const { _id } = useSelector(state => state.user)
    const { name, role } = useSelector(state => state.user)
    const [userList, setuserList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/rescueList`).then((response) => {
            setuserList(response.data.rescueList)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    })

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
                </>
            ) : "no data"}

        </>
    )
}

export default Notification;