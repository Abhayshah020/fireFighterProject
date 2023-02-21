import { Skeleton } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux'

const UserHomePageLoader = () => {
    const { role } = useSelector(state => state.user)
    return (
        <>
            <div style={{display:'grid',justifyContent:'center'}}>
                <Skeleton.Input active style={{ display:role==="admin"?"flex":'',justifyContent:role==="admin"?'center':'', width:role==="admin"?"50vw":"90vw",height:role==="admin"?'8vh':'10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ display:role==="admin"?"flex":'',justifyContent:role==="admin"?'center':'', width:role==="admin"?"50vw":"90vw",height:role==="admin"?'8vh':'10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ display:role==="admin"?"flex":'',justifyContent:role==="admin"?'center':'', width:role==="admin"?"50vw":"90vw",height:role==="admin"?'8vh':'10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ display:role==="admin"?"flex":'',justifyContent:role==="admin"?'center':'', width:role==="admin"?"50vw":"90vw",height:role==="admin"?'8vh':'10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ display:role==="admin"?"flex":'',justifyContent:role==="admin"?'center':'', width:role==="admin"?"50vw":"90vw",height:role==="admin"?'8vh':'10vh', margin: "5px" }} /><br />
                
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Skeleton.Button active style={{ margin: "5px" }} />
                <Skeleton.Button active style={{ margin: "5px" }} />
                <Skeleton.Button active style={{ margin: "5px" }} />
            </div>

        </>
    );
};
export default UserHomePageLoader;