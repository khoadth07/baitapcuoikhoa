import React from "react";
import "./_cinameItemsTimesConfig.scss";

import format from "date-format";
import { useDispatch } from "react-redux";
import { SET_REQUEST_PAGE_LOGIN } from "../../Redux/Type/UserType";
import { NavLink } from "react-router-dom";

const CinameItemsTimesConfig = (props) => {
  let { item } = props;
  //   console.log(item);
  const dispatch = useDispatch();
  let TimeEnd;
  if (item !== undefined) {
    TimeEnd = parseInt(format("hh", new Date(item.ngayChieuGioChieu))) + 2;
  }
  const handleChooseTime = () => {
    dispatch({
      type: SET_REQUEST_PAGE_LOGIN,
      payload:{request: 1}
    })
  };
  return (
    <button
      className="session__filmShow__item"
      onClick={handleChooseTime}
    >
      <NavLink to={`/booking/${item.maLichChieu}`} className="times__ticket" 
      // onClick={()=>{
      //   console.log(item.maLichChieu);
      // }}
      >
        {format("hh:mm", new Date(item?.ngayChieuGioChieu))}
      </NavLink>
      ~{TimeEnd + format(":mm", new Date(item?.ngayChieuGioChieu))}
    </button>
  );
};

export default CinameItemsTimesConfig;
