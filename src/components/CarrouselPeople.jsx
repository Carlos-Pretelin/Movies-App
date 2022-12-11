import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData';
//import "../styles/CarrouselPeople.scss"
import defaultPicture from "../assets/DefaultPic-.png"

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

    



// come images from actors dont show up so i added the default one to fill the space

  return (
    <div className='Carrousel'>
                    <h1>Trending Personalities</h1>
    <div className='Carrousel-Slider'>
        {actors.map(( item ) => (
            <div className='Carrousel-Slider-Item' key={item.id}>
                <img className='Media-Poster' src={`${item.profile_path ? `${IMAGE_URL}${item.profile_path}` : defaultPicture}`} alt={`${item.title} Poster`} />
            </div>
        ))}
    </div>
</div>
  )
}

export default CarrouselPeople