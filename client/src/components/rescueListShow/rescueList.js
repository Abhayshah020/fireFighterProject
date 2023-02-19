import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from "axios";
import { Pagination } from 'antd';
import '../cssFile/rescueListBox.css'
import RescueListBox from "./rescueListBox";
import NoData from "../noData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import io from 'socket.io-client';
import { notification } from 'antd';
const socket = io(process.env.REACT_APP_API_URL);

const RescueList = () => {
    const { role } = useSelector(state => state.user)
    const [rescueList, setrescueList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems = async (page, size) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/rescueList?page=${page || 1}&size=${role === "admin" ? size || 5 : size || 6}`).then((response) => {
            setrescueList(response.data.rescueList)
            setTotalUsersCount(response.data.totalRescueListCount)
        });
    }
    useEffect(() => {
        socket.on('rescueStatus', (rescueStatus) => {
            if (rescueStatus) {
                fetchAvailableItems()
                notification.destroy();
                notification.error({ message: "The Mission was Updated by the Firefighter's successfully", duration: 2 });
            }
        })
        fetchAvailableItems()
    }, [])
    useEffect(() => {
        socket.on('rescueList', (rescueList) => {
            if (rescueList) {
                fetchAvailableItems()
                if(role==="user"){
                notification.destroy();
                notification.error({ message: "A New Mission was Updated by the Firefighter's Admin", duration: 2 });
                }
            }
        })
    }, [])

    return (
        <>
            {/* {JSON.stringify(rescueList)} */}
            <h2 className={role === "admin" ? "rescueListTitle" : "rescueUserListTittle"}>
                <FontAwesomeIcon icon={role === "admin" ? faExclamationCircle : faExclamationTriangle} style={{ backgroundColor: role === 'admin' ? 'black' : 'none', borderRadius: '25px', color: 'red', fontSize: '25', marginRight: '20px' }} />
                Rescue Operation List!
            </h2>
            {rescueList.length > 0 ? (
                <>
                    <div className={role === "admin" ? "paginationCss" : "paginationUserCss"}>
                        <div>
                            {rescueList.map((item, id) => {
                                if (item.rescueStatus === "missionSuccess") {
                                    return null
                                } else {
                                    return <RescueListBox item={item} key={id} fetchAvailableItems={() => fetchAvailableItems()} />
                                }
                            })}
                        </div>

                        <div style={role === "admin" ? {} : { margin: "20px", display: "flex", justifyContent: 'center' }}>
                            <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={role === "admin" ? 5 : 6} onChange={(page, size) => fetchAvailableItems(page, size)} />
                        </div>
                    </div>


                </>
            ) : <NoData />}
        </>
    )
}

export default RescueList  