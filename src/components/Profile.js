import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Profile.css'

function Profile() {
    const [myprojects,setMyprojects] = useState(['Netlflix Clone','Sorting Visualizer','Moviepedia','Vgg16'])
    const [uname,setUname] = useState('')
    const { id } = useParams()
    useEffect(()=>{
        fetch('http://localhost:3001/home/'+id+'/profile').
        then(response => response.json()).
        then(data => setUname(data.uname))
    },[id])
  return (
    <>
        <div className='profile'>
            <div className='prof'>
                <img 
                style={{borderRadius:'50%',height:'250px',width:'250px',marginTop:'40px',marginLeft:'60px',marginRight:'60px'}}
                src='https://psmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTI3NTgyMzc3OTk1NDQyNjU0/monamysteryjpg.jpg'
                />
                <div>
                    <h2>{uname.length?uname:'Shajith'}</h2>
                    <p>Student at SSNCE</p>
                    <p>Web Developer and ML enthusiast</p>
                    <p>Projects : 10</p>
                </div>
            </div>
            <div className='projects'>
                <h1 style={{
                    color:'white',marginLeft:'20px',marginBottom:'0px',marginTop:'15px'
                    }}>My Projects</h1>
                        {myprojects.map((project)=>{
                            return(
                                <div
                                style=
                                {{
                                    borderRadius:'15px',
                                    margin:'10px',
                                    marginLeft:'20px',
                                    padding:'15px',
                                    backgroundColor:'#d7eaf3'
                                }}
                                key={project}
                                >
                                    <h2>{project}</h2>
                                    <p>Description :</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            )
                        })}
            </div>
        </div>
    </>
  )
}

export default Profile