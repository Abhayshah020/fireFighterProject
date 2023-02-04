import React from 'react';
import UserList from '../../components/userListShow/userList';
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
const UserListDashboard = () => {
    return (
        <>
            <img className="wave1" src={img1} alt="loading"/>
            <img className="wave2" src={img2} alt="loading"/>
            <UserList />
        </>
    )
}
export default UserListDashboard;