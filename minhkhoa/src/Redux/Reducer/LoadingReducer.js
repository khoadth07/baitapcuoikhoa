import { DISPLAY_LOADING, GET_NAME_MENU, HIDE_LOADING, RESET_COUNT } from "../Type/LoadingType";

const initialState = {
    isLoading: false,
    nameMenu: null,
    count: 0,
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {

        case DISPLAY_LOADING: {
            state.isLoading = true;
            return { ...state }
        }

        case HIDE_LOADING: {
            state.isLoading = false;
            return { ...state };
        }

        case RESET_COUNT: {
            return { ...state, count: action.payload };
        }
        case GET_NAME_MENU: {
            // console.log(action.payload);
            return { ...state, nameMenu: action.payload };
        }

        default:
            return state
    }
}