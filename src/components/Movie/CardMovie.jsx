import React, { useEffect, useState } from "react";
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import BannerMovie from "./../../assets/img/bannerMovie.jpg";
import CardMovieTT from "./CardMovieTT";
import { useLocation } from "react-router-dom";
import axios from "axios";

const arrTapPhim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardMovie = () => {
  const [video, setVideo] = useState([]);
  let location = useLocation();
  const { phimTuongTu, id, movie } = location.state;
  console.log(movie);

  const handleGetVideoPhim = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`
      );
      setVideo(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetVideoPhim(id);
  }, [id]);
  return (
    <>
      <Header />
      <div className="container bg-[#06121e] text-white pt-20 mb-[-2.5rem] pb-10">
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div className="space-y-5 my-5">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="flex">
            <p className="mr-20">Danh sách tập</p>
            <p>Thuyết minh: 10/10</p>
          </div>
          {arrTapPhim.map((item, index) => (
            <button
              key={index}
              className="mr-5 bg-white text-black px-5 py-2 rounded-lg hover:bg-red-500"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-1">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-full h-[306px] object-cover"
            />
          </div>
          <div className="col-span-3 space-y-3">
            <h2 className="text-center font-bold text-xl">{movie.title}</h2>
            <p className="text-center"></p>
            <p>
              Chào mừng bạn đến với trang web MoonPlay - nơi bạn có thể khám phá
              thế giới tuyệt vời của điện ảnh và trải nghiệm những bộ phim đẹp
              và đầy cảm xúc. Với một thư viện phong phú chứa đựng hàng ngàn tác
              phẩm từ mọi thể loại, chúng tôi mang đến cho bạn những giờ phút
              thư giãn và hứng khởi. Cốt truyện của "Bảy Viên Ngọc Rồng" xoay
              quanh việc tìm kiếm và thu thập bảy viên ngọc rồng. Mỗi viên ngọc
              có khả năng...
            </p>
          </div>
          <div className="col-span-1 grid">
            <h2 className="font-bold text-xl">Các phim tương tự</h2>
            <iframe
              width="100%"
              height="200px"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <CardMovieTT phimTuongTu={phimTuongTu} movie={movie} />
      </div>
      <Footer />
    </>
  );
};

export default CardMovie;
