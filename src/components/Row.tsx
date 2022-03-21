import React, { useEffect, useState } from "react";
import instance from "../requests.js/Axios";

//import { request } from "https";


const Row : React.FC<{ title: string, fetchUrl: string}>  = ({title,fetchUrl}) => {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
    async function fetchData(){
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }

    fetchData()
 },[fetchUrl]);
 console.log(movies);
  
  
  return (
    <div>
      <h2>{title}</h2>
      <div className="row__poster"> 
        {movies.map((movies) => (
          <img src={movies.poster_path} alt={movies.name}></img>
          ))}
      </div>
    </div>
  );
};

export default Row;
