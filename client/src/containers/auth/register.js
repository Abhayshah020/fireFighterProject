import React from 'react';
// import '../../components/login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
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
    password: Yup.string().required('Required'),
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
        name:'',
        address:'',
         email: '',
         phone:'',
         password:'',
         confirmPassword:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
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
         </Form>
       )}
     </Formik>
        </>
        
 )}

export default Register;