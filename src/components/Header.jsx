import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// import logo from '../assets/img/logo.png'
import { Logo } from '../svg';
const Header = () => {
  return (
    <div className="flex bg-[#000] text-gray-200 h-[90px] items-center justify-between lg:px-[200px] px-[40px] fixed left-0 right-0 top-0 z-20 ">
        <Link to="/" className="px-[12px] ">
          <Logo/>
        </Link>
        <ul className='flex justify-around basis-1/3'>
          <li>
            <NavLink className='font-bold' to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className='font-bold' to='/champions'>
                CHAMPIONS
              </NavLink>
          </li>
          <li>
            <NavLink className='font-bold' to='/collection'>
                COLLECTION
              </NavLink>  
          </li>
        </ul>
    </div>
);
}

export default Header