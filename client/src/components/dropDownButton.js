import { Button, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { logoutResetDetails } from "../redux/actions/userAction"
import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCogs, faCommenting, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import img1 from '../img/cat.jpg'
import './user.css';
import React, { useState } from "react";
import { message } from 'antd';

const DropDownButton = () => {

  const { name,email } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const triggerLogout = () => {
  dispatch(logoutResetDetails())
  message.success("You have Logged out Successfully", [1.4])
  }
  const items = [
    {
      key: '1',
      label: (
        <>
        <div className='profileLogoInsideBox' >
          <img src={img1} className="profileUserLogo" />
          @{email}        
        </div>
          
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
        <div >
        <FontAwesomeIcon icon={faCog} style={{ color: "black" }} /><button className="button_logout"><Link to="/" style={{color:"black"}}>Settings</Link></button>
        </div>
         
        </>      
      ),
    },
    {
      key: '3',
      label: (
        <>
        <div >
        <FontAwesomeIcon icon={faCommenting} style={{ color: "black" }} /><button className="button_logout"><Link to="/" style={{color:"black"}}>Give FeedBack</Link></button>
        </div>
         
        </>      
      ),
    },
    {
      key: '4',
      label: (
        <>
        <div  onClick={() => triggerLogout()}>
        <FontAwesomeIcon icon={faSignOut} style={{ color: "black" }} /><button  className="button_logout"><Link to="/" style={{color:"black"}}>Logout</Link></button>
        </div>
         
        </>      
      ),
    },
  ];
  return(
    <>
        <Space wrap>
      <Dropdown menu={{items}} placement="bottomRight">
        <Button className='profileBox' ><img src={img1} className="profileUserLogo" /></Button>
      </Dropdown>
    </Space>
    </>

  )

  };
export default DropDownButton;