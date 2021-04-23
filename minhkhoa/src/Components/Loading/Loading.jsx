import React from "react";
import "./_loading.scss";

import { useSelector } from "react-redux";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  // console.log(isLoading)

  if (isLoading) {
    return (
      <div className="loadingPage">
        <img src="../../img/loading/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return "";
  }
};

export default Loading;
