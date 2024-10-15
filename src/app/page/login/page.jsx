"use client"

import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';





export default function Login() {
    const initialValues = { email: '', password: '', rememberMe: false };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('vui lòng nhập đúng địa chỉ email')
            .required('email k đc để trống'),
        password: Yup.string()
            .min(8, 'mật khẩu phải từ 8 kí từ trở lên')
            .required('mật khẩu k đc để trống'),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="login-registration-wrapper">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="login-page-form-area">
                            <h4 className="title">Login to Your Account👋</h4>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form>
                                        <div className="single-input-wrapper">
                                            <label htmlFor="email">Your Email</label>
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter Your Email"
                                            />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className="single-input-wrapper">
                                            <label htmlFor="password">Your Password</label>
                                            <Field
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <div className="single-checkbox-filter">
                                            <div className="check-box">
                                                <Field type="checkbox" id="type-1" name="rememberMe" />
                                                <label htmlFor="type-1">Remember Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="rts-btn btn-primary">Login</button>
                                        <div className="google-apple-wrapper">
                                            <div className="google">
                                                {/* <img src="assets/images/contact/06.png" alt="contact" /> */}
                                            </div>
                                            <div className="google">
                                                {/* <img src="assets/images/contact/07.png" alt="contact" /> */}
                                            </div>
                                        </div>
                                        <p>
                                            Don&apos; t Have an account?{" "}
                                            <a href="registration.html">Registration</a>
                                        </p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-thumbnail-login-p mt--100">
                            <img
                                // src="assets/images/banner/login-bg.png"
                                width={600}
                                height={495}
                                alt="login-form"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
