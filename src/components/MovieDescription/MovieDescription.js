import "./style.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const base_url = "https://image.tmdb.org/t/p/original/";

function MovieDescription({ movie, closeCallback }) {
  const getReleaseYear = (date) => {
    return date.substring(0, 4);
  };

  return (
    <div className="movieDescription">
      <div className="movieDescriptionLeft">
        <img
          key={movie.name || movie.original_title}
          alt={movie.name || movie.original_title}
          className="moviePoster"
          src={`${base_url}${movie.poster_path}`}
        />
      </div>
      <div className="movieDescriptionRight">
        <div className="movieDescriptionHeader">
          <h1 className="movieTitle">{movie.name || movie.original_title}</h1>
          <CloseIcon className="closeIcon" onClick={closeCallback} />
        </div>
        <div className="movieData">
          <h1 className="movieRating">{movie.vote_average} / 10</h1>
          <h1 className="movieReleaseYear">
            {getReleaseYear(movie.first_air_date || movie.release_date)}
          </h1>
        </div>
        <h1 className="movieSynopsis">{movie.overview}</h1>
      </div>
    </div>
  );
}

export default MovieDescription;
