import React, { useEffect, useState } from "react";
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import BannerMovie from "./../../assets/img/bannerMovie.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import CardMovieTT from "./CardMovieTT";
import axios from "axios";

const Movie = () => {
  const [dienVien, setDienVien] = useState([]);
  const [phimTuongTu, setPhimTuongTu] = useState([]);
  const [crew, setCrew] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  let movie = location.state?.movie;
  let id = movie.id;

  const handleGetDataDienVienPhim = async (id) => {
    try {
      const response = await axios.get(
        `http://api.themoviedb.org/3/movie/${id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`
      );
      setDienVien(response.data.cast);
      setCrew(response.data.crew[1]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDataDanhSachPhimTT = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`
      );
      setPhimTuongTu(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGetDataReviewPhim = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e9e9d8da18ae29fc430845952232787c`
  //     );

  //     console.log(response.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    handleGetDataDienVienPhim(id);
    handleGetDataDanhSachPhimTT(id);
    // handleGetDataReviewPhim(id);
  }, [id]);

  const handleXemPhim = (id) => {
    navigate(`/movie/card-movie/${id}`, {
      state: { phimTuongTu, id, movie },
    });
  };
  return (
    <>
      <Header />
      <div className="pt-20 relative">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-backgroundOvlay pt-20">
          <div className="absolute right-[171px] bottom-[154px] left-[600px] text-white space-y-5">
            <h2 className="text-4xl font-bold">{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <div className="flex items-center">
              <i className="fa-solid fa-clock mr-3" />

              <p>1 giờ 41 phút</p>
            </div>
            <div className="flex items-center">
              <i className="fa-brands fa-facebook mr-3" />

              <p>Chia sẻ</p>
            </div>
          </div>
          <div className="container absolute -bottom-16">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-72 h-[384px] object-cover"
            />
            <button
              className="bg-red-500 mt-3 py-2 pl-[111px] pr-[102px] text-white rounded-lg"
              onClick={() => {
                handleXemPhim(id, movie);
              }}
            >
              XEM PHIM
            </button>
          </div>
        </div>
      </div>
      <div className="container mb-[-2.5rem] pb-10 bg-[#06121e] text-white">
        <div className="max-w-96 m-auto space-y-4">
          <div className="flex justify-start items-center">
            <p className="mr-11 text-[#4C4B4B] font-medium">Đạo diễn</p>
            <p className="text-white font-medium">{crew.name}</p>
          </div>

          <div className="flex justify-start items-center">
            <p className="mr-11 text-[#4C4B4B] font-medium">Độ nổi tiếng</p>
            <p className="text-white font-medium">{crew.popularity}</p>
          </div>

          <div className="flex justify-start items-center">
            <p className="mr-8 text-[#4C4B4B] font-medium">Ngày phát hành</p>
            <p className="text-white font-medium">{movie.release_date}</p>
          </div>
        </div>
        <p className="py-10">{movie.overview}</p>
        <h2 className="my-10 font-bold">Diễn Viên</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {dienVien.length > 0 ? (
            dienVien.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt=""
                  className="w-full h-96 md:h-56 object-cover rounded-full "
                />
                <h3>{item.name}</h3>
                <p className="text-gray-400">
                  {item.popularity} / <span>{item.character}</span>
                </p>
              </div>
            ))
          ) : (
            <p>Sảy ra lỗi, vui lòng thử lại sau !</p>
          )}
        </div>
        <h2 className="my-10 font-bold">Trailer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <div>
            <img
              src={BannerMovie}
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          <div>
            <img
              src={BannerMovie}
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          <div>
            <img
              src={BannerMovie}
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
        </div>

        <CardMovieTT phimTuongTu={phimTuongTu} movie={movie} />
      </div>

      <Footer />
    </>
  );
};

export default Movie;
