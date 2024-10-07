import React from "react";
import Logo from "./../../assets/img/logo.jpg";

const Footer = () => {
  return (
    <div className="container bg-[#4c4b4b]">
      <div className="grid grid-cols-4 gap-5 py-10 mt-10 text-white">
        <div>
          <img src={Logo} alt="" className="w-32" />
          <p>
            Moon Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Moon Play,
            thành viên của Công ty Cổ Phần Giải Trí và Giáo Dục Moon
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-7 mt-7">Giới thiệu</h2>
          <ul>
            <li>Quy chế sử dụng dịch vụ</li>
            <li>Chính sách bảo mật</li>
            <li>Khuyến mãi</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-7 mt-7">Hỗ trợ</h2>
          <p>0843601796</p>
        </div>

        <div>
          <h2 className="font-bold mb-7 mt-7">Kết nối với chúng tôi</h2>
          <i className="fa-brands text-3xl mr-3 fa-facebook" />
          <i className="fa-brands text-3xl mr-3 fa-instagram" />
          <i className="fa-brands text-3xl mr-3 fa-youtube" />
          <i className="fa-brands text-3xl mr-3 fa-linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
