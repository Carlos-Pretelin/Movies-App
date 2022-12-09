import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData';
import "../styles/Carrousel.scss"


const Carrousel = ({url, updater}) => {

    const {movies,
        API_MOVIES,
        IMAGE_URL,
        setMovies,
        loadData} = useGetData();


    useEffect( () =>{
        loadData(url, updater);
    },[])

  return (
    <div className='Carrousel'>
        <div className='Carrousel-Slider'>
            {movies.map(( item ) => (
                <div className='Carrousel-Slider-Item'>
                    <img className='Media-Poster' src={`${IMAGE_URL}${item.poster_path}`} alt={`${item.title} Poster`} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carrousel