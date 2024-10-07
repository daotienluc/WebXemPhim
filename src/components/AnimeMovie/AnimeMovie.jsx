import React from "react";
import Movie1 from "./../../assets/img/Section2/img.jpg";

const AnimeMovie = () => {
  return (
    <div className="container my-10">
      <h2 className="font-bold mb-10">Phim Anime</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <img src={Movie1} alt="Movie1" />
        <img src={Movie1} alt="Movie2" />
        <img src={Movie1} alt="Movie3" />
        <img src={Movie1} alt="Movie3" />
        <img src={Movie1} alt="Movie3" />
      </div>
    </div>
  );
};

export default AnimeMovie;
