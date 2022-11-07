import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import links from '../utils/navlinks';

export const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
    <div
      className={
        isSidebarOpen ?
        'sidebar-container show-sidebar': 'sidebar-container'
      }
    >
      <div className='content'>
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
