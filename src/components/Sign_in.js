import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Sign_in.css' ; 
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';

export default function Sign_in()
{
    let navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        };
      
    const particlesLoaded = (container) => {
        console.log(container);
    };

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
              distance: 200,
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
            distance: 150,
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
                        Username or Email ID
                    </label>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    id='login-field' type='email' name='login' autoFocus='autofocus' placeholder='Username or Email ID'/>
                    <br></br>
                    <label for='password-field' className='login-field'>
                        Password
                    </label>
                    <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    id='login-field' type='password' name='password' placeholder='Password'/>
                    <br></br>
                    <input
                        className='submit-button'
                        type='submit'
                        name='submit'
                        value='Sign In'
                        onClick={(e)=>{
                            e.preventDefault()
                            fetch('http://localhost:3001/',{
                                method:'post',
                                headers:{'Content-type':'application/json'},
                                body:JSON.stringify({
                                    email:email,
                                    password:password
                                })
                            })
                            .then(response => response.json())
                            .then(user =>{
                                if(user.u_id){
                                    navigate('/home/'+user.u_i+'/wel')
                                }
                                else alert('Wrong Credentials')
                            })
                        }}
                        />
                </form>

            </div>
            <p className='sign-up'>
                Don't have an account?
                <Link 
                style={{color:'white'}}
                to="/register">Register</Link>
            </p>
            
        </div>
    ) ;
}