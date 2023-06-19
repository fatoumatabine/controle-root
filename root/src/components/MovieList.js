// importing in bootstrap and others stuff
import 'bootstrap/dist/css/bootstrap.css';
// importing in the movies json files
import {movies} from "../data"
// the single movie card
import MovieCard from "./MovieCard";
import {Link , Routes , Route, Outlet} from 'react-router-dom';

// importing in the filter by title components
import Filter from './Filter';
import Moviedetail from './Moviedetail';
const MovieList = () => {
  return (
    <>
    {/* using the commponent */}
      {/* <Filter/> */}
    <div className="movielist">
        {movies.map((movie) => (
          // passing in the props
          <Link to={"/moviedetail/"+movie.id}>
              <MovieCard id={movie.id} title={movie.title} desc={movie.desc} posteUrl={movie.posteUrl} rating={movie.rating}/>
           </Link>
          
        ))}
       
    </div>
    <Routes>
          <Route path='/moviedetail/:id' element={<Moviedetail/>}></Route>
    </Routes>
    </>
  )
}

export default MovieList