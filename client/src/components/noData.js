import React from 'react';
import './rescueListBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

 const NoData = () => {
    const { _id, role } = useSelector(state => state.user)
    return(
        <>
        <div className={role=="admin"?'noDataValue':'noUserDataValue'}>
        <h3><FontAwesomeIcon icon={faExclamationTriangle} style={{color:'red',fontSize:'25' }} />There Is No Firefighter Mission!</h3>
        </div>

        </>
    )
 }
 export default NoData;