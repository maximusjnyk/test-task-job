import { FC } from 'react'
import { Link } from "react-router-dom";

export const Navigation: FC = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
      <h3 className='font-bold'>Github Search</h3>

      <span>
        <Link className='mr-2' to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </span>
    </nav>
  );
};