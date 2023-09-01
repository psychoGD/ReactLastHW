import logo from './logo.svg';
import './App.css';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import MovieAddPage from './MovieAddPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllMovies from './AllMovies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar ></Navbar>
        <div style={{ width: '70%', marginTop: '50px', margin: 'auto' }}>
          <Routes>
            <Route exact path="/" element={<AllMovies />} ></Route>
            <Route exact path="/addmovie" element={<MovieAddPage />} ></Route>
          </Routes>
          
          {/* <MovieAddPage></MovieAddPage> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
