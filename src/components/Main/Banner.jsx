import React from "react";
import BannerImg from "./../../assets/img/banner.jpg";
import BannerIcon from "./../../assets/img/bannerIcon.jpg";

const Banner = () => {
  let bgStyle = {
    width: "100%",
    height: "77vh",
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className=" pt-20">
      <div style={bgStyle} className=" container">
        <div className="w-2/5 ">
          <img src={BannerIcon} alt="BannerIcon" className="w-full pt-20" />
          <div className="flex justify-center items-center">
            <button className="px-5 py-2 bg-gray-400 text-black font-bold rounded-xl ">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
