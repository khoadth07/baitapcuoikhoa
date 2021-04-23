import { GET_CENAME_API, GET_CINAME_ITEMS_API, GET_INFO_CINAME_ITEMS, GET_LIST_FILMS_ID_CINAME } from "../Type/CinameType"

const initialState = {
  cinameList: [],
  CinemaChooseId: null,
  CinemaChoose: null,
  InfoShowTimeEach: [],
  cinameItemsList: [],
  CinemaSelected: null,
  ListFilm: [],

}

export const CinameReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CENAME_API: {
      let newCinameList = [...action.payload]
      return { ...state, cinameList: newCinameList }
    }
    case GET_CINAME_ITEMS_API: {
      // console.log(action.payload);
      let newCinameItemsList = [...action.payload];
      let maCumRap = newCinameItemsList[0].maCumRap;
      //   console.log(maCumRap);
      return {
        ...state,
        cinameItemsList: newCinameItemsList,
        CinemaSelected: maCumRap,
      };
    }
    case GET_INFO_CINAME_ITEMS: {
      state.CinemaChooseId = action.id;
      // console.log(state.CinemaSelected);
      let film = [];
      if (action.payload[0].maHeThongRap === "BHDStar") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("bhd-star-cineplex-3-2");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "CGV") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("cgv-aeon-binh-tan");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "CineStar") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("cns-hai-ba-trung");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "Galaxy") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("glx-huynh-tan-phat");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "LotteCinima") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("lotte-cantavil");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "MegaGS") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("megags-cao-thang");
          film = [...dsCumRap[index].danhSachPhim];
        }
      }
      return {
        ...state,
        InfoShowTimeEach: action.payload,
        ListFilm: film,
      };
    }

    default:
      return state;
  }
}
