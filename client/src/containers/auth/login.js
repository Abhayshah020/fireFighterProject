import React from 'react';
// import '../../components/login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  
const Login = () => {
 return(
<>
             <h1>Signup</h1>
     <Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="email" type="email" placeHolder="Email"/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <Field name="password" type="password" placeHolder="Password" />
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </>
        
 )}

export default Login;
