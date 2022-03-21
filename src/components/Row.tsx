import React, { useEffect, useState } from "react";
import instance from "../requests.js/Axios";
import "./Rowposter.css";
//import { request } from "https";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row: React.FC<{ title: string; fetchUrl: string }> = ({
  title,
  fetchUrl,
}) => {
  interface Movie {
    poster_path: string;
    name: string;
    id: string;
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
        {movies.map((movies) => (
          <img
            key={movies.id}
            className="row__poster"
            src={`${base_url}${movies.poster_path}`}
            alt={movies.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
