import '../cssFile/rescueListBox.css'
import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { message } from 'antd';

const CustomForm = () => {

    const rescueFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        address: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        phone: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),

    });
    return (
        <>
            <div className="form">
                <h2 className="formTitle">Emergency Fillup Form!</h2>
                <Formik
                    initialValues={{
                        name: "",
                        address: "",
                        phone: "",
                        date:"",
                    }}
                    validationSchema={rescueFormSchema}
                    onSubmit={async (values, { resetForm }) => {
                        values.date=new Date().toString()
                        const requestOptions = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(values),
                        };
                        const res = await fetch(`${process.env.REACT_APP_API_URL}/rescueList`, requestOptions);
                        const data = await res.json()
                        if (data.isRescueOrder) {
                            message.success(data.msg, [2])
                        } else {
                            message.error(data.msg, [2])
                        }
                    }}
                >
                    
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field name="name" type="text" placeHolder="Contact Personal Name" className='inputField' />
                                {errors.name && touched.name ? <div className="valdMessage">{errors.name}</div> : null}
                            </div>

                            <div>
                                <Field name="address" type="text" placeHolder="Address of Fire Accident" className='inputField' />
                                {errors.address && touched.address ? <div className="valdMessage">{errors.address}</div> : null}
                            </div>
                            <div>
                                <Field name="phone" type="string" placeHolder="Contact Personal Number" className='inputField' />
                                {errors.phone && touched.phone ? <div className="valdMessageDown">{errors.phone}</div> : null}
                            </div>

                            <button type="submit" className='inputFieldSubmit' >
                                <FontAwesomeIcon icon={faFlag} style={{ marginRight: '5px' }} />
                                Rescue Now!
                            </button>
                        </Form>
                    )}
                </Formik>


            </div>
        </>

    )
}

export default CustomForm;
