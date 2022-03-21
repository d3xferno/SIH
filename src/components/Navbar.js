import React from 'react'
import './Navbar.css'
import {Link,useParams} from 'react-router-dom'

function Navbar() {
  const {id} = useParams()
  let wel = "/home/"+id+"/wel"
  return (
    <div className='nav'>
        <p
        style={{
          color:'white',
          margin:'20px',
          fontSize:'35px'
        }}
        >Smart India Hackathon</p>
        <div className='flex'>
            <Link 
            style={{color:'white',textDecoration:'none'}}
            to={wel}>Home</Link>
            <Link 
            style={{color:'white',textDecoration:'none'}}
            to="projects">Projects</Link>
            <Link 
            style={{color:'white',textDecoration:'none'}}
            to="profile">Profile</Link>
            <Link 
            style={{color:'white',textDecoration:'none'}}
            to="/">Logout</Link>
        </div>
    </div>
  )
}

export default Navbar