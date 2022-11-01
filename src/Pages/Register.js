import React from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';
export const Register = () => {
  return (
    <Wrapper className='full-page'>
          <form className='form'>
              <Logo />
              <h3>Login</h3>
          </form>
    </Wrapper>
  )
}
