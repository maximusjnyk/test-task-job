import { FC } from 'react'
import { useAppSelector } from "../hooks/redux";

export const FavoritesPage: FC = () => {
  const { favorites } = useAppSelector(state => state.github)

  if (favorites.length === 0) return <p className='text-center'>No items.</p>

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen '>
      <ul className='list-none'>
        { favorites.map(favorite => (
          <li className='font-bold border-2 mb-2 py-3 px-3 hover:shadow-md hover:bg-gray-100' key={ favorite }>
            <a href={ favorite } target='_blank'>{ favorite }</a>
          </li>
        )) }
      </ul>
    </div>
  );
};