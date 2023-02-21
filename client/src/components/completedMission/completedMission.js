import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Pagination } from 'antd';
import axios from "axios";
import '../cssFile/rescueListBox.css'
import NoData from "../noData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../img/wave1.png'
import img2 from '../../img/wave2.png'
import '../../components/cssFile/user.css'
import img3 from '../../img/waveUser.png'
import CompletedMissionBox from "./completedMissionBox";
import io from 'socket.io-client';
import { notification } from 'antd';
import MissionPageLoader from '../skeleton/missionPageLoader';
const socket = io(process.env.REACT_APP_API_URL);

const CompletedMission = () => {

    const { role } = useSelector(state => state.user)
    const [rescueList, setrescueList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const fetchAvailableItems = async (page, size) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/rescueMission?page=${1}&size=${6}`).then((response) => {
            setrescueList(response.data.rescueList)
            setTotalUsersCount(response.data.totalRescueListCount)
        });
        setLoading(false)
    }
    useEffect(() => {
        socket.on('rescueStatus', (rescueStatus) => {
            if (rescueStatus) {
                fetchAvailableItems()
                notification.destroy();
                notification.error({ message: "The Mission was Updated by the Firefighter's successfully", duration: 2 });
            }
        })
        fetchAvailableItems()
    }, [])
    const backgroundColor = () => {
        if (role === "admin") {
            return (
                <>
                    <img className="wave1" src={img1} alt="loading" />
                    <img className="wave2" src={img2} alt="loading" />
                </>
            )
        }else{
            return(
                <>
                <img className="waveUser" src={img3} alt="loading" />
                </>
            )
        }
    }
    const skeletonOrData = () => {
        if (!loading && rescueList.length > 0) {
            return (
                <>
                    <div className="paginationUserCss">
                        <div>
                            {rescueList.map((item, id) => {
                                if (item.rescueStatus === "missionSuccess") {
                                    return <CompletedMissionBox item={item} key={id} fetchAvailableItems={() => fetchAvailableItems()} />
                                } else {
                                    return null
                                }
                            })}
                        </div>

                        <div style={{ margin: "20px", display: "flex", justifyContent: 'center' }}>
                            <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={6} onChange={(page, size) => fetchAvailableItems(page, size)} />
                        </div>
                    </div>
                </>
            )
        }else if(loading){
            return <MissionPageLoader/>
        }else {
            return <NoData/>
        }
    }
    return (
        <>
            {backgroundColor()}
            <h2 className="rescueUserListTittle">
                <FontAwesomeIcon icon={faCheckCircle} style={{ backgroundColor: role === 'admin' ? 'black' : 'none', borderRadius: '25px', color: 'red', fontSize: '25', marginRight: '20px' }} />
                Rescue Mission Successfull List!
            </h2>
            {skeletonOrData()}

        </>
    )
}

export default CompletedMission  