import React from 'react'
import TextInput from './TextInput.js'
// import Header from './Header';
// import Footer from './Footer';
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
      {/* {<Header/>} */}
      <TextInput
        type = "text"
        name = "email"
        placeholder = "email address"
        onChange = {inputChange}
        value = {userFormValues.email}
        label = {"Email"}
      />

      <TextInput
        type = "text"
        name = "password"
        placeholder = "password"
        onChange = {inputChange}
        value = {userFormValues.password}
        label = {"password"}
      />
      <br/>
      <br/>
      <button  id="submitBtn" disabled={loginDisabled}>Submit</button> 
    
    {/* {<Footer/>} */}
    </>
    )
}

export default LoginForm