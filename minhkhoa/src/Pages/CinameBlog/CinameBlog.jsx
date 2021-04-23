import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./_cinameBlog.scss";
import CinameBlogLeft from "../CinameBlogLeft/CinameBlogLeft";
import CinameBlogCenter from "../CinameBlogCenter/CinameBlogCenter";
import { getCinameItemsAPI, getInfoCinameItemsAPI } from "../../Redux/Action/CinameAction";
import CinameBlogRight from "../CinameBlogRight/CinameBlogRight";

const CinameBlog = (props) => {
  const [idlogo, setidlogo] = useState("BHDStar");
  const [activeRap, setactiveRap] = useState(false);
  const dispatch = useDispatch();

  const setIdLogo = (id) => {
    dispatch(getInfoCinameItemsAPI(id));
    setidlogo(id);
  };

  const setStatus = (status) => {
    setactiveRap(status);
  };

  useEffect(() => {
    dispatch(getCinameItemsAPI(idlogo));
    dispatch(getInfoCinameItemsAPI(idlogo));
  }, []);

  useEffect(() => {
    dispatch(getCinameItemsAPI(idlogo));
  }, [idlogo])

  return (
    <div className="wrapper__systemCinema--fixed">
      <div className="row">
        <div className="col-md-12">
          <div className="bg__back-news" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="wrapper__tab shadow-sm" id="section2">
            <h3>hệ thống rạp</h3>
            <CinameBlogLeft
              setIdLogo={setIdLogo}
              setStatus={setStatus}
            />
            <CinameBlogCenter
              activeRap={activeRap}
              setactiveRap={setactiveRap}
              setStatus={setStatus}
            />
            <CinameBlogRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinameBlog;
