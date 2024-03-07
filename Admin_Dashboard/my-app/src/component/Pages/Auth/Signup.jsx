import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    // Your signup logic goes here, but we're not handling it in this example
    console.log('Form values:', values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      email: '',
      password: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      contact: Yup.string().required('Contact number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
    }),
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center ms-0 me-0">
        <div
          className="container-lg"
          style={{
            backgroundImage: `url('https://appsrv1-147a1.kxcdn.com/volt-dashboard/img/illustrations/signin.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="cardA rounded bg-white border shadow p-4" style={{ maxWidth: '500px', width: '90vw' }}>
            <form className="row g-3" onSubmit={formik.handleSubmit}>
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Name"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="contact" className="form-label">
                  Contact No.
                </label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.contact && formik.errors.contact ? 'is-invalid' : ''}`}
                  id="contact"
                  placeholder="Contact number"
                  {...formik.getFieldProps('contact')}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <div className="invalid-feedback">{formik.errors.contact}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="example@gmail.com"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" :"password"}
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                  <button type='button' className='btn btn-light' onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash}/>
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="invalid-feedback">{formik.errors.password}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="image" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                />
                {formik.touched.image && formik.errors.image && (
                  <div className="invalid-feedback">{formik.errors.image}</div>
                )}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btnA fw-bold fs-5px w-100">
                  SIGN UP
                </button>
              </div>
              <div className="col-12 text-center">
                <Link to="/login">Already have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
