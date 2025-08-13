import React from 'react'
import Gallery from '../components/Gallery.jsx'
import { Link } from 'react-router-dom'

const GalleryPage = () => {
  return (
    <div><h1>Gallery</h1>
    <p>This is the gallery page</p>
    <Gallery/>
    <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default GalleryPage