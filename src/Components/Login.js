import React, { useEffect } from 'react'
import TextInput from './TextInput.js'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
// import { useHistory } from 'react-router-dom';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { gsap } from "gsap";


// const initialloginFormValues = {
//     email: '',
//     password: '',
// };
// const initialloginFormErrors = {
//     email: '',
//     password: '',
// };

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "green",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function LoginForm (props) {
    const {loginFormValues, setLoginFormValues, loginDisabled} = props
    // removed from props: user, setUser, loginFormErrors, setLoginDisabled, 

    // const history = useHistory();
    const classes = useStyles();

    const getLogin = (() => {
        axios.get('https://pt-fitness.herokuapp.com/login')
          .then(response => {
            console.log("response: ", response)
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

    const inputChange = (e) => {
        const { name, value } = e.target;
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
        getLogin(login)
    }
    
    useEffect(() => {
      gsap.to(".loginUserForm", {duration: 2, y: 30});
    }, []);

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
                    className = "type-input-two"
                  />
                  
                  <TextInput
                    type = "text"
                    name = "password"
                    placeholder = "password"
                    onChange = {inputChange}
                    value = {loginFormValues.password}
                    label = {"Password"}
                    className = "type-input-two"
                  />
                  <br/>
                  <br/>
                  {/* <button  id="submitBtn2" loginDisabled={loginDisabled}>Submit</button>  */}

                  <Button variant="contained" size="large" color="primary" id="submitBtn2" loginDisabled={loginDisabled} className={classes.margin}>
                  Submit
                  </Button>

              </form>
          </div>
      <Footer/>
    </>
    )
}

export default LoginForm