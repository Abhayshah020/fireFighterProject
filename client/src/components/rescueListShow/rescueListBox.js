import React, { useState } from "react";
import { useSelector } from 'react-redux'
import '../cssFile/rescueListBox.css'
import { message, Modal} from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import EditForm from "../form/editForm";
const { confirm } = Modal;

const RescueListBox = (props) => {
   const { role } = useSelector(state => state.user)
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

   const showDeleteConfirm = async() => {
      confirm({
         title: role === "admin" ? 'Are you sure delete this task?' : 'Are you sure decline this task?',
         icon: <ExclamationCircleFilled />,
         content: role === "admin" ? 'Are You Sure You Want To Delete The Rescue Mission?' : 'Are You Sure You Want To Decline The Rescue Mission?',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         onOk () {
            if (role === "admin") {
               const requestOptions = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ _id: props.item._id }),
               };
                 fetch(
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

   const editAccept = () => {
      if (role === "admin") {
         return "Edit"
      } else {
         return "Accept"
      }

   }
   const deleteDecline = () => {
      if (role === "admin") {
         return "Delete"
      } else {
         return "Decline"
      }
   }

   return (
      <>
         <Modal title={role === "admin" ? "Edit The Rescue Details?" : "Congratulation!"} footer={null} open={isModalOpen} onCancel={handleCancel}>
            {role === "admin" ? <EditForm item={props.item} /> : "Your Rescue Mission Is Accepted Successfully!"}
         </Modal>
         <div className={role === "admin" ? 'userBox' : 'missionBox'} >
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.name}</div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Rescue Address:<br />{props.item.address}</div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.phone}</div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>
               <button className={role === "admin" ? 'editButton' : 'acceptListBox'} onClick={showModal}>
                  {editAccept()}
               </button>
               <button className={role === "admin" ? 'deleteButton' : 'declineListBox'} onClick={showDeleteConfirm}>
                  {deleteDecline()}
               </button>
            </div>
         </div>

      </>
   )
}
export default RescueListBox;