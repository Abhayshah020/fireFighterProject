import React, { useState } from 'react'
import './rescueListBox.css'

const RescueListBox = (props) => {
   return (
      <>
      <div className='userBox'>
         <div className='userListBox1'>Contacted Person Name:{props.item.name}</div>
         <div className='userListBox2'>Rescue Address:{props.item.address}</div>
         <div className='userListBox3'>Contacted Person Name:{props.item.phone}</div>
      </div>

      </>
   )
}
export default RescueListBox;