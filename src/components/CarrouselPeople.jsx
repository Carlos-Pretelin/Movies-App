import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData';
import "../styles/CarrouselPeople.scss"

const CarrouselPeople = () => {



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
            loadDataActors(API_ACTORS);
                       
       },[])







  return (
    <div className='Carrousel'>
    <div className='Carrousel-Slider'>
        {actors.map(( item ) => (
            <div className='Carrousel-Slider-Item' key={item.id}>
                <img className='Media-Poster' src={`${IMAGE_URL}${item.profile_path}`} alt={`${item.title} Poster`} />
            </div>
        ))}
    </div>
</div>
  )
}

export default CarrouselPeople