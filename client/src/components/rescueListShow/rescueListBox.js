import React, { useState } from "react";
import { useSelector } from 'react-redux'
import '../cssFile/rescueListBox.css'
import { message, Modal, Popconfirm, notification } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import EditForm from "../form/editForm";
import axios from "axios";
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);
const { confirm } = Modal;
const ReadMore = ({ children }) => {
   const text = children;
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
   };
   return (
      <p className="text">
         {isReadMore ? text.slice(0, 10) : text}
         <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? <i style={{ color: 'blue' }}>..read more</i> : <i style={{ color: 'blue' }}>..show less</i>}
         </span>
      </p>
   );
};

const RescueListBox = (props) => {
   const { role, _id } = useSelector(state => state.user)
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isAccepted, setIsAccepted] = useState(false);
   const [isDecline, setIsDecline] = useState(false);

   const onConfirm = () => {
      if (role === "admin") {
         showModal();
      } else {
         rescueMissionAccepted();
         isAcceptedMission();
         // socketRerender()
      }
   };
   const cancel = (e) => {
   };
   const showModal = () => {
      setIsModalOpen(true);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };
   const isAcceptedMission = () => {
      setIsAccepted(true);
   }
   const isDeclineMission = () => {
      setIsDecline(true);
   }

   const sendRescueStatus = () => {
      if (props.item.rescueStatus === 'pending') {
         return "accept"
      } else if (props.item.rescueStatus === 'accept') {
         return 'missionSuccess'
      } else {
         return ''
      }
   }

   // const socketRerender = async()=>{
   //    await socket.emit('rescueStatus',{sendStatus:sendRescueStatus(), missionAddress:props.item.address})
   //  }
   const rescueMissionAccepted = async () => {
      if (props.item.rescueStatus === 'pending') {
         await axios.put(`${process.env.REACT_APP_API_URL}/rescueList`, { address: props.item.address, rescueStatus: sendRescueStatus(), senderId: _id }).then((response) => {
            if (response.data.isEdit) {
               notification.destroy();
               notification.success({ message: response.data.msg, duration: 1.4 });
               props.fetchAvailableItems()
            }
         });
      } else {
         if (props.item.senderId === _id) {
            await axios.put(`${process.env.REACT_APP_API_URL}/rescueList`, { address: props.item.address, rescueStatus: sendRescueStatus(), senderId: _id }).then((response) => {
               if (response.data.isEdit) {
                  notification.destroy();
                  notification.success({ message: response.data.msg, duration: 1.4 });
                  props.fetchAvailableItems()
               }
            });
         } else {
            notification.destroy();
            notification.success({ message: "You are not the user who accepted this mission!", duration: 1.4 });
         }
      }
   }
   const backgroundColorafter = () => {
      if (role) {
         if (props.item.rescueStatus === 'pending') {
            return ''
         } else if (props.item.rescueStatus === 'accept') {
            return 'green'
         } else {
            return 'blue'
         }
      }
   }
   const deleteConfirmRescue = async () => {
      if (role === "admin") {
         const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ _id: props.item._id }),
         };
         await fetch(`${process.env.REACT_APP_API_URL}/rescueList`, requestOptions);
         props.fetchAvailableItems()
         message.success('you have deleted the rescue mission');
      } else {
         message.success('you have declined the rescue mission');
      };
   }
   const showDeleteConfirm = () => {
      confirm({
         title: role === "admin" ? 'Are you sure delete this task?' : 'Are you sure decline this task?',
         icon: <ExclamationCircleFilled />,
         content: role === "admin" ? 'Are You Sure You Want To Delete The Rescue Mission?' : 'Are You Sure You Want To Decline The Rescue Mission?',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         onOk() {
            deleteConfirmRescue()
         },
         onCancel() {
         },
      });
   };
   const editAccept = () => {
      if (role === "admin") {
         return "Edit"
      } else {
         if (props.item.rescueStatus === 'pending') {
            return "Accept"
         } else if (props.item.rescueStatus === 'accept') {
            return 'Rescue Mission Success'
         } else {
            return 'Mission Completed'
         }
      }

   }
   const description = () => {
      if (role === "admin") {
         return "Do you want to edit the mission"
      } else {
         if (props.item.rescueStatus === "pending") {
            return "Are you sure to accept this rescue mission?"
         } else if (props.item.rescueStatus === "accept") {
            return "Are you sure you have completed this rescue mission?"
         } else {
            return ''
         }
      }
   }
   const deleteDecline = () => {
      if (role === "admin") {
         return "Delete"
      }
   }
   const deleteButton = () => {
      if (role === "admin") {
         if (props.item.rescueStatus === "pending") {
            return ''
         } else {
            return "none"
         }
      } else {
         return "none"
      }
   }

   return (
      <>
         <Modal title="Edit The Rescue Details?" footer={null} open={isModalOpen} onCancel={handleCancel}>
            {<EditForm item={props.item} fetchAvailableItems={() => props.fetchAvailableItems()} />}
         </Modal>
         <div className={role === "admin" ? 'userBox' : 'missionBox'} style={{ backgroundColor: backgroundColorafter() }}>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.name}</div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Rescue Address:<br /><ReadMore>{props.item.address}</ReadMore></div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>Contacted Person Name:<br />{props.item.phone}</div>
            <div className={role === "admin" ? 'userListBox' : 'missionListBox'}>
               <Popconfirm
                  disabled={props.item.rescueStatus === 'missionSuccess' ? true : false}
                  title={role === "admin" ? "Edit the mission" : "Rescue mission"}
                  description={description()}
                  onConfirm={onConfirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
               >
                  <button className={role === "admin" ? 'editButton' : 'acceptListBox'}>
                     {editAccept()}
                  </button>
               </Popconfirm>
               <Popconfirm
                  title={"Delete Mission?"}
                  description={"Are you sure to delete this rescue mission?"}
                  onConfirm={() => {
                     showDeleteConfirm();
                     isDeclineMission()
                  }}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
               >
                  <button className={role === "admin" ? 'deleteButton' : ''} style={{ display: deleteButton() }}>
                     {deleteDecline()}
                  </button>
               </Popconfirm>
            </div>
         </div>

      </>
   )
}
export default RescueListBox;

