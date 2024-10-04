'use client';

import NavLink from './NavLink';
import { navlinks } from '@/config/navConfig';

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className='text-white text-3xl font-semibold'>
          AK
        </a>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navlinks.map((nav, index) => (
                <NavLink name={nav.name} path={nav.path} key={index} />
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;