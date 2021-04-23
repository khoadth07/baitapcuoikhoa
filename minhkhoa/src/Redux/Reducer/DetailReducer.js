import { GET_FIRST_INFO, GET_INFO_FILM_BY_DATE, GET_INFO_SHOW_TIME_BY_ID_LOGO } from "../Type/DetailType";
import { GET_INFO_MOVIE_API } from "../Type/MovieType";
import format from "date-format";
import { GET_CENAME_API } from "../Type/CinameType";

const initialState = {
  infoFilm: null,
  listTime:[],
  listCinemaSys: [],
  cinemaSysSelected: null,
  showTimeSelected: [],
  minDate: null,
  timeSelected: null,
  ShowTimeBottom: [],
}

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_MOVIE_API: {
    }

    default:
      return state
  }
}
