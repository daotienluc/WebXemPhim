import React from "react";
import Movie1 from "./../../assets/img/Section1/Movie1.jpg";
import Movie2 from "./../../assets/img/Section1/Movie2.jpg";
import Movie3 from "./../../assets/img/Section1/Movie3.jpg";

const HotMovie = () => {
  return (
    <div className="container my-10">
      <h2 className="font-bold mb-10">Phim hot</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <img src={Movie1} alt="Movie1" />
        <img src={Movie2} alt="Movie2" />
        <img src={Movie3} alt="Movie3" />
      </div>
    </div>
  );
};

export default HotMovie;
