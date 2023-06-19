import React from 'react'

import MovieDetail from './Moviedetail';
// individual movie card element
const MovieCard = ({title , desc , posteUrl , rating , id , video}) => {
    
    return (
    <React.Fragment>
            <article className="movie" key={id}>
                <img src={posteUrl} alt={title} />
                <h2>{title}</h2>
                <h4>{desc}</h4> 
                <span className="number">{rating}</span>
            </article>
    </React.Fragment>
    )
}

export default MovieCard