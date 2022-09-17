import { IRepo } from "../models/Models";
import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions()
  const { favorites } = useAppSelector(state => state.github)
  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavorite(repo.html_url)
    setIsFavorite(true)
  }

  const removeToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavorite(repo.html_url)
    setIsFavorite(false)
  }

  return (
    <div className='border py-5 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer flex'>
      <a href={ repo.html_url } target='_blank'>
        <p className='font-bold '>{ repo.name }</p>
        <h2 className='text-lg text-gray-300 font '>{ repo.full_name }</h2>
        <p className='text-sm'>
          Fork: <span className='font-bold mr-2'>{ repo.forks }</span>
          Watchers: <span className='font-bold'>{ repo.watchers }</span>
        </p>
        <p className='text-sm font-thin'>{ repo?.description }</p>
        {
          !isFavorite
            ?
            <button
            className='py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all cursor-pointer mt-2'
            onClick={ addToFavorite }
          >
            Add
          </button>
            :
            <button
              className='py-2 px-4 mt-2 bg-red-500 rounded hover:shadow-md transition-all cursor-pointer'
              onClick={ removeToFavorite }
            >
              Remove
            </button>
        }
      </a>
    </div>
  );
};