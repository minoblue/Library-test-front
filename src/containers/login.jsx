import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

import styled from "styled-components";
// import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import apiHost from "../config";
import { requestLogin } from "../actions/actions";

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }

  form {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }

  label,
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #777;
  }

  button {
    padding: 10px 15px;
    background-color: rgb(70, 153, 179);
    color: white;
    border: 1px solid rgb(70, 153, 179);
    background-color: 250ms;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(70, 153, 179);
  }
`;

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {

    if (user) {
      user.role === "admin"
        ? history.push("/adminHome")
        : history.push("/");
    }
  }, [user]);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(requestLogin(values.email, values.password));
    setSubmitting(false);
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Email: <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              Password:
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default LoginForm;
