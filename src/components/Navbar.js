import React from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/Navbar';
import { logoutUser, toggleSidebar } from '../feature/users/UserSlice';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
    <div className='nav-center'>
      <button type='button' className='toggle-btn' onClick={()=> {
        console.log('toggle sidebar');
        dispatch(toggleSidebar());
      }
      }>
        <FaAlignLeft />
      </button>
      <div>
        <Logo />
        <h3 className='logo-text'>dashboard</h3>
      </div>
      <div className='btn-container'>
        <button
          type='button'
          className='btn'
          onClick={() => console.log('toggle logout dropdown')}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
        <div className= 'dropdown show-dropdown'>
          <button
            type='button'
            className='dropdown-btn'
            onClick={() => {
             dispatch(logoutUser({user}));
             navigate('/landing');
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}
