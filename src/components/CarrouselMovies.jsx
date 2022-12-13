import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData';
import "../styles/Carrousel.scss"


const Carrousel = () => {

    const  {movies,
            IMAGE_URL,
            setMovies,
            loadData,
            } = useGetData();




useEffect( () =>{
     
     loadData("trending/movie/day", setMovies, "Peliculas")
                
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