import React, { useEffect } from "react";
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);

const PracticeModle2 = () => {
useEffect(async()=>{
    await socket.on('rescueRequest',(rescueRequest)=>{
        console.log(rescueRequest)
    })
})
  return (
    <>
      <h2>hello</h2>
    </>
  )
}
export default PracticeModle2;