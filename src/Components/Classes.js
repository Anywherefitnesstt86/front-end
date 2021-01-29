import React, { useState, useEffect } from 'react';
import TextInput from './TextInput.js';
// import axios from 'axios';
// import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import Class from './Class.js';


export default function Classes (props) {
  const { classes } = props;
  
  
  
  
  return (

    <div className="classes-container">
    {
      classes.map(class => {
        return <Class key={class.id} class={class} />
      })
    }
  </div>

  )
}