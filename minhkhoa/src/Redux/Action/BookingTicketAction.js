import axios from "axios";
import { BOOKING_SUCCESS, GET_BOOKING_TICKET_API } from "../Type/BookingTicketType";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Type/LoadingType";
import swal from "sweetalert";

export const getBookingTicketAPI = (maLichChieu) => {
    // console.log(maLichChieu)
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        try {
            const res = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: "GET",
            })

            if (res.status === 200) {
                dispatch({
                    type: GET_BOOKING_TICKET_API,
                    payload: res.data,
                })

                dispatch({
                    type: HIDE_LOADING,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}