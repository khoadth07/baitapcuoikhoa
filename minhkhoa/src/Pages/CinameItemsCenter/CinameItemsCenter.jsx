import React from "react";
import { useDispatch } from "react-redux";
import { GET_LIST_FILMS_ID_CINAME } from "../../Redux/Type/CinameType";
import "./_cinameItemsCenter.scss";

const changeColorTex=(logo) =>{
    if (logo === "BHD Star Cineplex ") {
      return "greenColorTextBrand";
    } else if (logo === "CGV ") {
      return "purpleColorTextBrand";
    } else if (logo === "CNS ") {
      return "pinkColorTextBrand";
    } else if (logo === "GLX ") {
      return "grayColorTextBrand";
    } else if (logo === "Lotte ") {
      return "redColorTextBrand";
    } else {
      return "orangeColorTextBrand";
    }
  }

const CinameItemsCenter = (props) => {
  let { item, active, setActiveBrand, idx, setStatus, propsThumb } = props;
  const dispatch = useDispatch();
  const handleClickBrand = () => {
    setStatus(false);
    setActiveBrand(idx);
    dispatch({
      type:GET_LIST_FILMS_ID_CINAME,
      payload: item.maCumRap,
    });
  };
  let arrItem = item.tenCumRap.split("-");
  return (
    <div
      className={
        active ? "tab__content__item active__opacity" : "tab__content__item"
      }
      onClick={handleClickBrand}
    >
      <div className="wp__info__tab__content clearfix">
        <a className="tab__content__item__link">
          <img src={propsThumb} className="img-fluid" alt="anh" />
        </a>
        <div className="wp__info__tab__cinema">
          <h4 className="tab__h4__title">
            <span className={changeColorTex(arrItem[0])}>{arrItem[0]}</span> -
            <span className="tab__h4__title__nameCinema">{arrItem[1]}</span>
          </h4>
          <span className="tab__cinema__detail">{item.diaChi}</span>
          <a className="tab__link__detail">[chi tiết]</a>
        </div>
      </div>
    </div>
  );
};

export default CinameItemsCenter;
