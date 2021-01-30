import React from 'react';
import './classes.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: 'white',
    background: 'black',
    opacity: .9,
    boxShadow: '0 0 25px red, 0 0 5px rgb(105, 7, 7)',
    fontSize: 22
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
    fontSize: 22,
    color: 'white'
  },
}); // material UI styles

export default function Class (props) {
  const { indivClass } = props;

  // material UI code
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className="override" className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {indivClass.classType}
      </Typography>
      <Typography variant="h5" component="h2">
        {bull} {indivClass.className} {bull}
      </Typography>
      <Typography className={classes.pos} color="textSecondary"><br/>
    
      {indivClass.classDate}
      </Typography>
      <Typography variant="body2" component="p">
        {indivClass.intensity} intensity<br/>
        Location: {indivClass.location}<br/>
        {indivClass.duration} hour<br/>
        starts at {indivClass.startTime}<br/>
        {indivClass.numberOfStudents}/{indivClass.maxClassSize} students signed up<br/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

  )
};
