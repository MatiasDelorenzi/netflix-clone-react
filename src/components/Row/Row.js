import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URL(url).search;
          const urlSearchParams = new URLSearchParams(urlParams);
          setTrailerUrl(urlSearchParams.get("v"));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const youtubeOptions = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
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
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOptions} />}
    </div>
  );
}

export default Row;
