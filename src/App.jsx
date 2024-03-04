import Logo from '../public/LogoSoza.png';

import './App.css';

function App() {
  

  return (
    <>
      <div className='mainContainer'>
        <div className='navbar'>
          <img src={Logo} alt="Soza Logo" id='logo' className='Logo'/>
          <p>Innovate. Construct. Transform</p>
        </div>
        
        <section className='heroContainer'>
          <div className='heroTitleContainer'>
            <h1 className='heroTitle'>
              Coming soon.
            </h1>
          </div>        
            
          <div className='heroFooter'>
            <h3 className='email'>sozaprojects.com.ar</h3>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
