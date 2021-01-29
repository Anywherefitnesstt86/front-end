import React, { useState, useEffect } from 'react';
import TextInput from './TextInput.js';
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
// import schema from './formSchema.js';
// import Header from './Header';
// import Footer from './Footer';


const initialNewUserFormValues = {
  personName: '',
  email: '',
  age: '',
  password: '',
  isInstructor: false,
};

const initialNewUserFormErrors = {
  personName: '',
  email: '',
  age: '',
  password: '',
  isInstructor: '',
};


function NewUserForm (props) {
  const { user, setUser, newUserFormValues, setNewUserFormValues, newUserFormErrors, setNewUserFormErrors, newUserDisabled, setNewUserDisabled } = props

  const history = useHistory();

  // -------------------- Helper Functions -----------------

  const postNewUser = newUser => {
    axios.post('https://pt-fitness.herokuapp.com/', newUser)
      .then(res => {
        setUser(res.data)
        console.log("New User ", res.data);
        console.log("Successful res back from Axios, res.data: ", res.data);

        setNewUserFormValues(initialNewUserFormValues); // reset form

        history.push(`/`); // route to home page

      })
      .catch(err => {
        console.log("Error: ", err)
        history.push(`/error`)
        debugger
      })
  } // posts and resets form

  const validate = (name, value) => {
  console.log("validate: ", name, value)
  // yup.reach(schema, name)
  //   .validate(value)
  //   .then(() => setNewUserFormErrors({ ...newUserFormErrors, [name]: ''}))
  //   .catch(err => setNewUserFormErrors({ ...newUserFormErrors, [name]: err.errors[0] })) // pending schema

    console.log("passes form validation")
  }; // run validation with yup

  // -------------------- Event Handlers -----------------

  const inputChange = (e) => {
    const { name, type, value, checked } = e.target;
    // console.log(`name: ${name}, value: ${value}`);
    const inputValue = type === 'checkbox' ? checked : value;  // option to include checkbox
    console.log("inputValue: ", inputValue)
    // validate(name, inputValue);
    setNewUserFormValues({ ...newUserFormValues, [name]: inputValue }); // [ ] is not an array
  } 

  const formSubmit = (e) => {

    console.log("form was submitted")
      e.preventDefault(); //  to prevent browser refresh

      const newUser = {
          personName: newUserFormValues.personName,
          email: newUserFormValues.email,
          age: newUserFormValues.age,
          password: newUserFormValues.password,
      }

      console.log("new user: ", newUser)
      // postNewUser(newUser) // post new user using helper function postNewUser

      // history.push(`/`); // back to home page
  };

  // -------------------- Side Effects -----------------

  useEffect(() => {
    // schema.isValid(newUserFormValues).then(valid => setNewUserDisabled(!valid)) // pending schema
    // console.log("disabled?")
    }, [newUserFormValues]); // Adjust the status of 'disabled" every time formValues changes

  useEffect(() => {
    console.log("The form Errors have changed", newUserFormErrors)
  }, [newUserFormErrors]);


  return (
    <>
        {/* <Header/> */}

        <TextInput
          type="text"
          name="personName"
          placeholder=" add your name here "
          onChange={inputChange} 
          value={newUserFormValues.personName}
          label={"Name"}
        />
        <div>{newUserFormErrors.personName}</div>

        <TextInput
          type="text"
          name="email"
          placeholder=" email address "
          onChange={inputChange} 
          value={newUserFormValues.email}
          label={"Email"}
        />
        <div>{newUserFormErrors.email}</div>

        <TextInput
          type="text"
          name="age"
          placeholder=" enter your age "
          onChange={inputChange} 
          value={newUserFormValues.age}
          label={"Age"}
        />
        <div>{newUserFormErrors.age}</div>

        <TextInput
          type="text"
          name="password"
          placeholder=" enter new password "
          onChange={inputChange} 
          value={newUserFormValues.password}
          label={"New Password"}
        />
        <div>{newUserFormErrors.password}</div>

        <p>If you are signing up as an instructor, you should have received an instructor code in an email.</p>
        <TextInput
          type="text"
          name="isInstructor"
          placeholder=" Instructor Code"
          onChange={inputChange} 
          value={newUserFormValues.isInstructor}
          label={"Instructor Code"}
        />
        <br/>
        <br/>
        <button  id="submitBtn" disabled={newUserDisabled}>Submit</button> 

      {/* <Footer/> */}

    </>
  )
}

export default NewUserForm;