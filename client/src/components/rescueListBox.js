import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './rescueListBox.css'
const RescueListBox = (props) => {
   const { _id,role } = useSelector(state => state.user)
   return (
      <>
      <div className={role=="admin"?'userBox':'missionBox'}>
         <div className={role=="admin"?'userListBox':'missionListBox'}>Contacted Person Name:<br/>{props.item.name}</div>
         <div className={role=="admin"?'userListBox':'missionListBox'}>Rescue Address:<br/>{props.item.address}</div>
         <div className={role=="admin"?'userListBox':'missionListBox'}>Contacted Person Name:<br/>{props.item.phone}</div>
         <div className={role=="admin"?'userListBox':'missionListBox'}><button className={role=="admin"?'editButton':'acceptListBox'}>{role =="admin"? "Edit":"Accept"}</button>
         <button className={role=="admin"?'deleteButton':'declineListBox'}>{role=="admin"? "Delete":"Decline"}</button></div>
      </div>

      </>
   )
}
export default RescueListBox;