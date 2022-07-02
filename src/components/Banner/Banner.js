import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomPosition = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      const randomMovie = request.data.results[randomPosition];
      setMovie(randomMovie);
      return randomMovie;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContainer">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttonsContainer">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
