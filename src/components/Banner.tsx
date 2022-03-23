import { useEffect, useState } from "react";
import instance from "../requests.js/Axios";
import requests from "../requests.js/Requests";
import "./banner.css";

interface BannerItem {
  backdrop_path: string;
  title: string;
  name: string;
  original_name: string;
  overview: string;
}

function Banner() {
  const [movie, setMovie] = useState<BannerItem>();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fadeBotton" />
    </header>
  );
}

export default Banner;
