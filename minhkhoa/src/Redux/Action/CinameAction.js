import axios from "axios";
import { GET_CENAME_API, GET_CINAME_ITEMS_API, GET_CINAME_LIST_MOVIE, GET_INFO_CINAME_ITEMS } from "../Type/CinameType";

//lấy cụm rạp
export const getCinameListAPI = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      // console.log(res)
      dispatch({
        type: GET_CENAME_API,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

//lấy rạp
export const getCinameItemsAPI = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
        method: "GET",
      });

      // console.log(res);
      dispatch({
        type: GET_CINAME_ITEMS_API,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};


//Info rạp
export const getInfoCinameItemsAPI = (id) => {
  return async dispatch => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP10`,
        method: "GET",
      })
        dispatch({
          type: GET_INFO_CINAME_ITEMS,
          payload: res.data,
          id,
        })

      // console.log(res);

    } catch (error) {
      console.log(error.response.data);
    }
  }
};


export const getCinemaListMovie = (id, callback) => {
  return async dispatch => {
    try {

      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
        method: "GET",
      })

      // console.log(res.data);

      dispatch({
        type: GET_CINAME_LIST_MOVIE,
        payload: res.data,
      })

      callback();

    } catch (error) {
      console.log(error.response.data);
    }
  }
}
