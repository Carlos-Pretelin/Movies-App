import React, { useState } from 'react'

const useGetData = () => {


    const API = `https://api.themoviedb.org/3/`
    const API_KEY = "?api_key=534a5e47e2f13aaa38e24c108307b419"
    
    const API_MOVIES = `${API}trending/movie/day${API_KEY}`
    const API_TVSHOWS = `${API}trending/tv/day${API_KEY}`
    const API_ACTORS = `${API}trending/person/day${API_KEY}`
    const API_CATEGORIES_MOVIES = `${API}genre/movie/list${API_KEY}&language=en-US`
    const API_CATEGORIES_TV = `${API}genre/tv/list${API_KEY}`

    const IMAGE_URL = "https://image.tmdb.org/t/p/w300/"

    const [movies, setMovies] = useState([]) 
    const [tvShows, setTvShows] = useState([]) 
    const [actors, setActors] = useState([]) 

    const [categoriesMovies, setCategoriesMovies] = useState([]) 
    const [categoriesTv, setCategoriesTv] = useState([]) 







    // const loadData = async (url, updater)=> {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     const media = data.results;

    //     updater(media)
    //     console.log(media)
    // }



    // MOVIES
    const loadDataMovies = async ()=> {
        const res = await fetch(API_MOVIES);
        const data = await res.json();
        const media = data.results;

        setMovies(media)
        console.log("MOVIES")
        console.log(media)
    }

     const loadMoviesCategories = async ()=> {
         const res = await fetch(API_CATEGORIES_MOVIES);
         const data = await res.json();
         const media = data.genres;

         setCategoriesMovies(media)
         console.log("CATEGORIES MOVIES")
         console.log(media)
     }


     // TV SHOWS

    const loadDataTvShows = async ()=> {
        const res = await fetch(API_TVSHOWS);
        const data = await res.json();
        const media = data.results;

        setTvShows(media)
        console.log("TV")
        console.log(media)
    }

    const loadTvCategories = async ()=> {
        const res = await fetch(API_CATEGORIES_TV);
        const data = await res.json();
        const media = data.results;

        setCategoriesTv(media)
        console.log("CATEGORIES TV")
        console.log(media)
    }




    // ACTORS


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
            categoriesMovies,
            categoriesTv,
            API_MOVIES,
            API_TVSHOWS,
            API_ACTORS,
            API_KEY,
            IMAGE_URL,
            setMovies,
            loadDataMovies,
            loadMoviesCategories,
            loadTvCategories,
            loadDataTvShows,
            loadDataActors,}
}

export default useGetData