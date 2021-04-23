import { GET_UPDATE_USER_API, GET_USER_INFO_API, GET_USER_LOGIN_API, GET_USER_LOGOUT, REG_USER_ERROR, RESET_INFO } from "../Type/UserType";

const initialState = {
    infoUser: null,
    messError: null,
    infoUserBooking: null,

    credentials: {},
    listHistory: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN_API: {
            // console.log(action.payload);
            return { ...state, infoUser: action.payload };
        }
        default:
            return state
    }
};

// export const regUserReducer = 
