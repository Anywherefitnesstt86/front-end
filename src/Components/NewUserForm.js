import React, { useState, useEffect } from 'react';
import TextInput from './TextInput.js';
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
//import { connect } from 'react-redux';
import './newUserForm.css';

// import schema from './formSchema.js';
// import Header from './Header';
// import Footer from './Footer';


const initialNewUserFormValues = {
  personName: '',
  email: '',
  isOverEighteen: false,
  password: '',
  isInstructor: false
};
const initialNewUserFormErrors = {
  personName: '',
  email: '',
  isOverEighteen: '',
  password: '',
  isInstructor: ''
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
    console.log(`name: ${name}, value: ${value}`);
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
          isOverEighteen: newUserFormValues.isOverEighteen,
          password: newUserFormValues.password,
          isInstructor: newUserFormValues.isInstructor
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

  // useEffect(() => {
  //   console.log("The form Errors have changed", newUserFormErrors)
  // }, [newUserFormErrors]);


  return (
    <>
        {/* <Header/> */}
        <div className='background-newUserForm'>
        
          <div className='newUserForm-container'>
          <form className='newUserForm' onSubmit={formSubmit}>
              <div className='newUserForm-title'>
                <h1 >New User Login</h1>
              </div>

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
                name="password"
                placeholder=" enter new password "
                onChange={inputChange} 
                value={newUserFormValues.password}
                label={"Password"}
              />
              <div>{newUserFormErrors.password}</div>

              <div className='newUserForm-radio'>
              <input type="radio" name="isOverEighteen" onChange={inputChange} value={true}/>Are you over 18 years of age?
              </div>
              <div>{newUserFormErrors.isOverEighteen}</div>
    

              <div className='newUserForm-slider'>
                  <div className="slider-container">
                  <label className="switch">
                    <input id="isInstructorInput" type="checkbox" name="isInstructor"
                    checked={newUserFormValues.isInstructor} onChange={inputChange}/> 
                    <span className="slider"></span><br/>
                  </label>
                  <p className="slider-text">Are you an instructor?</p>
                  
                  </div>
              </div>

              {newUserFormValues.isInstructor ? 
                <div>
                    <p>Welcome! You should have received an instructor code by email.  Please enter it below.</p>
                    <TextInput
                      type="text"
                      name="authCode"
                      placeholder=" Instructor Code"
                      onChange={inputChange} 
                      value={newUserFormValues.authCode}
                      label={" "}
                    />
                </div>
              : <br/> /* conditional rendering for instructor authorization code */  }


              <br/>
              <br/>
              <button  id="submitBtn" newUserDisabled={newUserDisabled}>Submit</button> 

          </form>
          </div>
          </div>
      
        {/* <Footer/> */}

    </>
  )
}

// const mapStatetoProps = state => {
//   return {
//     user: state.user, 
//     newUserFormValues: state.newUserFormValues, 
//     newUserFormErrors: state.newUserFormErrors,  
//     newUserDisabled: state.newUserDisabled
//   }

// }
// export default connect(mapStatetoProps)(NewUserForm);

export default NewUserForm; 