import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
// import { getUserLoginAPI } from "../../../Redux/Action/UserAction";
import "./_login.scss";
import swal from "sweetalert";

const Login = (props) => {
  let history = useHistory();
  // let dispatch = useDispatch();
  let [userLogin, setUserLogin] = useState({
    values: { taiKhoan: "", matKhau: "" },
    errors: { taiKhoan: "", matKhau: "" },
  });
  const handleChange = (e) => {
    let tagInput = e.target;
    // console.log(tagInput);
    let { name, value } = tagInput;
    // console.log(name, value);
    let errorMessage = "";
    if (value === "") {
      errorMessage = "*" + name + " is not empty";
    }
    let values = { ...userLogin.values, [name]: value };
    let errors = { ...userLogin.errors, [name]: errorMessage };
    setUserLogin({
      ...userLogin,
      values: values,
      errors: errors,
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // dispatch(getUserLoginAPI(userLogin.values, history));
    if (
      userLogin.values.taiKhoan === "loc" &&
      userLogin.values.matKhau === "loc123"
    ) {
      swal({
        title: "Login success",
        icon: "success",
        button: true,
      });
      history.push("/");
    }else{
      swal({
        title: "Login fail",
        icon: "warning",
        button: true,
      });
    }
  };

  const handleClose = () => {
    history.push("/");
  };

  return (
    <div className="wrapper__login">
      <div className="close__wrapper" onClick={handleClose}>
        <img src="./img/xController.png" alt="close" />
      </div>
      <form action="" className="form">
        <img
          className="mb-5"
          src="./img/login/logoLogin.png"
          alt="logo"
          style={{ width: "260px", marginTop: 10 }}
        />
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="form__group">
              <input
                type="text"
                className="form__field"
                placeholder="taiKhoan"
                name="taiKhoan"
                value={userLogin.values.taiKhoan}
                id="taiKhoan"
                required
                onChange={handleChange}
              />
              <label htmlFor="taiKhoan" className="form__label">
                username
              </label>
              <span className="errorMes">{userLogin.errors.taiKhoan}</span>
            </div>
          </div>

          <div className="col-md-12 my-3">
            <div className="form__group">
              <input
                type="password"
                className="form__field"
                placeholder="matKhau"
                name="matKhau"
                value={userLogin.values.matKhau}
                id="matKhau"
                required
                onChange={handleChange}
              />
              <label htmlFor="matKhau" className="form__label">
                password
              </label>
              <span className="errorMes">{userLogin.errors.matKhau}</span>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger w-100 mt-3"
          onClick={handleSubmitLogin}
        >
          Đăng nhập
        </button>
        <NavLink className="link__Reg" to="/">
          Đăng ký
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
