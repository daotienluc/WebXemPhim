import React from "react";
import BannerImg from "./../../assets/img/banner3.jpg";

const Banner3 = () => {
  let bgStyle = {
    width: "100%",
    height: "38vh",
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div style={bgStyle}></div>;
};

export default Banner3;
