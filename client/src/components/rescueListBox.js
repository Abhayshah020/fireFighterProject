import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import './rescueListBox.css'
import { message, Popconfirm,Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;

const RescueListBox = (props) => {
   const { _id, role } = useSelector(state => state.user)
   const showDeleteConfirm = () => {
      confirm({
         title: 'Are you sure delete this task?',
         icon: <ExclamationCircleFilled />,
         content: 'Some descriptions',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         onOk() {
            if (role == "admin") {
               const requestOptions = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ _id: props.item._id }),
               };
               const res = fetch(
                  `${process.env.REACT_APP_API_URL}/rescueList`,
                  requestOptions
               );
               message.success('you have deleted the rescue mission');
            } else {
               message.success('you have declined the rescue mission');
            };
         },
         onCancel() {

         },

      });
   };

   const cancel = () => {

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
         <div className={role == "admin" ? 'userBox' : 'missionBox'} >
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.name}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Rescue Address:<br />{props.item.address}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.phone}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>
               <button className={role == "admin" ? 'editButton' : 'acceptListBox'}>
                  {editAccept()}
               </button>
                  <button className={role == "admin" ? 'deleteButton' : 'declineListBox'} onClick={showDeleteConfirm}>
                     {deleteDecline()}
                  </button>
            </div>
         </div>

      </>
   )
}
export default RescueListBox;