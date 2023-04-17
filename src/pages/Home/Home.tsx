import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardRoute from "../../components/CardRoute/CardRoute";
import TitlePage from "../../components/TitlePage/TitlePage";
function Home() {
  const pages = [
    {
      title: "صفحه سوالات متداول",
      cap: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      btn: " برو به صفحه سوالات متداول",
      link: "freqquest",
    },
  ];
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <TitlePage title={"خانه"} />
        <CardRoute arr={pages} />
      </div>
    </>
  );
}

export default Home;
