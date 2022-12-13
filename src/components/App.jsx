import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData'
import Header from "./Header"
import CarrouselMovies from './CarrouselMovies'
import CarrouselPeople from './CarrouselPeople';
import CarrouselTv from './CarrouselTv';
import CategoriesTray from './CategoriesTray';
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
        
          <div>
          
          <CarrouselMovies />
          </div>

          <div>
          
          <CarrouselTv/>
          </div>

          <div>
          
          <CarrouselPeople/>
          </div>

          <CategoriesTray/>

          <Footer/>
        
    </div>
  )
}

export default App