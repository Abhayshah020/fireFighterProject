import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import './rescueListBox.css'
import { message, Popconfirm, Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import EditForm from "./editForm";
const { confirm } = Modal;

const RescueListBox = (props) => {
   const { _id, role } = useSelector(state => state.user)
   const [isModalOpen, setIsModalOpen] = useState(false);

   const rescueListSchema = Yup.object().shape({
      catagoryName: Yup.string()
         .min(2, "Too Short!")
         .max(100, "Too Long!")
         .required("Required"),

      minimumDeliveryPrice: Yup.string()
         .required("Required"),
   });

   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };

   const showDeleteConfirm = () => {
      confirm({
         title: role == "admin" ? 'Are you sure delete this task?' : 'Are you sure decline this task?',
         icon: <ExclamationCircleFilled />,
         content: role == "admin" ? 'Are You Sure You Want To Delete The Rescue Mission?' : 'Are You Sure You Want To Decline The Rescue Mission?',
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
         <Modal title={role == "admin" ? "Edit The Rescue Details?" : "Congratulation!"} footer={null} open={isModalOpen} onCancel={handleCancel}>
            {role == "admin" ? <EditForm item={props.item} /> : "Your Rescue Mission Is Accepted Successfully!"}
         </Modal>
         <div className={role == "admin" ? 'userBox' : 'missionBox'} >
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.name}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Rescue Address:<br />{props.item.address}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.phone}</div>
            <div className={role == "admin" ? 'userListBox' : 'missionListBox'}>
               <button className={role == "admin" ? 'editButton' : 'acceptListBox'} onClick={showModal}>
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