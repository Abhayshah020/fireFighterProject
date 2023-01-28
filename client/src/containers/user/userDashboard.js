import React from 'react'
import { useSelector } from 'react-redux'
import img1 from '../../img/waveUser.png'
import '../../components/user.css'
import RescueList from '../../components/rescueList';
function UserDashboard() {
  const { _id } = useSelector(state => state.user)
  const { name, role } = useSelector(state => state.user)
  return (
    <>
      <div>
        <img className="waveUser" src={img1} />
        <div><RescueList /></div>
      </div>
    </>
  )
}

export default UserDashboard
