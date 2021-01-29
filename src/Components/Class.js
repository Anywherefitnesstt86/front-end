import React from 'react';



export default function Class (props) {
  const { indivClass } = props;
    // console.log(props)

  return (
    <div>
      
          <h3>{indivClass.className}</h3>
          <p>{indivClass.classType}</p>
          <p>{indivClass.classDate}</p>
          <p>Start time: {indivClass.startTime}</p>
          <p>Hours: {indivClass.duration}</p>
          <p>Intensity: {indivClass.intensity}</p>
          <p>Location: {indivClass.location}</p>
          <p>Number of Students:{indivClass.numberOfStudents}</p>
          <p>Max Limit:{indivClass.maxClassSize}</p>
    </div>
  )
};