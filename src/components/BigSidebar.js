// import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';

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
        {/* <NavLinks /> */}
      </div>
    </div>
  </Wrapper>
  )
}
