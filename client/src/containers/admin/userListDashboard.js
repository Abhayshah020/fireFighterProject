import React from 'react';
import UserList from '../../components/userList';
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
const UserListDashboard = () => {
    return (
        <>
            <img className="wave1" src={img1} />
            <img className="wave2" src={img2} />
            <UserList />
        </>
    )
}
export default UserListDashboard;