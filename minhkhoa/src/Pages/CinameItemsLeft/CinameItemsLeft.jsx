import React from "react";
import "./_cinameItemsLeft.scss";

const CinameItemsLeft = (props) => {
  let { item, active, handleItemClick, index, setIdLogo, setStatus } = props;
  const handleClickCinema = () => {
    handleItemClick(index);
    setIdLogo(item.maHeThongRap);
    setStatus(true);
  };
  return (
    <li
      className={active ? "tab__item active__opacity" : "tab__item"}
      onClick={handleClickCinema}
    >
      <a className="tab__item__SysLink">
        <img src={item.logo} className="img-fluid" alt="anh" />
      </a>
    </li>
  );
};

export default CinameItemsLeft;
