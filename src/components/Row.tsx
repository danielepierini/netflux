import React, { useEffect, useState } from "react";
import { Loop } from "@mui/icons-material";
import instance from "../requests.js/Axios";
import "./Rowposter.css";
//import { request } from "https";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row: React.FC<{
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}> = ({ title, fetchUrl, isLargeRow }) => {
  interface Movie {
    poster_path: string;
    name: string;
    id: string;
    backdrop_path: string;
  }
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {!movies.length && (
          <p className="row_posters-loader">
            <Loop />
          </p>
        )}
        {movies.map((movies) => (
          <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
