import React, { useState } from "react";
import DialogUI from "@material-ui/core/Dialog";
import "./_dialog.scss";
import ModalVideo from "react-modal-video";

const Dialog = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="play">
      <img src="./img/play-video.png" onClick={handleClickOpen} alt="play" />

      <DialogUI
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={open}
            videoId={props.trailer}
            onClose={handleClose}
          />
        </div>
      </DialogUI>
    </div>
  );
};

export default Dialog;
