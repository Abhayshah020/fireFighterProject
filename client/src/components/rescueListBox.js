import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './rescueListBox.css'
import { message, Popconfirm } from 'antd';

const RescueListBox = (props) => {
   const { _id, role } = useSelector(state => state.user)
   const confirm = () => {
      message.success('Click on Yes');
   };
   const cancel = () => {
      message.error('Click on No');
   };
   const editAccept = () => {
      if (role == "admin") {
         return "Edit"
      } else {
         return "Accept"
      }

   }
   const deleteDecline = () => {
      if (role == "admin") {
         return "Delete"
      } else {
         return "Decline"
      }
   }

   return (
      <>
         <div className={role == "admin" ? 'userBox' : 'missionBox'}>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.name}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Rescue Address:<br />{props.item.address}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.phone}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>
               <button className={role == "admin" ? 'editButton' : 'acceptListBox'}>
                  {editAccept()}
               </button>
               <Popconfirm
                  title={role == "admin" ? "Delete the task" : "Decline the task"}
                  description={role == "admin" ? "Are you sure to delete this task?" : "Are you sure to decline this task?"}
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
               >
                  <button className={role == "admin" ? 'deleteButton' : 'declineListBox'}>
                     {deleteDecline()}
                  </button>
               </Popconfirm>
            </div>
         </div>

      </>
   )
}
export default RescueListBox;