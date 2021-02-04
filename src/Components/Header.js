import React from 'react';
import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

export default function Header() {

    // const classes = useStyles();

    const history = useHistory();

    return (
        <div className='header-container'>
        <h1 className="header-title">Anywhere<br /> Fitness</h1>
       
       <div className='nav-buttons'>
        <Button className='header-button' variant="outlined" size="large" onClick={(evt) => history.push(`/`)}>Home</Button>
        <Button className='header-button' variant="outlined" size="large" onClick={(evt) => history.push(`/login`)}>Join</Button>

        <Button className='header-button' variant="outlined" size="large" onClick={(evt) => history.push(`/users`)}>Login</Button>
        </div>
        </div>
    )
}