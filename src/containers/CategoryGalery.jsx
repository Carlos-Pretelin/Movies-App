import React from 'react'
import useGetData from "../hooks/useGetData.js"

const CategoryGalery = () => {

  const {categoriesMovies} = useGetData();
  return (
    <div className="CategoryGalery">
        Aqui van la media que corresponda a la categoria que escogi 
    </div>
  )
}

export default CategoryGalery