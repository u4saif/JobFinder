import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../feature/users/UserSlice';
import links from '../utils/navlinks';

export const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button className='close-btn' onClick={() => dispatch(toggleSidebar())}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              const { path, id, icon, text } = link;
              return <NavLink
                to={path}
                key={id}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => dispatch(toggleSidebar())}
              >
                <span className='icon'>{icon}</span>
                {text}
              </NavLink>
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
