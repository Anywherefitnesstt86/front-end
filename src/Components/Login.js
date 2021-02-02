import React from 'react'
import TextInput from './TextInput.js'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import './Login.css';

const initialloginFormValues = {
    email: '',
    password: '',
};
const initialloginFormErrors = {
    email: '',
    password: '',
};

function LoginForm (props) {
    const {user, setUser, loginFormValues, setLoginFormValues, loginFormErrors, loginDisabled, setLoginDisabled} = props

    const history = useHistory();

    const getLogin = (() => {
        axios.get('https://pt-fitness.herokuapp.com/login')
          .then(response => {
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

    const inputChange = (e) => {
        const { name, type, value, checked } = e.target;
        // console.log(`name: ${name}, value: ${value}`);
        const inputValue = value;
        console.log("inputValue: ", inputValue)
        setLoginFormValues({ ...loginFormValues, [name]: inputValue });
    } 

    const onFormSubmit = (e) => {
        console.log('Login Submitted and Displayed on Next Line');
        e.preventDefault();
        const login = {
            email: loginFormValues.email,
            password: loginFormValues.password,
        }
        console.log(login);

    }
    
    return (
    <>
      <Header/>
        <div className='background-loginUserForm'>
          <div className='loginUserForm-container'></div>
              <form className='loginUserForm' onSubmit={onFormSubmit}>
                  <h1 className='loginUserForm-title'>Login</h1><br/>
                  <TextInput
                    type = "text"
                    name = "email"
                    placeholder = "email address"
                    onChange = {inputChange}
                    value = {loginFormValues.email}
                    label = {"Email"}
                    className = "type-input"
                  />

                  <TextInput
                    type = "text"
                    name = "password"
                    placeholder = "password"
                    onChange = {inputChange}
                    value = {loginFormValues.password}
                    label = {"Password"}
                    className = "type-input"
                  />
                  <br/>
                  <br/>
                  <button  id="submitBtn2" loginDisabled={loginDisabled}>Submit</button> 
              </form>
          </div>
      <Footer/>
    </>
    )
}

export default LoginForm