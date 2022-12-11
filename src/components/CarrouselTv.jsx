import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData'
//import "../styles/CarrouselTv.scss"

const CarrouselTv = () => {


    const {movies,
        tvShows,
        actors,
        API_MOVIES, 
        API_TVSHOWS,
        API_ACTORS,
        API_KEY,
        IMAGE_URL,
        setMovies,
        loadDataMovies,
        loadDataTvShows,
        loadDataActors,} = useGetData();


        useEffect( () =>{
            loadDataTvShows(API_TVSHOWS);
                       
       },[])





  return (
    <div className='Carrousel'>
                    <h1>Trending Tv Shows</h1>
        <div className='Carrousel-Slider'>
            {tvShows.map(( item ) => (
                <div className='Carrousel-Slider-Item' key={item.id}>
                    <img className='Media-Poster' src={`${IMAGE_URL}${item.poster_path}`} alt={`${item.title} Poster`} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default CarrouselTv