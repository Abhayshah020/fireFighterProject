import React from 'react';
import './rescueListBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
 const NoData = () => {
    return(
        <>
        <div className='noDataValue'>
        <h3><FontAwesomeIcon icon={faExclamationTriangle} style={{color:'red',fontSize:'25' }} />There Is No Firefighter Mission!</h3>
        </div>

        </>
    )
 }
 export default NoData;