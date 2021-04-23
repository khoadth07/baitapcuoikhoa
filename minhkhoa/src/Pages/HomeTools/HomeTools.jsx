import React, { useCallback, useEffect, useRef, useState } from "react";
import "./_homeTools.scss";
import IconDropDown from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsListAPI } from "../../Redux/Action/MovieAction";
import { getCinemaListMovie } from "../../Redux/Action/CinameAction";
import { useHistory } from "react-router";

const HomeTools = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const refs = useRef();

  const [movie, setNameMovie] = useState("Phim");
  const [theater, setTheater] = useState({
    tenCumRap: "Rạp",
    lichChieuPhim: [],
  });
  const [dateTime, setDateTime] = useState("Ngày Xem");
  const [suatChieu, setSuatChieu] = useState({
    ngayChieuGioChieu: "",
    maLichChieu: "",
  });

  const [open, setOpen] = useState({
    film: false,
    cinema: false,
    date: false,
    showings: false,
  });

  const propMovie = useSelector((state) => state.MovieReducer);


  const dropdownClose = (nameState) => {
    setOpen({ ...open, [nameState]: false });
  };

  const handleClickChooseMovie = useCallback(
    (value) => () => {
      // console.log(value);
      dispatch(
        getCinemaListMovie(value.maPhim, () => {
          setNameMovie(value.tenPhim);
          setTheater({ tenCumRap: "Rạp", lichChieuPhim: [] });
          setDateTime("Ngày Xem");
          setSuatChieu({ ngayChieuGioChieu: "", maLichChieu: "" });
        })
      );
      dropdownClose();
    },
    []
  );

  const renderListMovie = useCallback(() => {
    let listMovie = propMovie.listMovie;
    if (listMovie) {
      return listMovie.map((item, index) => {
        let m = { maPhim: item.maPhim, tenPhim: item.tenPhim };
        return (
          <li key={index} onClick={handleClickChooseMovie(m)}>
            {item.tenPhim}
          </li>
        );
      });
    }
  }, [propMovie.listMovie]);

  const handleClickChooseTheater = useCallback(
    (value) => () => {
      // console.log(value);
      setTheater(value);
      setDateTime("Ngày Xem");
      setSuatChieu({ ngayChieuGioChieu: "", maLichChieu: "" });
      dropdownClose();
    },
    []
  );

  const renderListTheater = useCallback(() => {
    let listTheater = [];
    // console.log(propMovie.movieInfoSystem.heThongRapChieu);
    if (propMovie.movieInfoSystem.heThongRapChieu) {
      for (let htr of propMovie.movieInfoSystem.heThongRapChieu) {
        for (let r of htr.cumRapChieu) {
          listTheater.push(r);
        }
      }
    }
    if (listTheater) {
      return listTheater.map((item, index) => {
        return (
          <li key={index} onClick={handleClickChooseTheater(item)}>
            {item.tenCumRap}
          </li>
        );
      });
    }
  }, [propMovie.movieInfoSystem.heThongRapChieu]);

  const handleClickChooseDateTime = useCallback(
    (value) => () => {
      // console.log(value);
      setDateTime(converDayFormat(value.ngayChieuGioChieu));
      setSuatChieu({ ngayChieuGioChieu: "", maLichChieu: "" });
      dropdownClose();
    },
    []
  );

  const converDayFormat = useCallback((value) => {
    let item = new Date(value);
    let d = `${item.getDate() < 10 ? `0${item.getDate()}` : item.getDate()}/${
      item.getMonth() + 1 < 10
        ? "0" + (item.getMonth() + 1)
        : item.getMonth() + 1
    }/${item.getFullYear()}`;
    return d;
  }, []);

  const renderListDate = useCallback(() => {
    let listTam = [];
    let dateString = "";
    for (let item of theater.lichChieuPhim) {
      let day = converDayFormat(item.ngayChieuGioChieu);
      if (day !== dateString) {
        listTam.push(item);
      }
      dateString = day;
    }
    // console.log(listTam);

    return listTam.map((item, index) => {
      return (
        <li key={index} onClick={handleClickChooseDateTime(item)}>
          <span>{covertDateFormat(item.ngayChieuGioChieu)}</span>
          <br />
          <span>{converDayFormat(item.ngayChieuGioChieu)}</span>
        </li>
      );
    });
  }, [theater.lichChieuPhim]);

  const handleClickChooseSuaChieu = useCallback(
    (value) => () => {
      setSuatChieu(value);
      // console.log(value);
      dropdownClose();
    },
    []
  );
  const renderListLichChieu = useCallback(() => {
    // console.log(theater.lichChieuPhim);
    if (theater.lichChieuPhim) {
      let day = dateTime;
      let list = theater.lichChieuPhim.filter(
        (lc) => converDayFormat(lc.ngayChieuGioChieu) === day
      );
      return list.map((item, index) => {
        let d = new Date(item.ngayChieuGioChieu);
        return (
          <li key={index} onClick={handleClickChooseSuaChieu(item)}>
            {d.getHours()}:{d.getMinutes()} -{" "}
            {converDayFormat(item.ngayChieuGioChieu)}
          </li>
        );
      });
    }
  }, [theater.lichChieuPhim, dateTime]);

  useEffect(() => {
    dispatch(getFilmsListAPI());
  }, []);

  const toggleOpen = (nameState) => {
    setOpen(() => {
      let newOpen = { ...open };
      const array = Object.entries(newOpen);
      array.map((item) =>
        item[0] === nameState ? (item[1] = !open[nameState]) : (item[1] = false)
      );
      newOpen = Object.assign(
        {},
        ...array.map((item) => ({ [item[0]]: item[1] }))
      );
      return newOpen;
    });
  };

  const covertDateFormat = useCallback((value) => {
    let item = new Date(value);
    if (item.getDay() === 0) {
      return "Chủ Nhật";
    }
    if (item.getDay() === 1) {
      return "Thứ 2";
    }
    if (item.getDay() === 2) {
      return "Thứ 3";
    }
    if (item.getDay() === 3) {
      return "Thứ 4";
    }
    if (item.getDay() === 4) {
      return "Thứ 5";
    }
    if (item.getDay() === 5) {
      return "Thứ 6";
    }
    if (item.getDay() === 6) {
      return "Thứ Bảy";
    }
  }, []);

  const scrollDown = () => {
    refs.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const covertTimeFormat = useCallback((value) => {
    let d = new Date(value);
    return `${d.getHours()}:${d.getMinutes()}`;
  }, []);

  // console.log(movie);
  const user = localStorage.getItem("user");
  const handleBooking =(code)=>{
    // console.log(suatChieu.maLichChieu);
    if(user){
      if(code){
        history.push(`/booking/${code}`);
      }
    }else{
      history.push("/login");
    }
  }

  return (
    <div
      className="home-tools"
      ref={(div) => (refs.current = div)}
      onClick={scrollDown}
    >
      <div className="select film">
        <div className="dropdown-toggle" onClick={() => toggleOpen("film")}>
          <p>{movie}</p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-film-dropdown", {
            open: open.film,
          })}
        >
          {renderListMovie()}
        </ul>
      </div>
      <div className="select cinema">
        <div className="dropdown-toggle" onClick={() => toggleOpen("cinema")}>
          <p>{theater.tenCumRap}</p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-cinema-dropdown", {
            open: open.cinema,
          })}
        >
          {propMovie.movieInfoSystem.heThongRapChieu.length !== 0 ? (
            renderListTheater()
          ) : (
            <li>Vui lòng chọn phim</li>
          )}
        </ul>
      </div>
      <div className="select dayView">
        <div className="dropdown-toggle" onClick={() => toggleOpen("date")}>
          <p>{dateTime}</p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul className={classNames("select-dropdown-date", { open: open.date })}>
          {movie !== "Phim" ? (
            theater.tenCumRap !== "Rạp" ? (
              renderListDate()
            ) : (
              <li>Chọn Rạp</li>
            )
          ) : (
            <li>Chọn Phim và Rạp</li>
          )}
        </ul>
      </div>
      <div className="select showings">
        <div className="dropdown-toggle" onClick={() => toggleOpen("showings")}>
          <p>
            {!suatChieu.ngayChieuGioChieu
              ? "Suất chiếu"
              : covertTimeFormat(suatChieu.ngayChieuGioChieu)}
          </p>
          <IconDropDown className="icon-dropdown" />
        </div>
        <ul
          className={classNames("select-dropdown-showing", {
            open: open.showings,
          })}
        >
          {movie !== "Phim" ? (
            theater.tenCumRap !== "Rạp" ? (
              dateTime !== "Ngày Xem" ? (
                renderListLichChieu()
              ) : (
                <li>Chọn Ngày Xem </li>
              )
            ) : (
              <li>Chọn Rạp và Ngày Xem </li>
            )
          ) : (
            <li>Chọn Phim và Rạp và Ngày Xem </li>
          )}
        </ul>
      </div>
      <div className="select button">
        <Button
          variant="contained"
          color="secondary"
          onClick={()=>handleBooking(suatChieu.maLichChieu)}
        >
          Mua vé ngay
        </Button>
      </div>
    </div>
  );
};
export default HomeTools;
