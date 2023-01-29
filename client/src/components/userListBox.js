import React from "react";

const UserListBox = (props) => {

    return (
        <>
            <div className='missionNewsBox' style={{marginTop:'30px',height:'100px'}}>
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