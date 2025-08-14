import React from 'react'
import Article from '../components/Article.jsx'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ArticlePage = () => {
    
    const { id } = useParams();//id will be whatever is in the URL after /articles/
    console.log(id); // This will log the article ID from the URL
  return (
  <>
  <Article articleId={id}/>
<Link to="/articles">Back to articles</Link>
  </>
  )

}

export default ArticlePage