import axios from "axios";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Type/LoadingType";
import { GET_UPDATE_USER_API, GET_USER_INFO_API, GET_USER_LOGIN_API, REG_USER_ERROR,RESET_INFO } from "../Type/UserType";


export const getUserLoginAPI = (data, history) => {
    // console.log(data, history)
    return async dispatch => {
        try {
            const res = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: data,
            })

            // console.log(res)
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/");
            dispatch({
                type: GET_USER_LOGIN_API,
                payload: res.data.taiKhoan,
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

