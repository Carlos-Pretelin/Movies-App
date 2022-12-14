import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout'
import Home from '../containers/Home'
import Movies from "../containers/Movies"
import Series from "../containers/Series"
import People from "../containers/People"
import CategoryGalery from "../containers/CategoryGalery"
import NotFound from "../components/NotFound"
import "../styles/App.scss"






const App = () => {


  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Movies' element={<Movies/>} />
        <Route exact path='/Series' element={<Series/>} />
        <Route exact path='/People' element={<People/>} />
        <Route exact path='/CategoryGalery' element={<CategoryGalery/>} />
        <Route exact path='*' element={<NotFound/>} />

      </Routes>
      
      
    </Layout>
        
    
</BrowserRouter>
  )
}

export default App