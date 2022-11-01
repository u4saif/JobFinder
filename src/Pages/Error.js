import React from 'react';
import imgNotFound from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage'
import {Link} from 'react-router-dom';

export const Error = () => {
  return (
    <Wrapper className='full-page'>
    <div>
      <img src={imgNotFound} alt='not found' />
      <h3>Sorry This page Don't Exist</h3>
      <p>DIY jianbing crucifix lo-fi shabby chic gochujang. Activated charcoal shoreditch photo booth butcher copper mug meditation. Vice heirloom gastropub everyday carry next level.</p>
      <Link to='/'>back home</Link>
    </div>
  </Wrapper>
  )
}
