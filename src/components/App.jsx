import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData'
import Carrousel from './Carrousel'
import CarrouselPeople from './CarrouselPeople';
import CarrouselTv from './CarrouselTv';
import "../styles/App.scss"

const App = () => {


  const  {movies,
          tvShows,
          actors,
          API_MOVIES,
          API_KEY,
          IMAGE_URL,
          setMovies,
          loadDataMovies,
          loadDataTvShows,
          loadDataActors,} = useGetData();

         
    
    

  return (
    <div>
        <h1>Heres the Picture Carrousel</h1>
          <div>
          <h2>Movies</h2>
          <Carrousel />
          </div>

          <div>
          <h2>Tv Shows</h2>
          <CarrouselTv/>
          </div>

          <div>
          <h2>Actors</h2>
          <CarrouselPeople/>
          </div>
        
    </div>
  )
}

export default App