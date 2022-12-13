import React from 'react'
import Header from '../components/Header';
import CarrouselMovies from "../components/CarrouselMovies.jsx"
import CarrouselTv from '../components/CarrouselTv';
import CarrouselPeople from '../components/CarrouselPeople';
import CategoriesTray from '../components/CategoriesTray';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
         

      
        
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

        
    </div>
  )
}

export default Home