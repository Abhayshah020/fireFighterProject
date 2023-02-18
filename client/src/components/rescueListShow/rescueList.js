import React from "react";
import { useSelector } from 'react-redux'
import { Pagination } from 'antd';
import '../cssFile/rescueListBox.css'
import RescueListBox from "./rescueListBox";
import NoData from "../noData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);

const RescueList = ({fetchAvailableItems,rescueList,usersCount}) => {
    const { role } = useSelector(state => state.user)

    return (
        <>
            {/* {JSON.stringify(rescueList)} */}
            <h2 className={role === "admin" ? "rescueListTitle" : "rescueUserListTittle"}>
                <FontAwesomeIcon icon={role === "admin" ? faExclamationCircle : faExclamationTriangle} style={{ backgroundColor: role === 'admin' ? 'black' : 'none', borderRadius: '25px', color: 'red', fontSize: '25', marginRight: '20px' }} />
                Rescue Operation List!
            </h2>
            {rescueList.length > 0 ? (
                 <>
                    <div className={role === "admin" ? "paginationCss" : "paginationUserCss"}>
                        <div>
                            {rescueList.map((item, id) => {
                                return <RescueListBox item={item} key={id} fetchAvailableItems={()=>fetchAvailableItems()} />
                            })}
                        </div>

                        <div style={role === "admin" ? {} : { margin: "20px", display: "flex", justifyContent: 'center'}}>
                            <Pagination defaultCurrent={1} total={usersCount} defaultPageSize={role === "admin" ? 8 : 6} onChange={(page, size) => fetchAvailableItems(page, size)} />
                        </div>
                    </div>


                </> 
             ) : <NoData />} 
        </>
    )
}

export default RescueList  