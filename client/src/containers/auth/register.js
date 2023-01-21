import React from 'react';
// import '../../components/login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

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
 return(
<>
    <h1>Signup</h1>
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
              onSubmit={async(values, { resetForm }) => {
                const {confirmPassword, ...updatedValues} = values
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
           <Field name="name" type="text" placeHolder="name"/>
           {errors.name && touched.name ? <div>{errors.name}</div> : null}
           
           <Field name="address" type="text" placeHolder="address"/>
           {errors.address && touched.address ? <div>{errors.address}</div> : null}

           <Field name="email" type="text" placeHolder="Email"/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <Field name="phone" type="text" placeHolder="phone"/>
           {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

           <Field name="password" type="password" placeHolder="Password" />
           {errors.password && touched.password ? <div>{errors.password}</div> : null}

           <Field name="confirmPassword" type="password" placeHolder="confirmPassword" />
           {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}


            <button type="submit">Submit</button>
            <Link to="/" className="user_name">hello</Link>
         </Form>
       )}
     </Formik>
        </>
        
 )}

export default Register;