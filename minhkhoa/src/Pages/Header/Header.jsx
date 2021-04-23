import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { GET_NAME_MENU, RESET_COUNT } from "../../Redux/Type/LoadingType";
import swal from "sweetalert";
import "./_header.scss";
import { GET_USER_LOGOUT } from "../../Redux/Type/UserType";
import HeaderResponsive from "../Mobile/HeaderResponsive/HeaderResponsive";

const Header = () => {
  let currentURL = useRouteMatch();
  // console.log(currentURL);
  let history = useHistory();
  let dispatch = useDispatch();
  const handleResetCount = () => {
    dispatch({
      type: RESET_COUNT,
      payload: 0,
    });
  };
  let [showSidebar, setShowSidebar] = useState(false);

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

  const handleInfo = () => {
    history.push("/userinfo");
  };

  const renderUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <>
          <NavLink
            to="/"
            className="menu titleDisplay"
            onClick={handleResetCount}
          >
            <img
              className="btnLogin"
              src="../../img/login/userlogin.png"
              alt="img"
              style={{ width: 45 }}
            />
            <p className="white" style={{ display: "inline-block" }}>
              {user.hoTen}
            </p>
          </NavLink>
          <div className="info-user__logout">
            <p onClick={handleInfo}>Thông tin cá nhân</p>
            <p onClick={handleLogout}>Đăng xuất</p>
          </div>
        </>
      );
    } else {
      return (
        <NavLink to="/login" className="menu titleDisplay ng-scope">
          <img className="btnLogin" src="../../img/avatar.png" alt="img" />
          <p className="white" style={{ display: "inline-block" }}>
            Đăng Nhập
          </p>
        </NavLink>
      );
    }
  };

  const handleBackHome = (name) => {
    // console.log(name);
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
      // console.log(name);
      return (
        <Link
          className="menu titleDisplay homeMovies white"
          to={pathSection}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {name}
        </Link>
      );
    } else {
      // console.log(name);
      return (
        <NavLink
          to="/"
          className="menu titleDisplay homeMovies white"
          data-scroll="homeMovies"
          onAbort
          onClick={() => handleBackHome(name)}
        >
          {name}
        </NavLink>
      );
    }
  };
  const showMenuResponsive = () => {
    setShowSidebar(true);
  };
  const setHideSidebar = (data) => {
    setShowSidebar(data);
  };
  const animationSidebar = (showSidebar) => {
    return showSidebar;
  };
  useEffect(() => {
    if (showSidebar) {
      animationSidebar(showSidebar);
    }
  });

  return (
    <div id="navbarHeader">
      <NavLink
        exact={true}
        to="/"
        className="left"
        onClick={() => handleBackHome("")}
      >
        <img className="webLogo" src="../../img/web-logo.png" alt="logo" />
      </NavLink>
      <div className="center" id="headMenu">
        {renderLink("Lịch chiếu", "section1")}
        {renderLink("Cụm rạp", "section2")}
        {renderLink("Tin tức", "section3")}
        {renderLink("Ứng dụng", "section4")}
      </div>
      <div className="right">
        <div id="account" className="imgCircle">
          {renderUser()}
        </div>
        <div
          className="selectLocation dropdown open"
          id="selectLocation_dropdown"
        >
          <img
            className="place-header white"
            alt="img"
            src="../../img/location-header.png"
          />
          <div
            className="dropdown-toggle selectMenu white"
            data-toggle="dropdown"
            aria-expanded="true"
          >
            Hồ Chí Minh
          </div>
          <ul className="dropdown-menu selectScroll">
            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hồ Chí Minh"
                data-locid={0}
                className="ng-binding"
              >
                Hồ Chí Minh
              </NavLink>
            </li>
            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hà Nội"
                data-locid={1}
                className="ng-binding"
              >
                Hà Nội
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Đà Nẵng"
                data-locid={2}
                className="ng-binding"
              >
                Đà Nẵng
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hải Phòng"
                data-locid={3}
                className="ng-binding"
              >
                Hải Phòng
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Biên Hoà"
                data-locid={4}
                className="ng-binding"
              >
                Biên Hoà
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Nha Trang"
                data-locid={5}
                className="ng-binding"
              >
                Nha Trang
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bình Dương"
                data-locid={6}
                className="ng-binding"
              >
                Bình Dương
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Phan Thiết"
                data-locid={7}
                className="ng-binding"
              >
                Phan Thiết
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hạ Long"
                data-locid={8}
                className="ng-binding"
              >
                Hạ Long
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Cần Thơ"
                data-locid={9}
                className="ng-binding"
              >
                Cần Thơ
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Vũng Tàu"
                data-locid={10}
                className="ng-binding"
              >
                Vũng Tàu
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Quy Nhơn"
                data-locid={11}
                className="ng-binding"
              >
                Quy Nhơn
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Huế"
                data-locid={12}
                className="ng-binding"
              >
                Huế
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Long Xuyên"
                data-locid={13}
                className="ng-binding"
              >
                Long Xuyên
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Thái Nguyên"
                data-locid={14}
                className="ng-binding"
              >
                Thái Nguyên
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Buôn Ma Thuột"
                data-locid={15}
                className="ng-binding"
              >
                Buôn Ma Thuột
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bắc Giang"
                data-locid={16}
                className="ng-binding"
              >
                Bắc Giang
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bến Tre"
                data-locid={17}
                className="ng-binding"
              >
                Bến Tre
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Việt Trì"
                data-locid={18}
                className="ng-binding"
              >
                Việt Trì
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Ninh Bình"
                data-locid={19}
                className="ng-binding"
              >
                Ninh Bình
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Thái Bình"
                data-locid={20}
                className="ng-binding"
              >
                Thái Bình
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Vinh"
                data-locid={21}
                className="ng-binding"
              >
                Vinh
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bảo Lộc"
                data-locid={22}
                className="ng-binding"
              >
                Bảo Lộc
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Đà Lạt"
                data-locid={23}
                className="ng-binding"
              >
                Đà Lạt
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Trà Vinh"
                data-locid={24}
                className="ng-binding"
              >
                Trà Vinh
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Yên Bái"
                data-locid={25}
                className="ng-binding"
              >
                Yên Bái
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Kiên Giang"
                data-locid={26}
                className="ng-binding"
              >
                Kiên Giang
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Vĩnh Long"
                data-locid={27}
                className="ng-binding"
              >
                Vĩnh Long
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Cà Mau"
                data-locid={28}
                className="ng-binding"
              >
                Cà Mau
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hậu Giang"
                data-locid={29}
                className="ng-binding"
              >
                Hậu Giang
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Tây Ninh"
                data-locid={30}
                className="ng-binding"
              >
                Tây Ninh
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Tuyên Quang"
                data-locid={31}
                className="ng-binding"
              >
                Tuyên Quang
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Thanh Hóa"
                data-locid={32}
                className="ng-binding"
              >
                Thanh Hóa
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Nam Định"
                data-locid={33}
                className="ng-binding"
              >
                Nam Định
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hải Dương"
                data-locid={34}
                className="ng-binding"
              >
                Hải Dương
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Gia Lai"
                data-locid={35}
                className="ng-binding"
              >
                Gia Lai
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hà Tĩnh"
                data-locid={36}
                className="ng-binding"
              >
                Hà Tĩnh
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Phú Yên"
                data-locid={37}
                className="ng-binding"
              >
                Phú Yên
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bạc Liêu"
                data-locid={38}
                className="ng-binding"
              >
                Bạc Liêu
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Long An"
                data-locid={39}
                className="ng-binding"
              >
                Long An
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Đồng Hới"
                data-locid={40}
                className="ng-binding"
              >
                Đồng Hới
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hà Nam"
                data-locid={41}
                className="ng-binding"
              >
                Hà Nam
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Bắc Ninh"
                data-locid={42}
                className="ng-binding"
              >
                Bắc Ninh
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Quảng Trị"
                data-locid={43}
                className="ng-binding"
              >
                Quảng Trị
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Kon Tum"
                data-locid={44}
                className="ng-binding"
              >
                Kon Tum
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Sóc Trăng"
                data-locid={45}
                className="ng-binding"
              >
                Sóc Trăng
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Sơn La"
                data-locid={46}
                className="ng-binding"
              >
                Sơn La
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Lạng Sơn"
                data-locid={47}
                className="ng-binding"
              >
                Lạng Sơn
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Quảng Ngãi"
                data-locid={48}
                className="ng-binding"
              >
                Quảng Ngãi
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Mỹ Tho"
                data-locid={49}
                className="ng-binding"
              >
                Mỹ Tho
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Đồng Tháp"
                data-locid={50}
                className="ng-binding"
              >
                Đồng Tháp
              </NavLink>
            </li>

            <li className="ng-scope">
              <NavLink
                to="/"
                data-name="Hưng Yên"
                data-locid={51}
                className="ng-binding"
              >
                Hưng Yên
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__menu_dropdown " onClick={showMenuResponsive}>
        <i className="fas fa-bars " />
      </div>
      <HeaderResponsive
        setHideSidebar={setHideSidebar}
        activeSidebar={
          animationSidebar(showSidebar) ? animationSidebar(showSidebar) : ""
        }
      />
    </div>
  );
};

export default Header;
