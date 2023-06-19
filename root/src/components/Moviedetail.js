// using the react hooks to update the UI content on chage
import React, { useState  , useEffect} from 'react'
// the movies array
import {movies} from "../data"
// the Router hooks to navigate through the pages and 
import { useParams , useNavigate} from 'react-router-dom';
// THE TRAILER VIDEO COMPONENT
import ReactPlayer from 'react-player';

// MOVIE DETAIL COMPONENT TO DISPLAY SINGLE MOVIE DETAIL
const Moviedetail = () => {
     // GETTING THE ID OF THE CLICKED ELEMENT
  const match = useParams();
//   useState dynamic data
  const [singleMovie , setSingleMovies] = useState(movies)
//   useNavigate() to navigate back to the main page
  const navigate = useNavigate();

  useEffect(() => {
     // filtering depending on the movie id => movie.id
    setSingleMovies(
        singleMovie.filter(item => (item.id == match.id))
    )
    },[])
  return (
    <div>
               {/* mapping the return data from the filter method to render the correct movie */}
            {singleMovie.map(item => (
                 <div className="wrapper">
                       
                       <div className='w-image'>
                            <img src={item.posteUrl} alt="" srcset="" />
                       </div>
                       <div className='w-desc'>
                            <h4>Movies Description and trailer</h4>
                            <h3 htmlFor="title">Name : {item.title}</h3>
                            <p>Description : {item.description}
                            </p>
                            <div className='video'>
                              {/* displaying the trailer and adding commands */}
                                <ReactPlayer style={{width : "200px"}} url={item.video} controls={true} />
                            </div>
                            {/* navigating back to the main page */}
                            <button className='btn' onClick={() => {navigate("/movieList")}}>Go Back</button>
                       </div>
                 </div>
                
            ))}
        </div>
  )
}

export default Moviedetail