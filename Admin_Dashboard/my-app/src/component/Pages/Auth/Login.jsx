import './Login.css';
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required!"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is Required!"),
    }),

    onSubmit: async (values) => {
      console.log("Sending request...");
      try {
        console.log("Login Successful!");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error", error);
        setLoginError("An error occurred while logging in. Please try again later.");
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
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
        }}>
        <div className="cardA rounded bg-white border shadow p-4" style={{ maxWidth: '500px', width: '90vw' }}>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 pt-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                placeholder='example@gmail.com'
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="your password"
                  {...formik.getFieldProps("password")}
                />
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btnA fw-bold fs-5px w-100">
                LOGIN
              </button>
            </div>
          
            {loginError && ( 
              <div className="text-danger mb-3">
                {loginError}
              </div>
            )}
            <div className="mb-3 text-center">
              <Link to='/forget'>Forget Password?</Link>
            </div>
            <div className="text-center">
              <Link to='/signup'>Create Account?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
