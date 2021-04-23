import { BOOKING_SUCCESS, CHOOSE_SEAT, GET_BOOKING_TICKET_API, RESET_NOTIFY } from "../Type/BookingTicketType"

const initialState = {
    bookingInfo: null,
    listSeat: [],
    listSeatSelected: [],
    total: 0,
    activeNotification: 0,
    preActiveNotification: 0,

}

export const bookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKING_TICKET_API: {
            let newBookingInfo = { ...action.payload.thongTinPhim };
            let newListSeat = [...action.payload.danhSachGhe];
            return { ...state, bookingInfo: newBookingInfo, listSeat: newListSeat };
        }

        default:
            return state
    }
}
