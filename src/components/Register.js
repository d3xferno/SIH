import { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router';
import Particles from 'react-tsparticles';


export default function Register()
{
    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        };
      
    const particlesLoaded = (container) => {
        console.log(container);
    };
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
    let navigate = useNavigate()
    return(
        <div className='container'>
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 125,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
            <div className='main-box'>
                
                <form className='form-table'>
                    <label for='login-field' className='login-field'>
                        Username
                    </label>
                    <input 
                    onChange={(e)=>setName(e.target.value)}
                    id='login--field' type='email' name='login' autoFocus='autofocus' placeholder='Username' required/>
                    <br></br>
                    <label for='password-field' className='login-field'>
                        Enter Password
                    </label>

                    <input 
                    onChange={(e)=>setPass(e.target.value)}
                    id='login--field' type='password' name='password' placeholder='Password' required/>
                    
                    <br></br>
                    <label for='password-field' className='login-field'>
                        Re-Enter Password
                    </label>

                    {/* <a href='#'>Forgot password</a> */}
                    <input 
                    id='login--field' type='password' name='password' placeholder='Password' required/>

                    <br></br>

                    <label for="Email" className='login-field'>
                        Enter your Email-id:</label>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="text" id='login--field' name="email" placeholder="email" required/>
                    <br></br>

                    <input
                        className='submit--button'
                        type='submit'
                        name='submit'
                        value='Register'
                        onClick={(e)=>{
                            e.preventDefault()
                            fetch('http://localhost:3001/register',{
                                method:'post',
                                headers:{'Content-type':'application/json'},
                                body:JSON.stringify({
                                    name:name,
                                    email:email,
                                    password:pass                                    
                                })
                            })
                            .then(response => response.json())
                            .then(user => {
                                if(user){
                                    navigate('/home/'+user)
                                    console.log(user)
                                }
                                else{
                                    alert('Unable to register')
                                }
                            })
                        }}
                        />
                </form>

            </div>            
        </div>
    ) ;
}