import React, { use } from 'react'
import {useState, useEffect} from 'react'
import axios from '../api/http'
import '../assets/css/Doctors.css'

const Doctors = () => {
    const[doctors, setDoctors] = useState([]);
    useEffect(() => {
           axios.get('/api/Doctors')
    .then((response) => {setDoctors(response.data.data)})
    .catch(error => console.error('Error fetching doctors:', error));
    },[]);
 
  return (
  <>
   <div className='doctors-container'>
    {doctors.lenght && doctors.map((doctors, id) =>{
        
    })
       
    
    }
   </div>
  </>
  )
}

export default Doctors