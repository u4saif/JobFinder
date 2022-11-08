import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../feature/users/UserSlice';
import links from '../utils/navlinks';
import { NavLinks } from './NavLinks';

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
          <div className='nav-links' onClick={() => dispatch(toggleSidebar())}>
            {links.map((link) => {
              const { path, id, icon, text } = link;
              return <NavLinks to={path} key={id} icon={icon} path={path} text={text} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
