// import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux'
// import axios from "axios";
// import { Button, Drawer } from 'antd';
// const PracticeModels = () => {
//   const { _id } = useSelector(state => state.user)
//   const [userList, setuserList] = useState([])
//   const [userDetails, setUserDetails] = useState({})
//   const [message, setMessage] = useState('')

// const fetchuser = () => {
//     axios.get(`${process.env.REACT_APP_API_URL}/userList`).then((response) => {
//         setuserList(response.data.userList)
//     });
// }

// const triggerMessageSend = async()=>{
//   console.log(_id,message,userDetails._id)
// //    const data = await axios.post(`${process.env.REACT_APP_API_URL}/message`, {senderId:_id,message:message,recevierId:userDetails._id});
// //    console.log(data)
// //    if(data){
// //     setMessage("")
// //    }
// }

// useEffect(() => {
//     fetchuser() 
// },[])
// const [open, setOpen] = useState(false);
// const showDrawer = () => {
//   setOpen(true);
// };
// const onClose = () => {
//   setOpen(false);
// };
// // useEffect(() => {
// //   fetchUserMessage() 
// // },[])

//   return (
//     <>
//           <Button type="primary" onClick={showDrawer}>
//         Open
//       </Button>
//       <Drawer title="Basic Drawer" placement="bottom" onClose={onClose} open={open}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     {userList.length>0? userList.map((item,id)=>{
//       return <li onClick={()=> setUserDetails(item)} style={{backgroundColor:"orange",width:'100px',padding:'0 20px',cursor:'pointer',margin:"10px",listStyle:'none',border:"1px solid black"}}>{item.name}</li>
//     }):null}
//     <div style={{backgroundColor:'grey'}}>
//       {userDetails.name}
//     </div>
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


// // import { Button, notification } from 'antd';
// // const notificationhello=()=>{
// //     return notification.success("hello")
// // }
// // const showNotification = () => {
// //     notification.destroy();
// //     notification.success({message: 'message here'});
// // }
// // const PracticeModels = () => (
// //   <Button type="primary" onClick={showNotification}>
// //     Open the notification box
// //   </Button>
// // );

// export default PracticeModels;