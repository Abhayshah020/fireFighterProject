import React, { useEffect } from "react";
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);

const PracticeModels = () => {
const hello = async()=>{
  await socket.emit('rescueRequest',"hi")
}
// useEffect(async()=>{
//   await socket.on('rescueRequest',(rescueRequest)=>{
//     console.log(rescueRequest)
//   })
// });

  return (
    <>
      <button onClick={() => hello()} >Click</button>
    </>
  )
};
export default PracticeModels;