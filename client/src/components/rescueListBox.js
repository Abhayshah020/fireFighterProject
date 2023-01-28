import React, { useState } from 'react'
import './rescueListBox.css'
const RescueListBox = (props) => {
   return (
      <>
      <div className='userBox'>
         <div className='userListBox'>Contacted Person Name:<br/>{props.item.name}</div>
         <div className='userListBox'>Rescue Address:<br/>{props.item.address}</div>
         <div className='userListBox'>Contacted Person Name:<br/>{props.item.phone}</div>
         <div className='userListBox'><button className='editButton'>Edit</button>
         <button className='deleteButton'>Delete</button></div>
      </div>

      </>
   )
}
export default RescueListBox;