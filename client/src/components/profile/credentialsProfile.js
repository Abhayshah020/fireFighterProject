import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import '../cssFile/profile.css'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { Button } from 'antd';
import img1 from '../../img/firefighterLogo.jpg'
import img2 from '../../img/firefighter.jpg'
const CredentialsProfile = () => {

    const { _id, role, name, address, phone, email, adminId } = useSelector(state => state.user)
    const [file, setFile] = useState(null)
    const [userDetails, setUserDetails] = useState({})


    const triggerImgSave = async () => {

        const formdata = new FormData()
        formdata.append("avatar", file)
        formdata.append("_id", _id);
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
            method: "POST",
            body: formdata,
        });
        const data = await res.json();
        if (data) {
            message.success(data.msg, [1.4])
            fetchUserDetails()
        }
    };


    const fetchUserDetails = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/credentialsProfile/${_id}`).then((response) => {
            setUserDetails(response.data.userDetails);
            // console.log(userDetails);
        });
    };


    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <>
            <div className="profilePicsBox">
                <div>
                    <div>
                        {userDetails.avatarName && <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="Loading.." className="profilePic"/>}
                    </div>
                    <div>
                        <input type="file" onChange={(e) => {
                            setFile(e.target.files[0])
                        }} className="inputFieldProfile buttonOfProfilePicsSave" />
                    </div>
                    <div>
                        <Button onClick={() => triggerImgSave()} className="profileSavePic buttonOfProfilePicsSave">
                            Save
                        </Button>
                    </div>
                </div>

                <div>
                    <h6 style={{ textDecoration: 'underline' }}>@id #{_id}</h6>
                    <h6>Name: {name}</h6>
                    <h6>Address: {address}</h6>
                    <h6>Phone: {phone}</h6>
                    <h6>Email: {email}</h6><br />
                    <h6>Account: {role}</h6>
                    <h6>AdminId: #{adminId}</h6>
                </div>
                <div>
                    <Link to="/" >
                        <img src={role==="admin"?img1:img2} className={role==="admin"?"fireFighterLogoProfilePic":"fireFighterLogoProfileUserPic"} alt="loading"/>
                    </Link>
                </div>
            </div>

        </>
    );
};
export default CredentialsProfile;