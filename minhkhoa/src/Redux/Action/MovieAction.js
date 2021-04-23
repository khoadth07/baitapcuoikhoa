import axios from "axios";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Type/LoadingType";
import { GET_FILMS_LIST, GET_INFO_MOVIE_API } from "../Type/MovieType";

export const getFilmsListAPI = () => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING,
        })
        try {
            const res = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
                method: "GET",
            });

            // console.log(res.data);

            dispatch({
                type: GET_FILMS_LIST,
                payload: res.data,
            });

            dispatch({
                type: HIDE_LOADING,
            })

        } catch (error) {
            console.log(error.response.data);
        }
    }
}