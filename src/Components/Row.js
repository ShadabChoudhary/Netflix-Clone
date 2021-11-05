import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");
  const [respo, setRespo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  // console.log(movies);
  const opts = {
    height: "300",
    width: "400",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleClick = (e) => {
    const videoFetch = async () => {
      const vidfetch = await fetch(
        `https://api.themoviedb.org/3/movie/${e.target.id}/videos?api_key=05a5023ec53396dbac2b66d35a1c01aa&language=en-US`
      );
      const vidresp = await vidfetch.json();

      setRespo(vidresp.results);
    };
    videoFetch();
    console.log(e.target.id);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            id={movie.id}
            onClick={handleClick}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div className="video-box">
        {respo.map((video) => {
          console.log(respo);
          return (
            <div>
              {video.type === "Trailer" && (
                <div className="youtubeVideo">
                  <h1>{video.name.slice(0, 30)}...</h1>
                  <YouTube videoId={video.key} opts={opts}></YouTube>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
