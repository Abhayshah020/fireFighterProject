// import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux'
// import axios from "axios";

// const PracticeModels = () => {
//   const { _id } = useSelector(state => state.user)
//   const [userList, setuserList] = useState([])
//   const [userDetails, setUserDetails] = useState({})
//   const [userListMessage, setuserListMessage] = useState([])
//   const [message, setMessage] = useState('')

// const fetchuser = () => {
//     axios.get(`${process.env.REACT_APP_API_URL}/userList`).then((response) => {
//         setuserList(response.data.userList)
//     });
// }
// const triggerMessageSend = async()=>{
//   console.log(_id,message,userDetails._id)
//    const data = await axios.post(`${process.env.REACT_APP_API_URL}/message`, {senderId:_id,message:message,recevierId:userDetails._id});
//    console.log(data)
//    if(data){
//     setMessage("")
//    }
// }
// // const fetchUserMessage = () => {
// //   axios.get(`${process.env.REACT_APP_API_URL}/message`).then((response) => {
// //       setuserListMessage(response.data.userList)
// //   });
// // }

// useEffect(() => {
//     fetchuser() 
// },[])

// useEffect(() => {
//   fetchUserMessage() 
// },[])

//   return (
//     <>
//     {userList.length>0? userList.map((item,id)=>{
//       return <li onClick={()=> setUserDetails(item)}>{item.name}</li>
//     }):null}
//     <div style={{backgroundColor:'grey'}}>
//       {userDetails.name}
//     </div>
//     {/* <div>
//     {userListMessage.length>0? userListMessage.map((item,id)=>{
//       return <li>{item.message}</li>
//     }):null}
//     </div> */}
//     <div>
//       <input type="text" id="message" name="message" value={message} onChange={(e)=> {
//         e.preventDefault()
//         setMessage(e.target.value)}}/>
//     </div>
//     <div>
//       <button onClick={(e)=>{
//         e.preventDefault()
//         triggerMessageSend()}}>
//         send
//       </button>
//     </div>
//     </>
//   );
// };

import { Button, notification } from 'antd';
const notificationhello=()=>{
    return notification.success("hello")
}
const showNotification = () => {
    notification.destroy();
    notification.success({message: 'message here'});
}
const PracticeModels = () => (
  <Button type="primary" onClick={showNotification}>
    Open the notification box
  </Button>
);

export default PracticeModels;