import { SET_REQUEST_PAGE, SET_REQUEST_PAGE_LOGIN, SET_TYPE_PAGE } from "../Type/UserType";

const initialState = {
    isPage: {

        role: 1,
    },
    request: 0,
    requestPageUser: 0,
    requestPageLogin: {
        request: 0,
        maLichChieu: 0,
    },
}

export const setPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_PAGE: {
        }

        default:
            return state
    }
}
