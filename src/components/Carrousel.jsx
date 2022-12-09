import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData';


const Carrousel = () => {

    const {movies,
        API,
        API_KEY,
        setMovies,
        loadData} = useGetData();

    useEffect( () =>{
        loadData(API, setMovies);
    },[])

  return (
    <div className='Carrousel'>
        <div className='Media-Wrapper'>
            {movies.map(( item ) => (
                <h1>{item.title}</h1>
            ))}
        </div>
    </div>
  )
}

export default Carrousel