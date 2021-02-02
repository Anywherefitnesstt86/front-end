import React from "react";
import "../App.css";
// import { useHistory } from 'react-router-dom';



const Footer = () => {
  // const history = useHistory();

  return (
    <>
      <div className='footer-container'>
            <p className='footer-copyright'>© 2021 Anywhere Fitness. All Rights Reserved</p>
            
            {/* <button className="button" onClick={(evt) => history.push(`/help`)}>Help</button> */}
      </div>
    </>
  );
};
export default Footer;