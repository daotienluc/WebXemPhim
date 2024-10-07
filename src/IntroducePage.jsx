import React from "react";
import Header from "./components/Main/Header";
import TopMovie from "./components/TopMovie/TopMovie";
import SpecialMovie from "./components/SpecialMovie/SpecialMovie";
import Banner3 from "./components/Main/Banner3";
import HorrorMovie from "./components/HorrorMovie/HorrorMovie";
import Footer from "./components/Main/Footer";

const IntroducePage = () => {
  return (
    <>
      <Header />
      <div className="pt-20 container">
        <h2 className="font-bold my-10 text-xl">MoonPlay</h2>
        <p>
          Chào mừng bạn đến với trang web MoonPlay - nơi bạn có thể khám phá thế
          giới tuyệt vời của điện ảnh và trải nghiệm những bộ phim đẹp và đầy
          cảm xúc. Với một thư viện phong phú chứa đựng hàng ngàn tác phẩm từ
          mọi thể loại, chúng tôi mang đến cho bạn những giờ phút thư giãn và
          hứng khởi.
        </p>
      </div>
      <TopMovie />
      <p className="container">
        MoonPlay là một trang web xem phim trực tuyến được thiết kế đơn giản và
        dễ sử dụng, giúp bạn dễ dàng tìm kiếm và tận hưởng những bộ phim yêu
        thích của mình. Với giao diện trực quan và chức năng tìm kiếm thông
        minh, bạn có thể dễ dàng lựa chọn từ các thể loại phim đa dạng như hành
        động, tình cảm, hài hước, kinh dị và nhiều hơn nữa.
      </p>
      <SpecialMovie />
      <p className="container mb-10">
        Với MoonPlay, bạn sẽ khám phá những bộ phim độc đáo và đa dạng từ khắp
        nơi trên thế giới. Chúng tôi không chỉ cung cấp những bộ phim nổi tiếng
        và đã từng gây sốt trên màn ảnh rộng, mà còn cập nhật liên tục những tác
        phẩm mới nhất từ các nhà làm phim tài năng. Bạn có thể tận hưởng những
        bộ phim bom tấn, bộ phim độc lập, phim tài liệu và nhiều loại hình nghệ
        thuật điện ảnh khác. Với MoonPlay, bạn cũng có thể chia sẻ cảm nhận và
        nhận xét về những bộ phim bạn xem qua chức năng bình luận tích hợp. Bạn
        có thể thảo luận với cộng đồng yêu điện ảnh, chia sẻ những suy nghĩ và
        ấn tượng về các tác phẩm nghệ thuật mà bạn đã trải nghiệm.
      </p>
      <Banner3 />
      <p className="container my-10">
        Hãy bắt đầu hành trình khám phá thế giới điện ảnh đầy màu sắc với
        MoonPlayngay hôm nay! Hãy đắm chìm trong những câu chuyện đầy cảm xúc,
        khám phá những tài năng điện ảnh mới và tận hưởng những giờ phút thư
        giãn không thể quên. Hãy để MoonPlay trở thành nguồn cảm hứng cho tâm
        hồn và trí tưởng tượng của bạn.
      </p>
      <HorrorMovie />
      <Footer />
    </>
  );
};

export default IntroducePage;
