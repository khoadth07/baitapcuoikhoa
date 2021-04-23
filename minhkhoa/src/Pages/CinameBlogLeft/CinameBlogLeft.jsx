import React, { useEffect, useState } from "react";
import "./_cinameBlogLeft.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCinameListAPI } from "../../Redux/Action/CinameAction";
import CinameItemsLeft from "../CinameItemsLeft/CinameItemsLeft";

const CinameBlogLeft = (props) => {
  const listCinema = useSelector(state=>state.CinameReducer.cinameList);
  // console.log(listCinema);
  let [activeIdx, setActiveIdx] = useState(0);
  const dispatch = useDispatch();

  const getCinameAPI = () => {
    dispatch(getCinameListAPI());
  };

  const handleItemClick = (index) => {
    setActiveIdx(index);
  };


  useEffect(() => {
    getCinameAPI();
  }, []);

  const ShowListCinemaSys = () => {
    return listCinema.map((item, index) => {
      return (
        <CinameItemsLeft
          setStatus={props.setStatus}
          setIdLogo={props.setIdLogo}
          item={item}
          key={index}
          index={index}
          handleItemClick={handleItemClick}
          active={activeIdx === index}
        />
      );
    });
  };
  return <ul className="tab__menu">
    {ShowListCinemaSys()}
    </ul>;
};

export default CinameBlogLeft;
