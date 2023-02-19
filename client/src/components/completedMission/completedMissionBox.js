import React, { useState } from "react";
import { useSelector } from 'react-redux'
import '../cssFile/rescueListBox.css'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 10) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? <i style={{ color: 'blue' }}>..read more</i> : <i style={{ color: 'blue' }}>..show less</i>}
            </span>
        </p>
    );
};

const CompletedMissionBox = (props) => {
    const { role } = useSelector(state => state.user)
    const editAccept = () => {
        return 'Mission Completed'
    }

    return (
        <>
            <div className='missionBox' style={{ backgroundColor: '#00E5FF' }}>
                <div className='missionListBox'>Contacted Person Name:<br />{props.item.name}</div>
                <div className='missionListBox'>Rescue Address:<br /><ReadMore>{props.item.address}</ReadMore></div>
                <div className='missionListBox'>Contacted Person Name:<br />{props.item.phone}</div>
                <div className='missionListBox'>
                    <button className='acceptListBox'>
                        {editAccept()}
                    </button>
                </div>
            </div>
        </>
    )
}
export default CompletedMissionBox;

