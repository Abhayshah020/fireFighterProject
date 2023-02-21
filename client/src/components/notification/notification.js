import React, { useState, useEffect } from "react";
import axios from "axios";
import '../cssFile/rescueListBox.css'
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import NotificationBox from "./notificationBox";
import NotificationPageLoader from "../skeleton/notificationPageLoader";
import NoData from "../noData";

const Notification = () => {

    const [userList, setuserList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(30)
    const [loading, setLoading] = useState(true)

    const fetchAvailableItems = async (page, size) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/notification?page=${page || 1}&size=${size || 4}`).then((response) => {
            setuserList(response.data.rescueList)
            setTotalUsersCount(response.data.totalRescueListCount)
        });
        setLoading(false)
    }

    useEffect(() => {
        fetchAvailableItems()
    }, [])
    debugger;
    const notificationSkeletonOrData = () => {
        if (!loading && userList.length > 0) {
            return (
                <>
                    {userList.map((item, id) => {
                        return <NotificationBox item={item} key={id} fetchAvailableItems={() => fetchAvailableItems()} />
                    })}
                    <div style={{ margin: "20px", display: "flex", justifyContent: 'center' }}>
                        <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={4} onChange={(page, size) => fetchAvailableItems(page, size)} />
                    </div>
                </>
            )
        } else if (loading) {
            return <NotificationPageLoader />
           
        } else {
            return <NoData />
        }
        
    }

    return (
        <>
            <h2 style={{ marginLeft: '100px', marginTop: '20px', color: 'blue', textDecoration: 'underline' }}>
                <FontAwesomeIcon icon={faBell} style={{ color: 'black', marginRight: '10px' }} />
                News
            </h2>
            {notificationSkeletonOrData()}
            
        </>
    )
}

export default Notification;