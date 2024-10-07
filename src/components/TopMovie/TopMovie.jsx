import React from "react";
import Movie1 from "./../../assets/img/Section1/Movie1.jpg";
import Movie2 from "./../../assets/img/Section1/Movie2.jpg";
import Movie3 from "./../../assets/img/Section1/Movie3.jpg";

const TopMovie = () => {
  return (
    <div className="container my-10">
      <h2 className="font-bold mb-10">Top 5 phim hôm nay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <img src={Movie1} alt="Movie1" />
        <img src={Movie2} alt="Movie2" />
        <img src={Movie3} alt="Movie3" />
        <img src={Movie3} alt="Movie3" />
        <img src={Movie3} alt="Movie3" />
      </div>
    </div>
  );
};

export default TopMovie;
