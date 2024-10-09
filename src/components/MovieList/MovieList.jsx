import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = ({ urlApi, title }) => {
  const [dataPhim, setDataPhim] = useState([]);
  const handleGetData = async () => {
    try {
      const response = await axios.get(urlApi, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU3MDU4ZjAxMTAzZTgxOTNkOTAwNzczYzdhZWFlMyIsIm5iZiI6MTcyODM3MDA0My4zMDE2MzYsInN1YiI6IjY3MDRkMzQwY2NiYjRlN2YxNjY5YzA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HTPxS2iyf_lTY29cB7dVDPNbjvQuNzm6PiFsA6fqVJE",
          Accept: "application/json",
        },
      });
      setDataPhim(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="container my-10">
      <h2 className="font-bold mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {dataPhim.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} state={{ movie }} key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
