import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import { CinameReducer } from "./Reducer/CinameReducer";
import { MovieReducer } from "./Reducer/MovieReducer";
import { LoadingReducer } from "./Reducer/LoadingReducer";
import { userReducer } from "./Reducer/UserReducer";
import { setPageReducer } from "./Reducer/SetPageReducer";
import { bookingTicketReducer } from "./Reducer/BookingTicketReducer";
import { detailReducer } from "./Reducer/DetailReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    detailReducer,
    setPageReducer,
    userReducer,
    bookingTicketReducer,
    LoadingReducer,
    MovieReducer,
    CinameReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));