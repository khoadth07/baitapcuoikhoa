import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./_movieList.scss";
import _ from "lodash";
import MovieItems from "../MovieItems/MovieItems";
import { useSelector } from "react-redux";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const MovieList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const filmList = useSelector(state => state.MovieReducer.listMovie);

  useEffect(() => {
    if (!_.isEmpty(filmList)) {
      let delay = _.debounce(() => setIsLoading(false), 100);
      delay();
    }
  }, [filmList]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderFilmList = () => {
    return filmList.map((film, index) => {
      return (
        <div
          key={index}
          className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container"
        >
          <MovieItems film={film} />
        </div>
      );
    });
  };

  return (
    <div className="mt-5 film-list" id="section1">
      <ul className="nav nav-pills mb-3 container  text-center justify-content-center mb-5">
        <li className="nav-item nowShowingFilms_container">
          <a
            className="nowShowingFilms nav-link active"
            data-toggle="pill"
            href="#pills-nowShowingFilms"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item upComingFilms_container">
          <a
            className="upComingFilms nav-link"
            data-toggle="pill"
            href="#pills-upComingFilms"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>

      <div className="tab-content container">
        <div className="tab-pane fade show active" id="pills-nowShowingFilms">
          <Slider {...settings} className="film-list container">
            {isLoading
              ? Array.from({ length: 8 }).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block film-item_container"
                    >
                      <MovieItems film={null} />
                    </div>
                  );
                })
              : renderFilmList()}
            {}
          </Slider>
        </div>
        <div className="tab-pane fade" id="pills-upComingFilms" role="tabpanel">
          <Slider {...settings} className="film-list ">
            {renderFilmList()}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
