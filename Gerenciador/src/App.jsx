import { useState } from 'react'
import { useFormik } from 'formik';
import styled from "styled-components";
import './App.css'




function App() {
  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <div className='box'>
      <form  onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
  
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
  
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
}

export default App
