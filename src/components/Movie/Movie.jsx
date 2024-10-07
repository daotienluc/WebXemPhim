import React from "react";
import Header from "../Main/Header";
import BannerMovie from "./../../assets/img/bannerMovie.jpg";

const Movie = () => {
  return (
    <>
      <Header />
      <div className="pt-20 relative">
        <img
          src={BannerMovie}
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-backgroundOvlay pt-20">
          <div className="absolute right-[400px] bottom-[210px] text-white space-y-5">
            <h2 className="text-4xl font-bold">
              Dragon Ball Super Movie: Broly
            </h2>
            <p>Bảy Viên Ngọc Rồng Siêu Cấp: Huyền Thoại Broly (2018) </p>
            <div className="flex items-center">
              <i class="fa-solid fa-clock mr-3"></i>
              <p>1 giờ 41 phút</p>
            </div>
            <div className="flex items-center">
              <i class="fa-brands fa-facebook mr-3"></i>
              <p>Chia sẻ</p>
            </div>
          </div>
          <div className="container absolute -bottom-16">
            <img
              src={BannerMovie}
              alt=""
              className="w-72 h-[384px] object-cover"
            />
            <button className="bg-red-500 mt-3 py-2 pl-[111px] pr-[102px] text-white rounded-lg">
              XEM PHIM
            </button>
          </div>
        </div>
      </div>
      <div className="container mb-10 bg-[#06121e] text-white">
        <div className="max-w-96 m-auto space-y-4">
          <div className="flex justify-start items-center">
            <p className="mr-11 text-[#4C4B4B] font-medium">Đạo diễn</p>
            <p className="text-white font-medium">Tatsuya Nagamine</p>
          </div>

          <div className="flex justify-start items-center">
            <p className="mr-11 text-[#4C4B4B] font-medium">Quốc gia</p>
            <p className="text-white font-medium">Nhật bản</p>
          </div>

          <div className="flex justify-start items-center">
            <p className="mr-8 text-[#4C4B4B] font-medium">Khởi chiếu</p>
            <p className="text-white font-medium">14/12/2018</p>
          </div>
        </div>
        <p className="py-10">
          Dragon Ball Super Movie: Broly là bộ phim thứ 20 trong series Dragon
          Ball, và là Movie đầu tiên mang thương hiệu Dragon Ball Super, lấy bối
          cảnh khi đế chế Frieza đàn áp, đặt ách thống trị, bắt người Saiyan
          phải phải phục vụ làm việc dưới quyền của chúng. Khi đó 3 đứa trẻ
          Saiyan đã được sinh ra cùng một lúc, nhưng số phận của chúng lại hoàn
          toàn khác nhau: Vegeta là hoàng tử của tộc người Saiyan, Kakalot
          (Goku) là con trai của tướng quân Bardock, và Broly là con của
          Paragus.
        </p>
      </div>
    </>
  );
};

export default Movie;
