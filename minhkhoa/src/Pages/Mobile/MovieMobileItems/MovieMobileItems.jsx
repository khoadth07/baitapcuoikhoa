import { Rating } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
import "./_movieMobileItems.scss"

const MovieMobileItems = (props) => {
    const {film} = props;
    // console.log(film);
    return (
        <Link to={`/detail/${film.maPhim}`}>
          <div className="MovieMobileItems">
            <img
              src={film.hinhAnh}
              alt="..."
            />
            <div className="point">
              <span>9.5</span>
              <Rating readOnly value={9.5 / 2} precision={0.5} className="start" />
            </div>
          </div>
        </Link>
      );
}

export default MovieMobileItems
