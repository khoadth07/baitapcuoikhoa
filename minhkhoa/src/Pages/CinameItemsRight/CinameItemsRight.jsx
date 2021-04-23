import React,{memo} from "react";
import CinameItemsTimes from "../CinameItemsTimes/CinameItemsTimes";
import "./_cinameItemsRight.scss";

const CinameItemsRight = (props) => {
  let { item } = props;
  // console.log(item);
  return (
    <div className="item__filmShow">
      <div className="wp__filmShow__info__item">
        <div
          className="wp__filmShow__info__top"
          data-toggle="collapse"
          href={"#collapseInfo" + item?.maPhim}
        >
          <a className="wp__thumb__filmShow">
            <img
              src={item?.hinhAnh}
              alt="tiec trang mau"
              className="img-fluid"
            />
          </a>
          <div className="wp__text__filmShow">
            <p>
              <span className="code__filmShow">C18</span>
              {item?.tenPhim}
            </p>
            <p>100 phút - TIX 9.3 - IMDb 0</p>
          </div>
        </div>
        <div
          className="wp__filmShow__info__bottom"//collapse
          id={"collapseInfo" + item?.maPhim}
        >
          <h4>2D Digital</h4>
          <CinameItemsTimes lstLichChieu={item?.lstLichChieuTheoPhim} />
        </div>
      </div>
    </div>
  );
};

export default memo(CinameItemsRight);
