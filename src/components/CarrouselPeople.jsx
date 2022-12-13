import React, {useEffect} from 'react'
import useGetData from '../hooks/useGetData';
//import "../styles/CarrouselPeople.scss"
import defaultPicture from "../assets/DefaultPic-.png"

const CarrouselPeople = () => {



    const {
        actors,
        setActors,
        IMAGE_URL,
       
        
        loadData} = useGetData();


        useEffect( () =>{
            
            loadData("trending/person/day", setActors)
                       
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