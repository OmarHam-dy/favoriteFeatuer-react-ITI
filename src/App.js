import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favorite from './Components/favorites/favorite';
import Header from './Components/header/header';
import Details from './Components/movie-details/details';
import Movie from './Components/movies/movies';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
