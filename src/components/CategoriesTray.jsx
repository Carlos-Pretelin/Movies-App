import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData'
import "../styles/CategoriesTray.scss"

const CategoriesTray = () => {

const {movies,
    tvShows,
    actors,
    categoriesMovies,
    categoriesTv,
    API_MOVIES,
    API_TVSHOWS,
    API_ACTORS,
    API_KEY,
    IMAGE_URL,
    setMovies,
    loadDataMovies,
    loadMoviesCategories,
    loadTvCategories,
    loadDataTvShows,
    loadDataActors,} = useGetData();



  useEffect(()=>{
    loadMoviesCategories();
  }, [])  
  return (
    <div className='CategoriesTray'>
        {categoriesMovies.map(item => (

            <div key={item.id} className='CategoriesTray-Item'>
                
                <a>{item.name}</a>
            </div>

            
        ))}
    </div>
  )
}

export default CategoriesTray