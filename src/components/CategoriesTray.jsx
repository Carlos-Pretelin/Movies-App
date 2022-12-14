import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData'
import { Link } from 'react-router-dom';
import CategoryGalery from "../containers/CategoryGalery"
import "../styles/CategoriesTray.scss"

const CategoriesTray = () => {

const {
    categoriesMovies,
    
  loadDataCategories,
  setCategoriesMovies,
} = useGetData();



  useEffect(()=>{
    loadDataCategories("genre/movie/list", setCategoriesMovies)
  }, [])  
  return (
    <div className='CategoriesTray'>
        {categoriesMovies.map(item => (

            <Link to={"/CategoryGalery"} key={item.id} className='CategoriesTray-Item'>
                <i className="fa-solid fa-circle-half-stroke"></i>
                <span>{item.name}</span>
            </Link>

            
        ))}
    </div>
  )
}

export default CategoriesTray