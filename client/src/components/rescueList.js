import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import { Pagination } from 'antd';
import './rescueListBox.css'
import RescueListBox from "./rescueListBox";
import NoData from "./noData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faExclamation, faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const RescueList = () => {
    const { _id } = useSelector(state => state.user)
    const { name, role } = useSelector(state => state.user)
    const [rescueList, setrescueList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems = (page, size) => {
        axios.get(`${process.env.REACT_APP_API_URL}/rescueList?page=${page || 1}&size=${size || 8}`).then((response) => {
            setrescueList(response.data.rescueList)
            setTotalUsersCount(response.data.totalRescueListCount)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    }, [])

    return (
        <>
            <h2 className={role == "admin" ? "rescueListTitle" : "rescueUserListTittle"}>
                <FontAwesomeIcon icon={role == "admin" ? faExclamationCircle : faExclamationTriangle} style={{ backgroundColor: role == 'admin' ? 'black' : 'none', borderRadius: '25px', color: 'red', fontSize: '25', marginRight: '20px' }} />
                Rescue Operation List!
            </h2>
            {rescueList.length > 0 ? (
                <>
                <div className="paginationCss">
                <div>
                        {rescueList.map((item, id) => {
                            return <RescueListBox item={item} key={id} />
                        })}
                    </div>

                    <div >
                        <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={8} onChange={(page, size) => fetchAvailableItems(page, size)} />
                    </div>
                </div>


                </>
            ) : <NoData />}
        </>
    )
}

export default RescueList  