import React, { useState } from 'react'

const useGetData = () => {

    const API_KEY = "?api_key=534a5e47e2f13aaa38e24c108307b419"
    const API_MOVIES = `https://api.themoviedb.org/3/trending/movie/day${API_KEY}`

    const IMAGE_URL = "https://image.tmdb.org/t/p/w300/"

    const [movies, setMovies] = useState([]) 


    const loadData = async (url, updater)=> {
        const res = await fetch(url);
        const data = await res.json();
        const media = data.results;

        updater(media)
        console.log(media)
    }

  return   {movies,
            API_MOVIES,
            API_KEY,
            IMAGE_URL,
            setMovies,
            loadData}
}

export default useGetData