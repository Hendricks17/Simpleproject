import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav style={styles.nav}>
<NavLink to="/" style={({isActive}) => isActive?{...styles.link,...styles.activeLink}:styles.link}>Home</NavLink>
<NavLink to="/gallery" style={({isActive}) => isActive?{...styles.link,...styles.activeLink}:styles.link}>Gallery</NavLink>
<NavLink to="/users" style={({isActive}) => isActive?{...styles.link,...styles.activeLink}:styles.link}>Users</NavLink>
<NavLink to="/articles" style={({isActive}) => isActive?{...styles.link,...styles.activeLink}:styles.link}>Articles</NavLink>
<NavLink to="/doctors" style={({isActive}) => isActive?{...styles.link,...styles.activeLink}:styles.link}>Doctors</NavLink>


    </nav>
  )
}
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },

    activeLink: {
      fontWeight: 'bold',
        color: '#007bff',
        
  }
}

export default NavMenu