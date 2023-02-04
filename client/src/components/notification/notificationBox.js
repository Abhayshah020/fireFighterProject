import React from "react";
import '../cssFile/rescueListBox.css'
import { useSelector } from 'react-redux'

const NotificationBox = (props) => {
    const { role } = useSelector(state => state.user)
    return (
        <>
            <div className='missionNewsBox' style={{backgroundColor:role==="admin"?'':"#CDAD62"}} >
                <div className='missionListBox' style={{margin:'25px'}}>
                    <div style={{marginBottom:'10px'}}><strong style={{textDecoration:'underline'}}>Fire Broke Out in {props.item.address}!</strong></div>
                {props.item.date}, In {props.item.address}: Fire broke out in {props.item.address} area.
                    <strong>{props.item.name}</strong> was the first perosn to call for our <strong>fire fighter</strong> department, we are very please with 
                     his quick response for calling us for help, due to his quick call we will be able to help to People from major harm and also
                     save destruction of public property. Our department <strong>fire fighter</strong> on there way to this rescue mission!
                </div>
            </div>
        </>
    )
}
export default NotificationBox;