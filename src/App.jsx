import Logo from '../public/LogoSoza.png';
import './fonts/ClashGrotesk-Light.ttf';
import './fonts/ClashGrotesk-Regular.ttf';
import './fonts/ClashGrotesk-Bold.ttf';

import './App.css';

function App() {
  

  return (
    <>
      <div className='mainContainer'>
        <div className='navbar'>
          <img src={Logo} alt="Soza Logo" id='logo' className='Logo'/>
          <p><span className='innovateText'>Innovate. </span> 
            <span className='constructText'>Construct. </span>
            <span className='transformText'>Transform.</span>
          </p>
        </div>
        
        <section className='heroContainer'>
          <div className='heroTitleContainer'>
            <h1 className='heroTitle'>
              Coming soon.
            </h1>
          </div>        
            
          <div className='heroFooter'>
            <h3 className='email'><span className='emailAddress'>sozaprojects</span>.com.au</h3>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
