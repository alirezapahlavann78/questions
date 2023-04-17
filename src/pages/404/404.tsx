import React from "react";
import CardRoute from "../../components/CardRoute/CardRoute";

function Page404() {
  const card = [
    {
      title: " ایا گم شده اید",
      cap: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      btn: "برو به خانه",
      link: "/",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col  items-center justify-center w-full">
        <p className="text-5xl  md:text-7xl lg:text-9xl py-4">404 </p>
        <p className="text-3xl  md:text-4xl lg:text-6xl">پیدا نشد!</p>
      </div>
      <div className="flex justify-center flex-wrap">
          <CardRoute arr={card} />
      </div>
    </div>
  );
}

export default Page404;
