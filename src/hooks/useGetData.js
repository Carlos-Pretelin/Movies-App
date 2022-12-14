import  { useState } from 'react'
import axios from 'axios'

const useGetData = () => {
    

    const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
            "Content-type": "application/json;charset=utf-8",
            //"X-API-KEY": "534a5e47e2f13aaa38e24c108307b419"
        },
        params: {
            "api_key": "534a5e47e2f13aaa38e24c108307b419"
        }
    })



   

    const IMAGE_URL = "https://image.tmdb.org/t/p/w300/"

    const [movies, setMovies] = useState([]) 
    const [tvShows, setTvShows] = useState([]) 
    const [actors, setActors] = useState([]) 

    const [categoriesMovies, setCategoriesMovies] = useState([]) 
    const [categoriesTv, setCategoriesTv] = useState([]) 

    const [previewInfo, setPreviewInfo] = useState(true) 





    //movies, shows and actors

     const loadData = async (url, updater)=> {
         const {data} = await api(url)
         const media = data.results;

         updater(media)
         console.log(media)
     }

     // categories
     const loadDataCategories = async (url, updater)=> {
        const {data} = await api(url)
        const media = data.genres;

        updater(media)
        //console.log(media)
    }



    // MOVIES
    // const loadDataMovies = async ()=> {
    //     const {data} = await api(`trending/movie/day`);
    //     const media = data.results;

    //     setMovies(media)
    //     console.log("MOVIES AXIOS")
    //     console.log(media)
    // }

    //  const loadMoviesCategories = async ()=> {
    //      const {data} = await api("genre/movie/list");
    //      const media = data.genres;

    //      setCategoriesMovies(media)
    //      console.log("MOVIES Categories AXIOS")
    //     console.log(media)

    //  }





    //  TV SHOWS

    // const loadDataTvShows = async ()=> {
    //     const {data} = await api(`trending/tv/day`);
    //     const media = data.results;

    //     setTvShows(media)
    //     console.log("TV SHOWS AXIOS")
    //     console.log(media)
    // }

    // const loadTvCategories = async ()=> {
    //     const {data} = await api("genre/tv/list")
    //     const media = data.genres;

    //     setCategoriesTv(media)
    //     console.log("TV  CATEGORIES AXIOS")
    //     console.log(media)
    // }




    // ACTORS


    // const loadDataActors = async ()=> {
    //     const {data} = await api("trending/person/day");
    //     const media = data.results;

    //     setActors(media)
    //     console.log("Actors AXIOS")
    //     console.log(media)
    // }

  return   {IMAGE_URL,
            movies,
            tvShows,
            actors,
            categoriesMovies,
            categoriesTv,
            previewInfo,
            setMovies,
            setTvShows,
            setActors,
            setCategoriesMovies,
            setCategoriesTv,
            loadData,
            loadDataCategories,
            setPreviewInfo}
        
}

export default useGetData