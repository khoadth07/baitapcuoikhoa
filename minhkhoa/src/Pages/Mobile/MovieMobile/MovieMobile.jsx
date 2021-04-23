import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./_movieMobile.scss";
import MovieCommingSoon from "../MovieCommingSoon/MovieCommingSoon";
import MovieMobileItems from "../MovieMobileItems/MovieMobileItems";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const MovieMobile = (props) => {
  const movieList = useSelector((state) => state.MovieReducer.listMovie);
  const [tabIndex, setTabIndex] = useState(0);
  const [films, setFilms] = useState([]);
  const refs = useRef([]);
  const [listShow, setListShow] = useState([]);
  const [filmsComingSoon, setFilmsComingSoon] = useState([]);

  useEffect(() => {
    _.isEmpty(films) && setFilms(movieList);
    if (!_.isEmpty(films)) {
      setListShow(() => {
        let listShow = [];
        let i = 0;
        while (i < 3) {
          listShow.push(films[i]);
          i++;
        }
        return listShow;
      });
      setFilmsComingSoon(() => {
        let listShow = [];
        let i = 0;
        while (i < 4) {
          listShow.push(films[i]);
          i++;
        }
        return listShow;
      });
    }
  }, [movieList, films]);

  const handleActive = (index) => {
    refs.current = refs.current.map((item, indexItem) => {
      index === indexItem
        ? item.classList.add("active")
        : item.classList.remove("active");
      return item;
    });
  };
  const toggleTabIndex = (index) => {
    setTabIndex(index);
  };

  const showAll = () => {
    setListShow(films);
  };
  const showAllFilmComing = () => {
    setFilmsComingSoon(films);
  };

  return (
    <div className="films-mobile">
      <div className="wrap">
        <ul className="tabs">
          <li
            ref={(li) => (refs.current[0] = li)}
            onClick={() => {
              handleActive(0);
              toggleTabIndex(0);
            }}
            className="active"
          >
            Đang Chiếu
          </li>
          <li
            ref={(li) => (refs.current[1] = li)}
            onClick={() => {
              handleActive(1);
              toggleTabIndex(1);
            }}
          >
            Sắp Chiếu
          </li>
        </ul>
        <TabPanel value={tabIndex} index={0} className="tab-pane">
          {listShow.map((film) => (
            <MovieMobileItems film={film} key={film.maPhim} />
          ))}
          {listShow.length !== films.length && (
            <Button variant="outlined" onClick={showAll}>
              Xem thêm
            </Button>
          )}
        </TabPanel>
        <TabPanel
          value={tabIndex}
          index={1}
          className="tab-pane film-coming-soon"
        >
          {filmsComingSoon.map((film) => (
            <MovieCommingSoon film={film} key={film.maPhim} />
          ))}
          {filmsComingSoon.length !== films.length && (
            <Button variant="outlined" onClick={showAllFilmComing}>
              Xem thêm
            </Button>
          )}
        </TabPanel>
      </div>
    </div>
  );
};

export default MovieMobile;
