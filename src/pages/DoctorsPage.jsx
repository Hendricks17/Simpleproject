import React from 'react'
import Doctors from '../components/Doctors.jsx'
import { Link } from 'react-router-dom'

const DoctorsPage = () => {
  return (
    <div><h1>Doctors Page</h1>
    <p>Here are our highly skilled doctors we've worked with over the years</p>
    <Doctors/>
    <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default DoctorsPage