import React, { useEffect } from "react";
import Header from "../../Pages/Header/Header";
import AppDowload from "../../Pages/AppDowload/AppDowload";
import Carousel from "../../Pages/Carousel/Carousel";
import CinameBlog from "../../Pages/CinameBlog/CinameBlog";
import Footer from "../../Pages/Footer/Footer";
import HomeTools from "../../Pages/HomeTools/HomeTools";
import MovieList from "../../Pages/MovieList/MovieList";
import News from "../../Pages/News/News";
import { useSelector } from "react-redux";
import MovieMobile from "../../Pages/Mobile/MovieMobile/MovieMobile";

const Home = (props) => {
  const isLoading = useSelector((state) => state.LoadingReducer.isLoading);
  let nameMenu = useSelector((state) => {
    return state.LoadingReducer.nameMenu;
  });

 useEffect(() => {
   window.scroll(0,0);
 }, [])

  useEffect(() => {
    // console.log(nameMenu);
    if (isLoading === false && window.innerWidth > 414.4) {
      if (nameMenu === "Lịch chiếu") {
        window.scrollTo({ top: 900, behavior: "smooth" });
      } else if (nameMenu === "Cụm rạp") {
        window.scrollTo({ top: 1340, behavior: "smooth" });
      } else if (nameMenu === "Tin tức") {
        window.scrollTo({ top: 1500, behavior: "smooth" });
      } else if (nameMenu === "Ứng dụng") {
        window.scrollTo({ top: 2000, behavior: "smooth" });
      }
    } else if (isLoading === false && window.innerWidth <= 414.4) {
      if (nameMenu === "Lịch chiếu") {
        window.scrollTo({ top: 180, behavior: "smooth" });
      } else if (nameMenu === "Cụm rạp") {
        window.scrollTo({ top: 840, behavior: "smooth" });
      }else if (nameMenu === "Tin tức") {
        window.scrollTo({ top: 1000, behavior: "smooth" });
      } else if (nameMenu === "Ứng dụng") {
        window.scrollTo({ top: 1460, behavior: "smooth" });
      }
    }
  }, []);


  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <HomeTools></HomeTools>
      <MovieList></MovieList>
      <MovieMobile></MovieMobile>
      <CinameBlog></CinameBlog>
      <News></News>
      <AppDowload></AppDowload>
      <Footer></Footer>
    </>
  );
};

export default Home;
