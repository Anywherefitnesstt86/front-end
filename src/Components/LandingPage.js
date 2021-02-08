import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(8),
      
    },
  },
}));

export function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>Log in</Button>
        <Button>Register</Button>
      </ButtonGroup>
     
    </div>
  );
}

export function Inline() {
  return (
    <div >
      <Header />
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // component="div" 
        display="flex" 
        style={{backgroundColor: "#97969A"}} 
        p={1} 
        m={1} 
        >
     
         
<Grid     item
            direction="row"
            justifyContent="center"
            alignItems="center"          > <video valign="center" justifyContent="center" width="450" height="800" autoPlay muted>
        <source src="https://res.cloudinary.com/dxium8k1s/video/upload/v1612159309/2021_landingPageVideo_uek40j.mp4" type="video/mp4" />
        This video isn't supported by your browser. 
    </video>  
          </Grid>
          <Grid
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
               <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h2>
               <GroupOrientation />
          
</Grid>
        </Grid>
        <Footer />
    </div>
  );
}











// import React from 'react';
// import Box from '@material-ui/core/Box';

// export function Inline() {
//   return (
//     <div style={{ width: '100%' }}>
//       <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">
//       <video width="450" height="800" autoPlay muted>
//         <source src="https://res.cloudinary.com/dxium8k1s/video/upload/v1612159309/2021_landingPageVideo_uek40j.mp4" type="video/mp4" />
//         This video isn't supported by your browser. 
//     </video>
//       </Box>
//       <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">
//         Are you ready?
//       </Box>
//     </div>
//   );
// }







// import React from 'react';
// // import fitLogo from '../2021_fitLogo.png';
// import '../App.css';

// export default function LandingPage() {

// return (
//     <>
   
//     <div>
//     <video width="450" height="800" autoPlay muted>
//         <source src="https://res.cloudinary.com/dxium8k1s/video/upload/v1612159309/2021_landingPageVideo_uek40j.mp4" type="video/mp4" />
//         This video isn't supported by your browser. 
//     </video>
//     </div>
//     </>
// )

// }

{/* <div>
<img src={fitLogo} alt="Anywhere Fitness logo" />
</div> */}