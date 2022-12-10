import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData'
import Header from "./Header"
import CarrouselMovies from './CarrouselMovies'
import CarrouselPeople from './CarrouselPeople';
import CarrouselTv from './CarrouselTv';
import { Footer } from './Footer';
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


          <Header/>
        <h1>Heres the Picture Carrousel</h1>
          <div>
          <h2>Movies</h2>
          <CarrouselMovies />
          </div>

          <div>
          <h2>Tv Shows</h2>
          <CarrouselTv/>
          </div>

          <div>
          <h2>Actors</h2>
          <CarrouselPeople/>
          </div>



          <Footer/>
        
    </div>
  )
}

export default App