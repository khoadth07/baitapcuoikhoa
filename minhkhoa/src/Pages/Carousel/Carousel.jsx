import React from "react";
import Dialog from "../Dialog/Dialog";
import "./_carousel.scss";

const Carousel = () => {
  return (
    <>
      <section className="carousel">
        <div className="carousel__content">
          <div
            id="TixIndicators"
            className="carousel slide tixCarousel"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#TixIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#TixIndicators" data-slide-to={1} />
              <li data-target="#TixIndicators" data-slide-to={2} />
              <li data-target="#TixIndicators" data-slide-to={3} />
              <li data-target="#TixIndicators" data-slide-to={4} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="/" className="carousel__changeDetail">
                  <img
                    src="./img/carousel/rom.png"
                    className="d-block w-100"
                    alt="BLOODSHOT"
                  />
                  <div className="carousel__bg"></div>
                </a>
                <button type="button" className="carousel__button">
                  {/* <a href="/" className="carousel__changeDetail"></a> */}

                  <Dialog trailer={"KwzVr1-JAQQ"} />
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carousel/tiec-trang-mau.png"
                  className="d-block w-100"
                  alt="sieu-ve-si-so-vo"
                />
                <div className="carousel__bg"></div>
                <button type="button" className="carousel__button">
                  <Dialog trailer={"nh0BklwPN9Q"} />
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carousel/sieu-ve-si-so-vo.jpg"
                  className="d-block w-100"
                  alt="vi-anh-van-tin"
                />
                <div className="carousel__bg"></div>
                <button type="button" className="carousel__button">
                  <Dialog trailer={"-uOpDY8DAsM"} />
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carousel/vi-anh-van-tin.jpg"
                  className="d-block w-100"
                  alt="dau-an-vo-cuc"
                />
                <div className="carousel__bg"></div>
                <button type="button" className="carousel__button">
                  <Dialog trailer={"OGfm7CNM5BY"} />
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carousel/vin-diesel-BLOODSHOT.png"
                  className="d-block w-100"
                  alt="loan-nhip"
                />
                <div className="carousel__bg"></div>
                <button type="button" className="carousel__button">
                  <Dialog trailer={"MG-BJBSeV64"} />
                </button>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#TixIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon button"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#TixIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon button"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* <SearchBar /> */}
      </section>
    </>
  );
};

export default Carousel;
