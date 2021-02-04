import React, { useEffect } from 'react';
import TextInput from './TextInput.js';
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import './newUserForm.css';

import schema from './newUserFormSchema.js';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { gsap } from "gsap";


const initialNewUserFormValues = {
  personName: '',
  email: '',
  isOverEighteen: false,
  password: '',
  isInstructor: false
};
// const initialNewUserFormErrors = {
//   personName: '',
//   email: '',
//   isOverEighteen: '',
//   password: '',
//   isInstructor: ''
// };


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function NewUserForm (props) {
  const { setUser, newUserFormValues, setNewUserFormValues, setNewUserDisabled, newUserFormErrors, newUserDisabled, setNewUserFormErrors } = props
  // take out of props: ,

  const history = useHistory();

  const classes = useStyles();

  // -------------------- Helper Functions -----------------

  const postNewUser = newUser => {
    axios.post('https://pt-fitness.herokuapp.com/login', newUser)
      .then(res => {
        setUser(res.data)
        console.log("New User ", res.data);
        console.log("Successful res back from Axios, res.data: ", res.data);

        setNewUserFormValues(initialNewUserFormValues); // reset form
        alert("Congratulations!  You have logged in!")
        history.push(`/`)
      })
      .catch(err => {
        console.log("Error: ", err)
        alert("Oh no!  There was an error when logging in.  Please try again.")
        // history.push(`/error`)
        debugger
      })
  } // posts and resets form

  const validate = (name, value) => {
  console.log("validate: ", name, value)
  yup.reach(schema, name)
    .validate(value)
    .then(() => setNewUserFormErrors({ ...newUserFormErrors, [name]: ''}))
    .catch(err => setNewUserFormErrors({ ...newUserFormErrors, [name]: err.errors[0] })) // pending schema

    console.log("passes form validation")
  }; // run validation with yup

  // -------------------- Event Handlers -----------------

  const inputChange = (e) => {
    const { name, type, value, checked } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    const inputValue = type === 'checkbox' ? checked : value;  // option to include checkbox
    console.log("inputValue: ", inputValue)
    validate(name, inputValue);
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
      postNewUser(newUser) // post new user using helper function postNewUser

      history.push(`/`); // back to home page
  };

  // -------------------- Side Effects -----------------

  useEffect(() => {
    schema.isValid(newUserFormValues).then(valid => setNewUserDisabled(!valid)) // pending schema
    console.log("Button is now enabled.")
    }, [newUserFormValues, setNewUserDisabled]); // Adjust the status of 'disabled" every time formValues changes

  useEffect(() => {
    console.log("The form Errors have changed", newUserFormErrors)
  }, [newUserFormErrors, setNewUserFormErrors]); // render form errors

  useEffect(() => {
    gsap.to(".newUserForm-container", {duration: 2, y: 30});
  }, []); // animation on form

  return (
    <>
        <Header/>
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
              <div style={{color: "red", fontSize: "16px"}}>{newUserFormErrors.personName}</div>

              <TextInput
                type="text"
                name="email"
                placeholder=" email address "
                onChange={inputChange} 
                value={newUserFormValues.email}
                label={"Email"}
              />
              <div style={{color: "red", fontSize: "16px"}}>{newUserFormErrors.email}</div>

              <TextInput
                type="text"
                name="password"
                placeholder=" enter new password "
                onChange={inputChange} 
                value={newUserFormValues.password}
                label={"Password"}
              />
              <div style={{color: "red", fontSize: "16px"}}>{newUserFormErrors.password}</div>

              <div className='newUserForm-radio'>
              <input type="radio" name="isOverEighteen" onChange={inputChange} value={true}/>Are you over 18 years of age?
              </div>
              <div style={{color: "red", fontSize: "16px"}}>{newUserFormErrors.isOverEighteen}</div>
    

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

              <Button variant="contained" size="large" color="primary" id="submitBtn" disabled={newUserDisabled} onClick={formSubmit} className={classes.margin}>
              Submit
              </Button>

          </form>
          </div>
          </div>
      
        <Footer/>

    </>
  )
}

export default NewUserForm;