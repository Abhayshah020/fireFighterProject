import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../../components/cssFile/auth.css';
import img1 from '../../img/wave.png'
import img2 from '../../img/background.png'
import { notification } from 'antd';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faMap, faPhone, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import Map from "../../components/map/map";
import { Popconfirm } from 'antd';

const text = 'Please Drag The Marker To Your Location!';

const registerSchema = Yup.object().shape({

  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .oneOf([Yup.ref("password"), null], "Both Passwords Must Match"),

  role: Yup.string().required("Required"),
});

const Register = () => {
  const { localAddressNameAfterRevGeoCode, fireFighterLocationLatLng } = useSelector(state => state.location)
  const [showAddressName, setShowAddressName] = useState(localAddressNameAfterRevGeoCode)
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword1, setShowPassword1] = useState(true)
  const navigate = useNavigate()

  const random = () => {
    return Math.random().toString(16).substr(2, 14);
  };
  const addressLatLng = () => {
    return fireFighterLocationLatLng
  };

  return (
    <>
      <img className="wave" src={img1} alt="loading" />
      <div className="container">
        <div className="img">
          <img src={img2} alt="loading" />
        </div>
        <div className="login-content">
          <Formik
            initialValues={{
              name: "",
              address: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              role: "",
              adminId: "",
              addressLatLong:{},
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, { resetForm }) => {
              if (values.role === "admin") {
                values.adminId = random()
              } else {
                values.adminId = "#user"
              }
              // console.log(fireFighterLocationLatLng)
              values.addressLatLong = addressLatLng()
              // console.log(values.addressLatLong)
              // debugger;
              const { confirmPassword, ...updatedValues } = values
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedValues),
              };
              try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, requestOptions)
                const data = await res.json()
                if (data.isRegistered) {
                  notification.destroy();
                  notification.success({ message: data.msg, duration: 2 });
                  navigate('/')
                } else {
                  notification.destroy();
                  notification.error({ message: data.msg, duration: 2 });
                }
              } catch (err) {
                alert(err);
              }
            }}
          >


            {({ errors, touched }) => (
              <Form>
                <h2 className="title">Welcome</h2>

                <div className="input-div one">
                  <div className="i">
                    <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
                  </div>
                  <div className="div">
                    <Field name="name" type="text" placeHolder="name" />
                    {errors.name && touched.name ? <div className="validaton-message">{errors.name}</div> : null}
                  </div>
                </div>

                <Popconfirm 
                  placement="bottom"
                  title={text}
                  description={<Map isRegister={true} />}
                  okText="Yes"
                  cancelText="No"
                  footer= "none"
                  onClick={setShowAddressName(localAddressNameAfterRevGeoCode)}
                >
                  <div className="input-div pass">
                    <div className="i">
                      <FontAwesomeIcon icon={faMap} style={{ color: "black" }} />
                    </div>
                    <div className="div">
                      <Field name="address" type="text" required placeHolder="please locate your address" value={showAddressName}  />
                    </div>
                  </div>
                </Popconfirm>
                <div className="input-div pass">
                  <div className="i">
                    <FontAwesomeIcon icon={faContactBook} style={{ color: "black" }} />
                  </div>
                  <div className="div">
                    <Field name="email" type="text" placeHolder="Email" />
                    {errors.email && touched.email ? <div className="validaton-message">{errors.email}</div> : null}
                  </div>
                </div>

                <div className="input-div pass">
                  <div className="i">
                    <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} />
                  </div>
                  <div className="div">
                    <Field name="phone" type="text" placeHolder="phone" />
                    {errors.phone && touched.phone ? <div className="validaton-message">{errors.phone}</div> : null}
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

                <div className="input-div pass">
                  <div className="i">
                    <FontAwesomeIcon onClick={() => setShowPassword1(!showPassword1)} icon={showPassword1 ? faEyeSlash : faEye} style={{ color: "black", cursor: "pointer" }} />
                  </div>
                  <div className="div">
                    <Field name="confirmPassword" type={showPassword1 ? 'password' : 'text'} placeHolder="confirmPassword" />
                    {errors.confirmPassword && touched.confirmPassword ? <div className="validaton-message">{errors.confirmPassword}</div> : null}
                  </div>
                </div>

                <div>
                  <Field as="select" name="role" placeholder="Select Your Account Type" className="accountSelector">
                    <option value="">Select Your Account Type</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Field>
                  {errors.role && touched.role ? <div className="roleValidationMessage">{errors.role}</div> : null}
                </div>

                <button type="submit" className="btn btn-reg">Register Now!</button>
                <Link to="/" className="user_name">Already have account? Go Back To Login</Link>
                <Link to="/" className="user_name"><button className="btn-login">Login</button></Link>

              </Form>
            )}
          </Formik>
        </div>
      </div>

    </>

  )
}

export default Register;