import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData';
import "../styles/Carrousel.scss"
import PreviewModal from './PreviewModal';


const Carrousel = () => {

    const  {movies,
            IMAGE_URL,
            setMovies,
            loadData,
            previewInfo,
            setPreviewInfo
            } = useGetData();




useEffect( () =>{
     
     loadData("trending/movie/day", setMovies, "Peliculas")
                
},[])
            
    
  return (
    <div className='Carrousel'>
            <h1>Trending Movies</h1>
        <div className='Carrousel-Slider'>

            
            
            {movies.map(( item ) => (
                <div className='Carrousel-Slider-Item' key={item.id}>
                    <img className='Media-Poster' src={`${IMAGE_URL}${item.poster_path}`} alt={`${item.title} Poster`} />
                </div>
            ))}

        </div>
        <button onClick={()=>{setPreviewInfo(!previewInfo)}}>Culo</button>
        {previewInfo ? <PreviewModal/> : console.log("hola")}
    </div>
  )
}

export default Carrousel