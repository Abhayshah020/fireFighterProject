import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../../components/auth.css';
import img1 from '../../img/wave.png'
import img2 from '../../img/background.png'
import img3 from '../../img/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faContactBook, faLock, faMap, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'


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
    .required('Required'),
});

const Register = () => {
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
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, { resetForm }) => {
              const { confirmPassword, ...updatedValues } = values
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedValues),
              };
              try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, requestOptions)
                // resetForm({ values: "" });
                console.log(values)
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
                  <FontAwesomeIcon icon={faUser} style={{color:"black"}}/>
                  </div>
                  <div className="div">

                  <Field name="name" type="text" placeHolder="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                  </div>
                </div>

                <div className="input-div pass">
                  <div className="i">
                  <FontAwesomeIcon icon={faMap} style={{color:"black"}}/>
                  </div>
                  <div className="div">

                  <Field name="address" type="text" placeHolder="address" />
                {errors.address && touched.address ? <div>{errors.address}</div> : null}

                  </div>
                </div>

                <div className="input-div pass">
                  <div className="i">
                  <FontAwesomeIcon icon={faContactBook} style={{color:"black"}}/>
                  </div>
                  <div className="div">
                  <Field name="email" type="text" placeHolder="Email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                  </div>
                </div>

                <div className="input-div pass">
                  <div className="i">
                  <FontAwesomeIcon icon={faPhone} style={{color:"black"}}/>
                  </div>
                  <div className="div">

                  <Field name="phone" type="text" placeHolder="phone" />
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                  <FontAwesomeIcon icon={faLock} style={{color:"black"}}/>
                  </div>
                  <div className="div">

                  <Field name="password" type="password" placeHolder="Password" />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}

                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                  <FontAwesomeIcon icon={faLock} style={{color:"black"}}/>
                  </div>
                  <div className="div">

                  <Field name="confirmPassword" type="password" placeHolder="confirmPassword" />
                {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

                  </div>
                </div>

                <a href="#">Change Password/Login details?</a>
                <button type="submit" className="btn">Register Now!</button>
                <Link to="/" className="user_name"><button className="btn">Login</button></Link>

                

              </Form>
            )}
          </Formik>
          </div>
      </div>

        </>
        
 )}

export default Register;



{/* 
        return (
        <>

          <Formik>

            {({ errors, touched }) => (
              <Form>
                <img src={img3} />
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <Field name="email" type="email" placeHolder="Email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <Field name="password" type="password" placeHolder="Password" />
                    {errors.password && touched.password ? <div>{errors.password}</div> : null}

                  </div>
                </div>
                <a href="#">Change Password/Login details?</a>
                <button type="submit" className="btn">Submit</button>
                <a href="#">New here? we will be happy to have you on board</a>
                <Link to="/register" className="user_name"><input type="submit" className="btn" value="Register Now!" /></Link>

              </Form>
            )}
          </Formik>
        </div>
      </div>

    </>

  )
} */}
