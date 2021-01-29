import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NewUserForm from './Components/NewUserForm';


  // -------------------------- INITIAL STATES ------------------------


  const initialNewUserFormValues = {
    personName: '',
    email: '',
    age: '', // checkbox / false
    password: '',
    isInstructor: false
  };
  const initialNewUserFormErrors = {
    personName: '',
    email: '',
    age: '',
    password: '',
  };
  const initialNewUserDisabled = false; // change back to true after testing

  // Intitial States - Classes
  const initialClassesValues = [
    {
      className: "Yoga On The Beach",
      classType: "Yoga",
      classDate: "Monday",
      startTime: "10:00am",
      duration: 1, // hours
      intensity: "low",
      location: "Public Beach",
      numberOfStudents: 8, 
      maxClassSize: 10
    } 
  ]

function App() {
  // --------------------------- STATES -------------------------------
  const [user, setUser] = useState({}); // empty object user
  // -------- States for NewUserForm.js ----------
  const [newUserFormValues, setNewUserFormValues] = useState(initialNewUserFormValues); // form inputs
  const [newUserFormErrors, setNewUserFormErrors] = useState(initialNewUserFormErrors); // errors, mechanism for reset
  const [newUserDisabled, setNewUserDisabled] = useState(initialNewUserDisabled) // for button or toggle
  // -------- States for LoginForm.js ----------
  const [loginFormValues, setLoginFormValues] = useState({}); // form inputs
  const [loginFormErrors, setLoginFormErrors] = useState({}); // errors, mechanism for reset
  const [loginDisabled, setLoginDisabled] = useState({}) // for button or toggle
  // -------- States for Classes.js & Search Functionality ----------
  const [ classes, setClasses ] = useState(initialClassesValues);
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <div className="App">

      {/* Route to Create New User Form */}

        <NewUserForm 
          user={user} 
          setUser={setUser} 
          newUserFormValues={newUserFormValues} 
          setNewUserFormValues={setNewUserFormValues} 
          newUserFormErrors={newUserFormErrors} 
          newUsersetFormErrors={setNewUserFormErrors} 
          newUserDisabled={newUserDisabled} 
          setNewUserDisabled={setNewUserDisabled} 
          />

      {/* Route to User Login Form  */}

      {/* Route to view Classes  */}

      {/* Route to view Class  */}

      {/* Route to Homepage */}

    </div>
  );
}

export default App;
