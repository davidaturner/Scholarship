import React, { useState } from 'react'

const moviesList = {

    "movies" : [
        { "name" : "Harry Potter - Complete(8-films)", "price": 30.90, "id": 2330},
        { "name" : "Game of Thrones - Complete(DVD)", "price": 90.00, "id": 2331},
        { "name" : "Inception", "price": 11, "id": 2332},
        { "name" : "The Professional", "price": 9.94, "id": 2333},

    ]
}

const MovieList = () => {
    const [movies, setMovies] = useState(
        moviesList["movies"]
    )

    return(
        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList