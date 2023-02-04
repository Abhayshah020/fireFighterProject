import React from 'react'
import img1 from '../../img/waveUser.png'
import '../../components/cssFile/user.css'
import RescueList from '../../components/rescueListShow/rescueList';
function UserDashboard() {
  return (
    <>
      <div>
        <img className="waveUser" src={img1} alt="loading" />
        <div><RescueList /></div>
      </div>
    </>
  )
}

export default UserDashboard
