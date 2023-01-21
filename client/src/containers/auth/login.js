import React from 'react';
// import '../../components/login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/actions/userAction"
import {Link} from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()

  const loginSchema = Yup.object().shape({ 
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required'),
  
  });
  
  return (
    <>
      
      <h1>Signup</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, { resetForm }) => {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          };
          const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
          const data = await res.json()
          console.log(values)
          if (data.isLogedin) {
            dispatch(addUserDetails(data.userData))
          }
          resetForm({ values: '' })
        }}
      >

        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" placeHolder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Field name="password" type="password" placeHolder="Password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
            <Link to="/register" className="user_name">hello</Link>
          </Form>
        )}
      </Formik>
    </>

  )
}

export default Login;
