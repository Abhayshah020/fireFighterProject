import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import RescueListBox from "./rescueListBox";
import NoData from "./noData";
import CustomForm from "./customForm";
const RescueList = () => {
    const { _id } = useSelector(state => state.user)
    const { name, role } = useSelector(state => state.user)
    const [rescueList, setrescueList] = useState([])
    const [usersCount, setTotalUsersCount] = useState(0)

     const fetchAvailableItems = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/rescueList`).then((response) => {
            setrescueList(response.data.rescueList)
            setTotalUsersCount(response.data.totalUsersCount)
        });
    }

    useEffect(() => {
        fetchAvailableItems()
    })
   
    return (
        <>
        <h2 className="rescueListTitle">Rescue Operation List!</h2>
            {rescueList.length > 0 ? (
                <>
                    {rescueList.map((item, id) => {
                        return <RescueListBox item={item} key={id} />
                    })}
                </>
            ) : <NoData/>}
        </>
    )
}

export default RescueList  