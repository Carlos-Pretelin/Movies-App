import React, { useState } from 'react'

const useGetData = () => {

    const API_KEY = "?api_key=534a5e47e2f13aaa38e24c108307b419"
    const API = `https://api.themoviedb.org/3/trending/movie/day${API_KEY}`

    const [movies, setMovies] = useState([]) 


    const loadData = async (Url, updater)=> {
        const res = await fetch(Url);
        const data = await res.json();
        const media = data.results;

        updater(media)
        console.log(media)
    }

  return   {movies,
            API,
            API_KEY,
            setMovies,
            loadData}
}

export default useGetData