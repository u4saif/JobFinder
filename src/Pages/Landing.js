import React from 'react'
import Main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom';
import Logo from '../components/Logo';
export const Landing = () => {
  return (
      <Wrapper>
        <nav>
            <Logo/>
        </nav>
          <div className='container page'>
              {/* info */}
              <div className='info'>
                  <h1>
                      job <span>tracking</span> app
                  </h1>
                  <p>I'm baby ascot VHS before they sold out hexagon bushwick semiotics bicycle rights craft beer. Umami fit sriracha mustache, same twee yuccie poke listicle semiotics enamel pin raw denim.</p>
                  <Link to='/register' className='btn btn-hero'>
                      Login / Register
                  </Link>
              </div>
              <img src={Main} alt='job hunt' className='img main-img' />
          </div>
        </Wrapper>
  )
}
