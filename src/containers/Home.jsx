import React from 'react'
import CarrouselMovies from "../components/CarrouselMovies.jsx"
import CarrouselTv from '../components/CarrouselTv';
import CarrouselPeople from '../components/CarrouselPeople';
import CategoriesTray from '../components/CategoriesTray';


const Home = () => {


  
  return (
    <div>
    
          <CarrouselMovies />
          
          <CarrouselTv/>
     
          <CarrouselPeople/>
   
          <CategoriesTray/>

        
    </div>
  )
}

export default Home