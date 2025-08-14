import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GalleryPage from './pages/GalleryPage'
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DoctorsPage from './pages/DoctorsPage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <NavMenu/>
        <div style={{ padding: '20px' }}>
 <Routes>
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/articles" element={<ArticlesPage/>} />
          <Route path="/doctors" element={<DoctorsPage/>}/>
          <Route path="/articles/:id" element={<ArticlePage/>} />
        </Routes>
        </div>
       </Router>
  

    </>
  )
}


export default App
