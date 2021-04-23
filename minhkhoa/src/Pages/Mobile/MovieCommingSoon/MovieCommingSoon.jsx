import React from 'react';
import "./_movieCommingSoon.scss";

const MovieCommingSoon = (props) => {
    const {film} = props;
    // console.log(film);
    return (
        <div className="film coming-soon">
          <img
            src={film.hinhAnh}
            alt="..."
          />
          <span>12/11</span>
        </div>
      );
}

export default MovieCommingSoon
