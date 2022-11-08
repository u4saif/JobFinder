import { NavLink } from 'react-router-dom';

export const NavLinks = (props) => {
    const { path, id, icon, text } = props;
    return (
        <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
        >
            <span className='icon'>{icon}</span>
            {text}
        </NavLink>
    )
}
