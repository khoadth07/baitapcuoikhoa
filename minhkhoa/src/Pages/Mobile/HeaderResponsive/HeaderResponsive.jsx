import React, { Fragment } from "react";
import swal from "sweetalert";
import "./_headerResponsive.scss";
import { RiSlideshow3Fill } from "react-icons/ri";
import { MdTheaters } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { MdSettingsApplications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import { GET_USER_LOGOUT } from "../../../Redux/Type/UserType";
import { GET_NAME_MENU, RESET_COUNT } from "../../../Redux/Type/LoadingType";

const HeaderResponsive = (props) => {
  let { activeSidebar, setHideSidebar } = props;
  let history = useHistory();
  let dispatch = useDispatch();
  let currentURL = useRouteMatch();
  const HideSidebar = () => {
    setHideSidebar(false);
  };
  const handleLogout = () => {
    swal({
      text: "Do you want to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((ress) => {
      if (ress) {
        window.localStorage.removeItem("user");
        let user = "";
        dispatch({
          type: GET_USER_LOGOUT,
          payload: user,
        });
        history.push("/");
        setHideSidebar(false);
        swal("click to the button", "logout successfully!", "success");
      }
    });
  };
  const renderUsername = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <div className="wp-info-drop">
          <a href="true">
            <img
              src="../../img/login/userlogin.png"
              className="img-fluid"
              alt="anh dai dien"
            />
          </a>
          <span>{user.taiKhoan}</span>
        </div>
      );
    } else {
      return (
        <div className="wp-info-drop">
          <a href="true">
            <img
              src="https://tix.vn/app/assets/img/avatar.png"
              className="img-fluid"
              alt="anh dai dien"
            />
          </a>
          <NavLink
            to="/login"
            className="username ml-2 avatar__header usernameHome__responsive"
          >
            Đăng nhập
          </NavLink>
        </div>
      );
    }
  };
  const renderLogout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <li className="mb-5">
          <BiLogOut size="1.5em" />
          <span className="ml-3 hover__eff" onClick={handleLogout}>
           <b> Đăng xuất</b>
          </span>
        </li>
      );
    }
  };
  const renderInfo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <li className="mb-5">
          <AiOutlineUser size="1.5em" />
          <NavLink
            to="/userinfo"
            className="ml-3 hover__eff"
            onClick={handleResetCount}
          >
            Info
          </NavLink>
        </li>
      );
    }
  };

  const handleBackHome = (name) => {
    // console.log(currentURL);
    if (currentURL.url !== "/" || currentURL.url !== "/Home") {
      dispatch({
        type: RESET_COUNT,
        payload: 0,
      });
      dispatch({
        type: GET_NAME_MENU,
        payload: name,
      });
    }
    scroll.scrollToTop({ duration: 300, smooth: true });
  };
  const renderLink = (name, pathSection) => {
    // console.log(currentURL.url);
    if (currentURL.url === "/" || currentURL.url === "/Home") {
      return (
        <Link
          className="ml-3 hover__eff"
          activeClass="activeCat"
          to={pathSection}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={HideSidebar}
        >
          {name}
        </Link>
      );
    } else {
      return (
        <NavLink
          className="ml-3 hover__eff"
          to="/"
          onClick={() => handleBackHome(name)}
        >
          {name}
        </NavLink>
      );
    }
  };
  const handleResetCount = () => {
    dispatch({
      type: RESET_COUNT,
      payload: 0,
    });
  };

  return (
    <Fragment>
      <div
        className={
          activeSidebar ? `sidebarMenu active__sidebarHeader` : `sidebarMenu `
        }
        id="sidebarDrop"
      >
        <ul className="list-unstyled list-dropdown">
          <li className="mb-5 mt-3">
            {renderUsername()}
            <i
              className="fas fa-angle-right"
              id="icon-menudrop"
              onClick={HideSidebar}
            />
          </li>
          <li className="mb-5">
            <RiSlideshow3Fill size="1.5em" />
            {renderLink("Lịch chiếu", "section1")}
          </li>
          <li className="mb-5">
            <MdTheaters size="1.5em" />
            {renderLink("Cụm rạp", "section2")}
          </li>
          <li className="mb-5">
            <BiNews size="1.5em" />
            {renderLink("Tin tức", "section3")}
          </li>
          <li className="mb-5">
            <MdSettingsApplications size="1.5em" />
            {renderLink("Ứng dụng", "section4")}
          </li>
          {renderInfo()}
          {renderLogout()}
        </ul>
      </div>
      <div
        className={activeSidebar ? "overlay active__overlay" : "overlay"}
        id="overlayId"
        onClick={HideSidebar}
      />
    </Fragment>
  );
};

export default HeaderResponsive;
