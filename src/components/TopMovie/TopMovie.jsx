import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

const TopMovie = () => {
  const urlApi =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1 ";
  return (
    <>
      <MovieList urlApi={urlApi} title="Top 5 phim hôm nay" />
    </>
  );
};

export default TopMovie;
