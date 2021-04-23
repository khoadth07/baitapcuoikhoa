import React from "react";
import "./_appDowload.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AppDowload = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const slider = [
    "./img/slide/slide1.jpg",
    "./img/slide/slide2.jpg",
    "./img/slide/slide3.jpg",
    "./img/slide/slide4.jpg",
    "./img/slide/slide5.jpg",
    "./img/slide/slide6.jpg",
    "./img/slide/slide7.jpg",
    "./img/slide/slide8.jpg",
    "./img/slide/slide9.jpg",
    "./img/slide/slide10.jpg",
    "./img/slide/slide11.jpg",
    "./img/slide/slide16.jpg",
  ];
  return (
    <div className="app__download" id="section4">
      <div className="app__download__container container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 left text-left px-0">
            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
            <p className="textLeft">người yêu điện ảnh</p>
            <br />
            <p className="textSmallerLeft">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br />
            <div className="btn_container">
              <button className="btn"><a className="btn__link" target="_blank" href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"> App miễn phí - Tải về ngay!</a></button>
            </div>
            <p className="textAppUnder">
              TIX có hai phiên bản{" "}
              <a
                className="tag"
                target="_blank"
                rel="noopener noreferrer"
                href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              >
                iOS
              </a>{" "}
              &amp;&nbsp;{" "}
              <a
                className="tag"
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right px-0">
            {/* w-100 */}
            <img
              className="w-100 img__responsive"
              src="./img/mobile.png"
              alt="mobile"
            />
            <div
              id="sliderScreen"
              className="wrapSlick slick-initialized slick-slider"
            >
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <Slider {...settings}>
                    {slider.map((item, index) => {
                      return (
                        <div className="carousel-item" key={index}>
                          <img src={item} className="d-block" alt="..." />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDowload;
