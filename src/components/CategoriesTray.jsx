import React, { useEffect } from 'react'
import useGetData from '../hooks/useGetData'
import "../styles/CategoriesTray.scss"

const CategoriesTray = () => {

const {
    categoriesMovies,
    loadMoviesCategories,
  loadData,
  loadDataCategories,
  setCategoriesMovies,
} = useGetData();



  useEffect(()=>{
    loadDataCategories("genre/movie/list", setCategoriesMovies)
  }, [])  
  return (
    <div className='CategoriesTray'>
        {categoriesMovies.map(item => (

            <div key={item.id} className='CategoriesTray-Item'>
                <i className="fa-solid fa-circle-half-stroke"></i>
                <a>{item.name}</a>
            </div>

            
        ))}
    </div>
  )
}

export default CategoriesTray