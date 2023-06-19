// using of the useRef and useState hooks
import { useRef, useState } from "react";
// importing the movie card componesnt
import MovieCard from "./MovieCard";
import {movies} from "../data";

// the functional filter componnent
const Filter = () => {
    // use of react hooks (useRef and useState)
    let filterRef = useRef();
    let [filterMovie , setMovies] = useState(movies)

    // handling the filter after the button is clicked
    const handleFilter = (filter) => {
        const filteredList = filterMovie.filter((movie) => {
            // matching movie by title
            if(movie.title.toUpperCase().indexOf(filter.toUpperCase()) > -1){
                // returning the matching elements
               return movie
            }
        })
        // using the setMovies (useState hook to update the movie list)
        setMovies(filteredList)

    }
        return (
            <>
            {/* bootstrap nav elements */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Movie</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                    {/* using the ref attribute to access the value that is passed into the input element */}
                <input className="form-control me-2" type="search" ref={filterRef}  placeholder="Filter" aria-label="Search"/>

                    {/*setting the onclick events on the button*/}
                <button className="btn btn-outline-success" type="submit" onClick={(e) => {
                    // prevent the default behaviour of the browser
                    e.preventDefault();
                    handleFilter(filterRef.current.value)}}>Filter</button>
                </form>
            </div>
            </div>
        </nav>
        {/* reupdating the ui once the list has been filtered */}
        <div className="movielist">
            {filterMovie.map((movie) => {
            return <MovieCard id={movie.id} title={movie.title} desc={movie.desc} posteUrl={movie.posteUrl} rating={movie.rating}/>
            })}
    </div>
        </>
        )
}

export default Filter