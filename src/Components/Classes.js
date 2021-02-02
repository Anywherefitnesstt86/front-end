import React, { useEffect } from 'react';
import './classes.css';
import Header from './Header';
import Footer from './Footer';
import TextInput from './TextInput.js';
import Class from './Class.js';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { gsap } from "gsap";



export default function Classes (props) {
  const { allClasses, setAllClasses, filteredClasses, setFilteredClasses, searchTerm, setSearchTerm } = props;
  
  // ------------ populate class data with backend data------------------
 function getAllClasses() {
    axios.get('https://pt-fitness.herokuapp.com/classes')
      .then(res => {
 
        console.log("All Classes ", res.data);
        console.log("Successful res back from Axios, res.data: ", res.data);

        setAllClasses(res.data)
        setFilteredClasses(res.data)

      })
      .catch(err => {
        console.log("Error: ", err)
        // history.push(`/error`)
        alert("There was an error in loading classes.")
        debugger
      })
  } // populates classes state


  // ----------- Helper Function ---------------------
  const getFilteredClasses = (searchTerm) => {
    // edge case if searchTerm is "", reset filteredClasses to allClasses
    if (searchTerm === "") {
      setFilteredClasses(allClasses);
    }

    // filter function over classes array
    const filteredClasses = allClasses.filter( indivClass => {
      // clean up search term, assign to searchText
      const searchText = searchTerm.toLowerCase().trim();
      const name = indivClass.className.toLowerCase();
      const type = indivClass.classType.toLowerCase();
      const time = indivClass.startTime.toLowerCase();
      const intensity = indivClass.intensity.toLowerCase();
      const location = indivClass.location.toLowerCase();
      
      // check for match, create boolean
      const matchesName = name.includes(searchText); 
      const matchesType = type.includes(searchText);
      const matchesDate = indivClass.classDate.includes(searchText);
      const matchesTime = time.includes(searchText);
      const matchesDuration = indivClass.intensity.includes(searchText);
      const matchesIntensity = intensity.includes(searchText);
      const matchesLocation = location.includes(searchText);
      
      return matchesName || matchesType || matchesDate || matchesTime || matchesDuration || matchesIntensity || matchesLocation;
    
    }); // end of filter
    // console.log("getFilteredClasses is running");
    // console.log("filteredClasses: ", filteredClasses);

    setFilteredClasses(filteredClasses);

  };

  // ----------- Helper Function ---------------------}
  const searchChangeHandler = (e) => {
    // not the same variable as searchTerm in App.js
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // setSearchTerm({searchTerm: e.target.value}); // cleaner option
    // console.log("The changeHandler is running.")
    getFilteredClasses(searchTerm);
  };
  
  // -------------------- Side Effects -----------------
  useEffect(() => {
    getAllClasses();
  }, []); // populates allClasses on browser reload
  
  useEffect(() => {
    gsap.to(".classes-content-container", {duration: 2, y: 30});
  }, [".newUserForm-title"]);


  return (
    <>
    <Header/>
    <div className='classes-background'>
      <div className='classes-content-container'>
        
        <div className='search-container'><br/>
          <div className='classes-title'>          
            <h1>Classes</h1>
          </div>

          <SearchIcon className='search-icon' style={{ color: 'white'}} fontSize="large"/>
          <TextInput
              type="text"
              placeholder=" Search for classes"
              onChange={searchChangeHandler} 
              label={""}
          />
        </div>
        

        <div className="classes-container">
            {
              filteredClasses.map(indivClass => {
                return <Class key={indivClass.id} indivClass={indivClass} />
              })
            }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}