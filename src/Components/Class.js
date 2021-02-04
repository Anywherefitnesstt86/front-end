import React from 'react';
import './classes.css';
import { useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles({
  root: {
    minWidth: 310,
    color: 'white',
    background: 'black',
    opacity: .9,
    boxShadow: '0 0 25px red, 0 0 5px rgb(105, 7, 7)',
    fontSize: 22,
    margin: '10px',
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
  let { indivClass, allClasses } = props;
  // console.log("Props from class:", props);

  let { classId } = useParams();
  console.log("classId from Class: ", classId); // gets the classId, A STRING

  // LOGIC NOTE: only one prop will be defined
  // If route is from Classes, indivClass will be defined, movieId will come from indivClass.id
  // If route is for a Class from home /, allMovies will be defined, movieId will come from useParams()

  const isClassCard = allClasses === undefined;
    
  // account if indivClass is undef or allClasses is undef
  if (indivClass !== undefined) {
    classId = indivClass.id; // can get classId from allClasses, is AN INTEGER

  } else if (allClasses !== undefined) {
    // we have classId, defining indivClass NOTE: integer to string with template literal `${}`
    indivClass = allClasses.find(indivClass => `${indivClass.id}` === classId);
  }; 
  


  // material UI code
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const history = useHistory(); // enables onClick on classCard --> route to classCard by ID

  return (
    <>
      {!isClassCard ? 
        <div>
          <Header/>
        </div>
      : <br/> /* conditional rendering for classCard*/  }

      <Card classname="indivCard" className={classes.root} variant="outlined" onClick={(evt) => history.push(`/classes/${indivClass.id}`)} >
      <CardContent style={{textAlign: "center"}}>
      {/* // {isClassCard ? <button>Logout</button> : <button>Login</button>} */}
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
        <Button size="small" style={{ color: 'white'}}>Learn More</Button>
      </CardActions>
    </Card>
    {!isClassCard ? 
      <div>
        <Footer/>
      </div>
    : <br/> /* conditional rendering for classCard*/  }
    </>
  )
};
