import React from 'react'
import Logo from '../assets/images/logo.svg';
import Main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'

export const Landing = () => {
  return (
      <Wrapper>
          <nav>
              <img src={Logo} alt="logo" className='logo' />
          </nav>

          <div className='container page'>
              {/* info */}
              <div className='info'>
                  <h1>
                      job <span>tracking</span> app
                  </h1>
                  <p>I'm baby ascot VHS before they sold out hexagon bushwick semiotics bicycle rights craft beer. Umami fit sriracha mustache, same twee yuccie poke listicle semiotics enamel pin raw denim.</p>
                  <button className='btn btn-hero'>Login/Register</button>
              </div>
              <img src={Main} alt='job hunt' className='img main-img' />
          </div>
        </Wrapper>
  )
}
