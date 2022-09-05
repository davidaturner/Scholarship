import React, { useState } from 'react'

const MovieList = () => {
    // eslint-disable-next-line
    const [movies, setMovies] = useState([
        { "name" : "Harry Potter", "price": 30.90, "id": 2330},
        { "name" : "Game of Thrones", "price": 90.00, "id": 2331},
        { "name" : "Inception", "price": 11, "id": 2332},
        { "name" : "The Professional", "price": 9.94, "id": 2333},
    ])

    return(
        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList