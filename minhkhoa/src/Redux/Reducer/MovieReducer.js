import { GET_CINAME_LIST_MOVIE } from "../Type/CinameType";
import { GET_FILMS_LIST} from "../Type/MovieType";

const initialState = {
    listMovie: [],
    listMoviePhanTrang: [],
    ModalVideoMovie: {
        isShow: false,
        value: {},
        role: 0,//1 carousel //2 movieItem //3 moviedetailContent
    },
    movieInfoSystem: {
        heThongRapChieu: [],
    },
    listLichChieuTheoFilmTheoMaHeThongRap: [
        {
            maHeThongRap: '',
            maCumRap: '',
            maLichChieu: '',
            ngayChieuGioChieu: '',
        }
    ],
    listCumRapTheoPhimVaHeThongRap: [

    ],
    PhongVeItemByMaLichChieu: {
        thongTinPhim: {},
        danhSachGhe: [],
    },
    listGhePhanMang: [],
    listGheVip: [],
    listGheThuong: [],
    listGheDaDat: [],
    amount: {},
    canBook: false,
}

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FILMS_LIST:{
            state.listMovie = action.payload;
            let list = action.payload; // list tổng từ API
            // console.log(list);  
            let listMovieDiv = []; // list sau khi phân trang
            let todosPerPage = 8; // số phần tử trong trang 
            let solan = (list.length % todosPerPage) !== 0 ? ((list.length / todosPerPage) + 1) : (list.length / todosPerPage); //số lần tạo trang trong 
            for (let i = 1; i <= solan; i++) {
                const indexOfLastTodo = i * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                const listItem = list.slice(indexOfFirstTodo, indexOfLastTodo);
                listMovieDiv = [...listMovieDiv, listItem];
            }
            state.listMoviePhanTrang = listMovieDiv;
            return { ...state }
        }

        case GET_CINAME_LIST_MOVIE: {
            // console.log(action.payload);
            state.movieInfoSystem = action.payload;
            let heThongRapChieuTam = action.payload.heThongRapChieu.map((item) => {
                return { ...item, isActived: false }
            });
            state.movieInfoSystem.heThongRapChieu = heThongRapChieuTam;
            return { ...state };
        }

        default:
            return state
    }
}
