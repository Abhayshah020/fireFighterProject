import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from 'antd';
import '../cssFile/rescueListBox.css'
import UserListBox from "./userListBox";

const UserList = () => {
    const [userList, setuserList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

    const fetchAvailableItems = async(page, size) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/userList?page=${page || 1}&size=${size || 4}`).then((response) => {
            setuserList(response.data.userList)
            setTotalUsersCount(response.data.totalUsersListlength)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    }, [])

    return (
        <>
            {userList.length > 0 ? (
                <>
                    {userList.map((item, id) => {
                        return <UserListBox item={item} key={id} />
                    })}
                    <div style={{ margin: "20px", display: "flex", justifyContent: 'center' }}>
                        <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={4} onChange={(page, size) => fetchAvailableItems(page, size)} />
                    </div>
                    
                </>
            ) : "no data"}

        </>
    )
}

export default UserList;