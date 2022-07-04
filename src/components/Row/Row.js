import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import MovieDescription from "../MovieDescription/MovieDescription";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movieDescription, setMovieDescription] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setMovieDescription(movie);
  };

  const closeDescription = () => {
    setMovieDescription("");
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="postersContainer">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`poster ${isLargeRow && "posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {movieDescription && (
        <MovieDescription
          movie={movieDescription}
          closeCallback={closeDescription}
        />
      )}
    </div>
  );
}

export default Row;
