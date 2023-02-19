import React from "react";
import '../cssFile/rescueListBox.css'

const UserListBox = (props) => {
    return (
        <>
            <div className='missionNewsBox' style={{marginTop:'25px',height:'100px'}}>
            <div className="missionListBox">User Id:<br/>{props.item._id}</div>
            <div className="missionListBox">User Name:<br/>{props.item.name}</div>
            <div className="missionListBox">User address:<br/>{props.item.address}</div>
            <div className="missionListBox">User phone:<br/>{props.item.phone}</div>
            <div className="missionListBox">User email:<br/>{props.item.email}</div>          
            </div>
        </>
    )
}
export default UserListBox;