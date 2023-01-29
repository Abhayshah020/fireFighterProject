import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import './rescueListBox.css'
import UserListBox from "./userListBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faExclamation, faExclamationCircle, faExclamationTriangle, faUsers } from '@fortawesome/free-solid-svg-icons'

const UserList = () => {
    const { _id } = useSelector(state => state.user)
    const { name, role } = useSelector(state => state.user)
    const [userList, setuserList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/userList`).then((response) => {
            setuserList(response.data.userList)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    })

    return (
        <>
            {userList.length > 0 ? (
                <>
                    {userList.map((item, id) => {
                        return <UserListBox item={item} key={id} />
                    })}
                </>
            ) : "no data"}

        </>
    )
}

export default UserList;