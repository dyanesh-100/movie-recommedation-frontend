import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import GetAllMoviesComponent from './components/GetAllMovieComponent/GetAllMovieComponent'
import AddNewMovieComponent from './components/AddNewMovieComponent/AddNewMovieComponent'
import MovieSuggestionComponent from './components/MovieSuggestionComponent/MovieSuggestionComponent'

const App = () => {
  return (
    <Router>
            <div className="container">
              <h1>Movie Suggestion App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Movies</Link>
                <Link to="/suggest" >Get Suggestions</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllMoviesComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewMovieComponent/>}></Route>
                 <Route path='/suggest' element={<MovieSuggestionComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  )
}

export default App