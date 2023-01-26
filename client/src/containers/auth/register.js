import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../../components/auth.css';
import img1 from '../../img/wave.png'
import img2 from '../../img/background.png'
import img3 from '../../img/avatar.svg'
import { message } from 'antd';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faContactBook, faLock, faMap, faPhone, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



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
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword1, setShowPassword1] = useState(true)
  const navigate = useNavigate()
  const random = () => {
    return Math.random().toString(16).substr(2, 14);
};
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
              name: "",
              address: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              role:"",
              adminId:random(),
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values)
              const { confirmPassword, ...updatedValues } = values
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedValues),
              };
              try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, requestOptions)
                const data = await res.json()
                console.log(data.isRegistered)
                if (data.isRegistered) {
                  message.success(data.msg, [2])
                  navigate('/')
                } else {
                  message.error(data.msg, [2])
                }
              } catch (err) {
                alert(err);
              }
            }}
          >


            {({ errors, touched }) => (
              <Form>
                {/* <img src={img3} /> */}
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

                <div className="input-div pass">
                  <div className="i">
                    <FontAwesomeIcon icon={faMap} style={{ color: "black" }} />
                  </div>
                  <div className="div">

                    <Field name="address" type="text" placeHolder="address" />
                    {errors.address && touched.address ? <div className="validaton-message">{errors.address}</div> : null}

                  </div>
                </div>

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
                <Link to="/" className="user_name"><a href="#">Already have account? Go Back To Login</a></Link>
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