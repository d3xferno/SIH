import React from 'react'
import './Projects.css'
import { useState } from 'react'

function Projects() {
    let projects = [1,2,3,4,5,6,7,8,9,10]
    console.log(projects)
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',margin:'25px'}}>
        <input 
        style={{textAlign:'center',width:'400px',height:'40px',borderRadius:'15px',border:'none',outline:'none',backgroundColor:'#d7eaf3'}}/>
    </div>
    <div className='projects'>
        {projects.map((project)=>{
            return(
                <div
                    className='project'
                    key={project}
                    style={{
                        color:'black',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        fontSize:'60px'
                    }}
                >
                {project}
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Projects