import React, {useState, useEffect } from 'react'
import useGetData from '../hooks/useGetData';
import "../styles/Carrousel.scss"


const Carrousel = () => {

    const {movies,
            API_MOVIES,
            API_KEY,
            IMAGE_URL,
            setMovies,
            loadDataMovies,
            loadData,
            } = useGetData();




useEffect( () =>{
     
     loadData("trending/movie/day", setMovies)
                
},[])
            
    
  return (
    <div className='Carrousel'>
            <h1>Trending Movies</h1>
        <div className='Carrousel-Slider'>

            
            
            {movies.map(( item ) => (
                <div className='Carrousel-Slider-Item' key={item.id}>
                    <img className='Media-Poster' src={`${IMAGE_URL}${item.poster_path}`} alt={`${item.title} Poster`} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carrousel