import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from "axios";
import img1 from '../../img/waveUser.png'
import '../../components/cssFile/user.css'
import RescueList from '../../components/rescueListShow/rescueList';
function UserDashboard() {
  const { role } = useSelector(state => state.user)
  const [rescueList, setrescueList] = useState([])
  const [usersCount, setTotalUsersCount] = useState(0)

  const fetchAvailableItems =async(page, size) => {
      await axios.get(`${process.env.REACT_APP_API_URL}/rescueList?page=${page || 1}&size=${role === "admin" ? size || 8 : size || 6}`).then((response) => {
          setrescueList(response.data.rescueList)
          setTotalUsersCount(response.data.totalRescueListCount)
      });
  }
  useEffect(() => {
      fetchAvailableItems()
  }, [])
  return (
    <>
      <div>
        <img className="waveUser" src={img1} alt="loading" />
        <div><RescueList rescueList={rescueList} usersCount={usersCount} fetchAvailableItems={()=>fetchAvailableItems()}/></div>
      </div>
    </>
  )
}

export default UserDashboard
