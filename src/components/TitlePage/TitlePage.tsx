import React, { useState } from "react";

const TitlePage = ({ title }: { title: string }) => {
  return (
    <>
      <div className=" flex  justify-start w-full h-24 border-b-2 mb-6  items-center">
        <div className="sm:text-4xl text-xl font-black">{title}</div>
      </div>
    </>
  );
};

export default TitlePage;
