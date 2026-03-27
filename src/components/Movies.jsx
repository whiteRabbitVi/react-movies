import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    return (
         <div className="row">
            {props.movies.map(movie => (
                <div
                    key={movie.imdbID}
                    className="col s12 m6 l4"
                >
                    <Movie
                        title={movie.Title}
                        img={movie.Poster}
                        year={movie.Year}
                    />
                </div>
            ))}
        </div>
    )
}

export { Movies };