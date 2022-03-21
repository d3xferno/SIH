import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
        <div
        style={{
          height:'43vh',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
          }}
          className='upload'
        ><p
        style={{
            fontSize:'200px',
            fontWeight:'800'
          }}
        >UPLOAD</p></div>
        <div
        style={{
          height:'44vh',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
          }}
          className='search'
        ><p
          style={{
            fontSize:'200px',
            fontWeight:'800'
          }}
        >SEARCH</p></div>
    </div>
  )
}

export default Home