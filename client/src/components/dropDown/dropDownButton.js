import { Button, Dropdown, Space, notification } from 'antd';
import { Link } from 'react-router-dom';
import { logoutResetDetails } from "../../redux/actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCommenting, faSignOut } from '@fortawesome/free-solid-svg-icons'
import '../cssFile/user.css';
import React, { useState, useEffect } from "react";
import axios from "axios"
import DrawerFeature from '../drawer/drawer';
import img from '../../img/userDafault.png'

const DropDownButton = () => {
  const [userDetails, setUserDetails] = useState({})
  const { _id, email } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const fetchUserDetails = () => {
    // debugger;
    axios.get(`${process.env.REACT_APP_API_URL}/credentialsProfile/${_id}`).then((response) => {
      setUserDetails(response.data.userDetails)

    });
  };
  useEffect(() => {
    fetchUserDetails();
  },[]);

  const triggerLogout = () => {
    dispatch(logoutResetDetails())
    notification.success({ message: "You have Logged out Successfully", duration: 1.4 });
  }
  const items = [
    {
      key: '1',
      label: (
        <>
          <Link to="/profile" style={{ color: "black" }}>
            <div className='profileLogoInsideBox' >
              {userDetails.avatarName ? <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="P" className="profileUserLogo" /> :
                <img src={img} alt="P" className="profileUserLogo" />}
              #{email}
            </div>
          </Link>
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
          <div>
            <FontAwesomeIcon icon={faCog} style={{ color: "black" }} />
            <DrawerFeature />
          </div>

        </>
      ),
    },
    {
      key: '3',
      label: (
        <>
          <div onClick={() => triggerLogout()}>
            <Link to="/" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faSignOut} style={{ color: "black" }} />
              <button className="button_logout">
                Logout
              </button>
            </Link>
          </div>

        </>
      ),
    },
  ];
  return (
    <>
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button className='profileBox' >
            {userDetails.avatarName ? <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="P" className="profileUserLogo" /> :
              <img src={img} alt="P" className="profileUserLogo" />}
          </Button>
        </Dropdown>
      </Space>
    </>
  )

};
export default DropDownButton;