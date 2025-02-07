import RecipePreview from './components/recipePreview';
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/home"
import About from "./components/about"
import RecipePage from "./components/recipePage"
import {useState, useEffect} from "react"


function App() {
  

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {< Home/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/recipe/:name" element={<RecipePage/>} />
      
      </Routes>
  
    </BrowserRouter>
    
    )
}

export default App;
