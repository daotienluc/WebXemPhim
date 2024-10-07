import React from "react";
import BannerImg from "./../../assets/img/banner2.jpg";

const Banner2 = () => {
  let bgStyle = {
    width: "100%",
    height: "45vh",
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div style={bgStyle}></div>;
};

export default Banner2;
