import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"
import '../cssFile/profile.css'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { Button } from 'antd';
import img1 from '../../img/firefighterLogo.jpg'
import img2 from '../../img/firefighter.jpg'
import { Skeleton } from 'antd';

const CredentialsProfile = () => {

    const { _id, role, name, address, phone, email, adminId } = useSelector(state => state.user)
    const [file, setFile] = useState(null)
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

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
        });
        setLoading(false)
    };


    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <>
            <div className="profilePicsBox">
                <div>
                    <div>
                        {!loading? userDetails.avatarName && <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="Loading.." className="profilePic"/>: <Skeleton.Button shape="circle" active style={{display:'grid', width: "13vw", height: '25vh',margin: "5px"}} />}
                        {/* {userDetails.avatarName && <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="Loading.." className="profilePic"/>} */}
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
                    <h6 style={{ textDecoration: 'underline' }}>@id #{!loading? _id: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
                    <h6>Name:{!loading? name: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
                    <h6>Address:{!loading? address: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
                    <h6>Phone: {!loading? phone: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
                    <h6>Email: {!loading? email: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6><br />
                    <h6>Account: {!loading? role: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
                    <h6>AdminId: #{!loading? adminId: <Skeleton.Input active style={{display:'grid', width: "20vw", height: '4vh',margin: "5px"}} />}</h6>
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