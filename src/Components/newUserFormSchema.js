import * as yup from 'yup';

const schema = yup.object().shape({

    personName: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'Username must be 2 characters long'), 

    email: yup
      .string()
      .trim()
      .required('Email is required')
      .min(2, 'Email must be 5 characters long'), 

    password: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'Password must be 4 characters long'), 


    
    isOverEighteen: yup
      .boolean()
      .required('Must be over 18 to join'),
    
    isInstructor: yup
      .boolean(),

    authCode: yup
      .string()
      .trim()
      .max(20, 'Instructor authorization code is too long.  Please check your email for exact code.'),

});

export default schema;
