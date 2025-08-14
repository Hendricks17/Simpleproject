import React from 'react'
import { Link } from 'react-router-dom'
import Articles from '../components/Articles.jsx'


const ArticlesPage = () => {
  return (
    <div><h1>Articles Page</h1>
    <p>Enjoy Educative and Informative articles about our works here!</p>
    <Articles/>
    <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default ArticlesPage