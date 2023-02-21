import { Skeleton } from 'antd';
import React from 'react';
const MissionPageLoader = () => {
    return (
        <>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
                <Skeleton.Input active style={{ width: "90vw", height: '10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ width: "90vw", height: '10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ width: "90vw", height: '10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ width: "90vw", height: '10vh', margin: "5px" }} /><br />
                <Skeleton.Input active style={{ width: "90vw", height: '10vh', margin: "5px" }} /><br />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Skeleton.Button active style={{ margin: "5px" }} />
                <Skeleton.Button active style={{ margin: "5px" }} />
                <Skeleton.Button active style={{ margin: "5px" }} />
            </div>

        </>
    );
};
export default MissionPageLoader;