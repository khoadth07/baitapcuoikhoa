import React from "react";
import "./_cinameBlogRight.scss";
import format from "date-format";
import { useSelector } from "react-redux";
import CinameItemsRight from "../CinameItemsRight/CinameItemsRight";

const getCurrentDay = () => {
  let dateCurrent = format("dd/MM/yyyy/hh:mm:ss", new Date());
  return dateCurrent;
};
const generateArrDate = (d) => {
  if (d !== undefined) {
    let newList = d.split("/");
    return newList;
  }
};

const CinameBlogRight = (props) => {
  let listMovie = useSelector((state) => {
    return state.CinameReducer.ListFilm;
  });
  //   console.log(listMovie);

  let inFoShowTimeOf = useSelector((state) => {
    return state.CinameReducer.InfoShowTimeEach;
  });
  //   console.log(inFoShowTimeOf);

  let CinemaSelected = useSelector((state) => {
    return state.CinameReducer.CinemaSelected;
  });
  //   console.log(CinemaSelected);

  const ShowListFilmByLogo = () => {
    if (inFoShowTimeOf[0] !== undefined) {
      let listMaCumRap = inFoShowTimeOf[0].lstCumRap.map((i, idx) => {
        return i.maCumRap;
      });
      //   console.log(listMaCumRap);
      let vitri = listMaCumRap.indexOf(CinemaSelected);
      //   console.log(vitri);
      if (vitri === -1) {
        //   console.log("object");
        return (
          <p className="error_Home text-center">
            Hiện tại rạp chưa có lịch chiếu!
          </p>
        );
      } else {
        // console.log(listMovie);
        if (listMovie.length > 0) {
          let date = new Date();
          //   console.log(date);
          let arrMovie = [];
          for (let i = 0; i < listMovie.length; i++) {
              // console.log("dấd",i);
            let listFilmRealTime = listMovie[i].lstLichChieuTheoPhim.filter(
              (item) => {
                  // console.log(item);
                return (
                  format(
                    "dd/MM/yyyy",
                    new Date(item.ngayChieuGioChieu)
                  ).toString() ===
                    format("dd/MM/yyyy", new Date(date)).toString() &&
                  format(
                    "hh:mm:ss",
                    new Date(item.ngayChieuGioChieu)
                  ).toString() >= generateArrDate(getCurrentDay())[3].toString()
                );
              }
            );

            // console.log("aaaaaa", listFilmRealTime);

            if (listFilmRealTime.length === 0) {
              arrMovie.push(listMovie[i]);
            }
            // arrMovie.push(listMovie[i]);
          }

          //   console.log(arrMovie);
          if (arrMovie.length > 0) {
            // console.log(arrMovie);
            return arrMovie?.map((item, index) => {
              // console.log(item);
              return <CinameItemsRight item={item} key={index} />;
            });
          } else {
            return (
              <p className="error_Home text-center">
                Hiện tại rạp chưa có lịch chiếu!
              </p>
            );
          }
        } else {
          return (
            <p className="error_Home text-center">
              Hiện tại rạp chưa có lịch chiếu!
            </p>
          );
        }
      }
    } else {
      return (
        <p className="error_Home text-center">
          Hiện tại rạp chưa có lịch chiếu!
        </p>
      );
    }
  };

  return <div className="tab__content__filmShow">{ShowListFilmByLogo()}</div>;
};

export default CinameBlogRight;
