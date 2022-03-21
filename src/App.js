import './App.css';
import Navbar from './components/Navbar';
import ImgSlider from './components/ImgSlider';
import Description from './components/Description';
import Files from './components/Files'
import Footer from './components/Footer';
import Particles from 'react-tsparticles'
import { Outlet } from 'react-router';
import Sign_in from './components/Sign_in';
import Register from './components/Register'
import Homepage from './components/Homepage'

function App() {
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
const particlesLoaded = (container) => {
    console.log(container);
};
  return (
    <div className="App">
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
      <Navbar/>
      {/* <h1 style={{color:'white',fontWeight:'600',marginLeft:'15px',marginBottom:'10px'}}>Project Name</h1>
      <div className='flex_sb'>
        <ImgSlider/>
        <Description/>
      </div>
      <Files/>
      <h1>Comments</h1> */}
      {/* <Projects/> */}
      <Outlet/>
    </div>
  );
}

export default App;
