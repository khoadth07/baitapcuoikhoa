import React, { useState } from "react";
import "./_movieItems.scss";
// import { withRouter } from "react-router-dom";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import dataImg from "../../dataImg";
import Play from "@material-ui/icons/PlayArrow";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const MovieItems = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="film-item_container">
      <div className="film-item mb-3">
        {props.film && (
          <img
            src={props.film.hinhAnh}
            alt=""
            onError={(e) => {
              if (e.target.src !== dataImg[`${props.film.biDanh}-doc`]) {
                e.target.src = dataImg[`${props.film.biDanh}-doc`];
              }
            }}
            onLoad={() => {
              let delay = _.debounce(() => setIsLoading(false), 1000);
              delay();
            }}
          />
        )}
        <div
          className="play-trailer"
        >
          <div className="btn-play" onClick={handleOpen}>
            <Play className="icon-play" />
          </div>
        </div>
        {
          <div className="point">
            {isLoading ? (
              <div className="loading">
                <Skeleton />
              </div>
            ) : (
              <>
                <p>9.6</p>
                <Rating readOnly value={8.5} precision={0.5} />
              </>
            )}
          </div>
        }
        {isLoading && (
          <div className="loading">
            <Skeleton width="100%" height="100%" />
          </div>
        )}
      </div>
      <div className="film-item_detail">
        <p className="filmName text-left">
          {isLoading ? <Skeleton /> : props.film.tenPhim}
        </p>
        <p className="filmDate text-left">
          {isLoading ? (
            <Skeleton />
          ) : (
            new Date(props.film.ngayKhoiChieu).toLocaleDateString()
          )}
        </p>
        <div className="btn_Buy">
          {isLoading ? (
            <div className="btn loading">
              <Skeleton width="100%" height="41px" />
            </div>
          ) : (
            <NavLink className="btn w-100" to={`/detail/${props.film.maPhim}`}>
            MUA VÉ
          </NavLink>
          )}
        </div>
      </div>
      <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          className="dialog-trailer"
        >
          <div className="wrap-iframe">
            {props.film && (
              <iframe
                width="100%"
                height="100%"
                title={props.film.maPhim}
                src={`${props.film.trailer}?autoplay=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            )}
          </div>
          <img
            src="./img/close.png"
            alt="hinh close"
            className="close-trailer"
            onClick={handleClose}
          />
        </Dialog>
    </div>
  );
};

export default MovieItems;
