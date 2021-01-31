import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NewUserForm from './Components/NewUserForm';
// import Header from './Components/Header';
import Classes from './Components/Classes';
import Class from './Components/Class';
import LandingPage from './Components/LandingPage';


  // -------------------------- INITIAL STATES ------------------------


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
    isOverEighteen: false,
    password: '',
    isInstructor: false
  };
  const initialNewUserDisabled = false; // change back to true after testing

  // Intitial States - Classes
  const initialClassesValues = [
    {
      className: "Yoga On The Beach",
      classType: "Yoga",
      classDate: "2021/10/30",
      startTime: "10:00am",
      duration: 1, // hours
      intensity: "low",
      location: "Public Beach",
      numberOfStudents: 8, 
      maxClassSize: 10
    },
    {
      className: "Strong Men",
      classType: "Weights",
      classDate: "2021/10/31",
      startTime: "9:00am",
      duration: 1, // hours
      intensity: "high",
      location: "Anywhere",
      numberOfStudents: 10, 
      maxClassSize: 10
    } 
  ]
  const initialClassesErrors = [
    {
      className: "",
      classType: "",
      classDate: "",
      startTime: "",
      duration: "", 
      intensity: "",
      location: "",
      numberOfStudents: "", 
      maxClassSize: ""
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
  const [ allClasses, setAllClasses ] = useState(initialClassesValues);
  const [ filteredClasses, setFilteredClasses ] = useState(initialClassesValues);
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <div className="App">
      <LandingPage />
      {/* Route to Create New User Form */}
        {/* <Header/> */}
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
      <Classes
        allClasses={allClasses}
        setClasses={setAllClasses}
        filteredClasses={filteredClasses}
        setFilteredClasses={setFilteredClasses}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Route to view Class  */}

      {/* Route to Homepage */}

    </div>
  );
}

export default App;
