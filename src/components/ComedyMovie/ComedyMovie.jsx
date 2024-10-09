import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

const ComedyMovie = () => {
  const urlApi =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1";
  return (
    <>
      <MovieList urlApi={urlApi} title="Phim Hài truyền hình" />
    </>
  );
};

export default ComedyMovie;
