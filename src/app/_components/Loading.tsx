/* eslint-disable @next/next/no-img-element */
import React from "react";

const Loading = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <img src="https://cdn.anotherblock.io/logo.png" alt="anotherblock logo" />
      <h1 className="text-white">Loading...</h1>
    </div>
  );
};

export default Loading;
