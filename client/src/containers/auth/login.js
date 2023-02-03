import '../../components/auth.css';
import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/actions/userAction"
import { Link } from 'react-router-dom';
import img1 from '../../img/wave.png'
import img2 from '../../img/background.png'
import img3 from '../../img/avatar.svg'
import { Button, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faContactBook, faLock, faEye, faEyeSlash, faIdBadge, faIdCard } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [showPassword, setShowPassword] = useState(true)
    const [showAdminIdInput, setshowAdminIdInput] = useState(true)
    const dispatch = useDispatch()
    const displayId = () => {
        if (showAdminIdInput) {
            return "none"
        } else {
            return ""
        }
    }
    const displayRequired = () => {
        if (showAdminIdInput) {
            return ""
        } else {
            //  required('Required')
        }
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        adminId: Yup.string()
            .min(8, 'Too Short!')
            .max(50, 'Too Long!'),
        password: Yup.string().required('Required'),

    });

    return (

        <>
            <img className="wave" src={img1} />
            <div className="container">
                <div className="img">
                    <img src={img2} />
                </div>
                <div className="login-content">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            adminId: ""
                        }}
                        validationSchema={loginSchema}
                        onSubmit={async (values, { resetForm }) => {
                            console.log(values)
                            const requestOptions = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(values),
                            };
                            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
                            const data = await res.json()
                            console.log(data.isLogedin)
                            if (data.isLogedin) {
                                dispatch(addUserDetails(data.userData))
                                notification.destroy();
                                notification.success({message:data.msg,duration:1.2});
                            } else {
                                notification.destroy();
                                notification.error({message:data.errorMsg,duration:1.8});
                            }
                            // resetForm({ values: '' })
                        }}
                    >

                        {({ errors, touched }) => (
                            <Form>
                                <img src={img3} />
                                <h2 className="title">Welcome</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <FontAwesomeIcon icon={faContactBook} style={{ color: "black" }} />
                                    </div>
                                    <div className="div" >
                                        <Field name="email" type="email" placeHolder="Email" />
                                        {errors.email && touched.email ? <div className="validaton-message">{errors.email}</div> : null}
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} icon={showPassword ? faEyeSlash : faEye} style={{ color: "black", cursor: "pointer" }} />
                                    </div>
                                    <div className="div">
                                        <Field name="password" type={showPassword ? 'password' : 'text'} placeHolder="Password" />
                                        {errors.password && touched.password ? <div className="validaton-message">{errors.password}</div> : null}

                                    </div>
                                </div>

                                <div className="input-div pass" style={{ display: displayId() }} >
                                    <div className="i">
                                        <FontAwesomeIcon icon={faIdCard} style={{ color: "black" }} />
                                    </div>
                                    <div className="div">
                                        <Field name="adminId" type="text" placeHolder="AdminId" />
                                        {errors.adminId && touched.adminId ? <div className="validaton-message">{errors.adminId}</div> : null}

                                    </div>
                                </div>

                                <button type="submit" className="btn">Submit</button>
                                <Link to="/register" className="user_name"><a href="#">New here? we will be happy to have you on board</a>
                                    <input type="submit" className="btn-login" value="Register Now!" /></Link>
                                <input type="button" onClick={() => setshowAdminIdInput(!showAdminIdInput)} value={showAdminIdInput ? "Login As User" : "Login As Admin"} className='inputAdminId' />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </>

    )
}

export default Login;