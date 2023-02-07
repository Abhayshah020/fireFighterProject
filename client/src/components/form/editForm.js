import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import '../cssFile/rescueListBox.css'
import { OmitProps } from "antd/es/transfer/ListBody";
const EditForm = ({ isAdminEdit, item, handleCancel,showmodal}) => {
    const itemSchema = Yup.object().shape({
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
            <Formik
                initialValues={item || {}}
                validationSchema={itemSchema}
                onSubmit={async (values, { resetForm }) => {
                    const requestOptions = {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),

                    };
                    const res = await fetch(`${process.env.REACT_APP_API_URL}/rescueList`, requestOptions);
                    const data = await res.json();
                    if (data.isEdit) {
                        message.success(data.msg, [1.4])
                        // showmodal(false)
                    } else {
                        message.error(data.errorMsg, [1.8])
                    }
                    
                }}
            >

                {({ errors, touched }) => (
                    <div className="editForm">
                        <Form>
                            <div>
                                <Field name="name" placeholder="Contact Personal Name" className="fieldEditForm" />
                                {errors.name && touched.name ? ( <div className="errorEditForm">{errors.name}</div> ) : null}
                            </div>
                            <div>
                                <Field name="address" placeholder="Address of Fire Accident" type="text" className="fieldEditForm"/>
                                {errors.address && touched.address ? ( <div className="errorEditForm">{errors.address}</div>) : null}
                            </div>
                            <div>
                                <Field name="phone" placeholder="Contact Personal Number" type="string" className="fieldEditForm"/>
                                {errors.phone && touched.phone ? (<div className="errorEditForm">{errors.phone}</div>) : null}
                            </div>

                            <button name="Sumbit" type="submit" className="editFormSubmitButton">Edit Rescue Mission</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default EditForm