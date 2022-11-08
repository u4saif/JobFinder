import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';
import links from '../utils/navlinks';
import { NavLinks } from './NavLinks.js';

export const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ?
            'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              return <NavLinks key={link.id}
                path={link.path} id={link.id} icon={link.icon} text={link.text} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
