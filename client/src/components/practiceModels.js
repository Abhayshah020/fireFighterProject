import React from "react";
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);

const PracticeModels = () => {
const hello = async()=>{
  await socket.emit('rescueRequest',"hi")
}

  return (
    <>
      <button onClick={() => hello()} >Click</button>
    </>
  )
}
export default PracticeModels;