import React, { useState } from 'react'

const useGetData = () => {

    const API_KEY = "?api_key=534a5e47e2f13aaa38e24c108307b419"
    const API_MOVIES = `https://api.themoviedb.org/3/trending/movie/day${API_KEY}`
    const API_TVSHOWS = `https://api.themoviedb.org/3/trending/tv/day${API_KEY}`
    const API_ACTORS = `https://api.themoviedb.org/3/trending/person/week${API_KEY}`

    const IMAGE_URL = "https://image.tmdb.org/t/p/w300/"

    const [movies, setMovies] = useState([]) 
    const [tvShows, setTvShows] = useState([]) 
    const [actors, setActors] = useState([]) 


    // const loadData = async (url, updater)=> {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     const media = data.results;

    //     updater(media)
    //     console.log(media)
    // }

    const loadDataMovies = async ()=> {
        const res = await fetch(API_MOVIES);
        const data = await res.json();
        const media = data.results;

        setMovies(media)
        console.log("MOVIES")
        console.log(media)
    }

    const loadDataTvShows = async ()=> {
        const res = await fetch(API_TVSHOWS);
        const data = await res.json();
        const media = data.results;

        setTvShows(media)
        console.log("TV")
        console.log(media)
    }

    const loadDataActors = async ()=> {
        const res = await fetch(API_ACTORS);
        const data = await res.json();
        const media = data.results;

        setActors(media)
        console.log("ACTORS")
        console.log(media)
    }

  return   {movies,
            tvShows,
            actors,
            API_MOVIES,
            API_TVSHOWS,
            API_ACTORS,
            API_KEY,
            IMAGE_URL,
            setMovies,
            loadDataMovies,
            loadDataTvShows,
            loadDataActors,}
}

export default useGetData