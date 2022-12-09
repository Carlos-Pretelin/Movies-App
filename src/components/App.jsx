import React from 'react'
import useGetData from '../hooks/useGetData'
import Carrousel from './Carrousel'

const App = () => {


  const {movies,
    API_MOVIES,
    API_KEY,
    IMAGE_URL,
    setMovies,
    loadData} = useGetData();
    
  return (
    <div>
        <h1>Heres the Picture Carrousel</h1>
          <div>
          <h2>Movies</h2>
          <Carrousel url={API_MOVIES} updater={setMovies} />
          </div>

          <div>
          <h2>Tv Shows</h2>
          <Carrousel/>
          </div>

          <div>
          <h2>Actors</h2>
          <Carrousel/>
          </div>
        
    </div>
  )
}

export default App