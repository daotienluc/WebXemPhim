import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

const KoreaMovie = () => {
  const urlApi =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1";
  return (
    <>
      <MovieList urlApi={urlApi} title="Phim Hàn Quốc" />
    </>
  );
};

export default KoreaMovie;
