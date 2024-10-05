import { navlinks } from '@/config/navConfig';
import NavLink from './NavLink';

const SideBar = () => {
  return (
    <ul className='flex flex-col py-4 items-center h-screen'>
      {
        navlinks.map((nav, index) => (
          <NavLink
            name={nav.name}
            path={nav.path}
            key={index}
          />
        ))
      }
    </ul>
  );
};

export default SideBar;