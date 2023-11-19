import React from 'react'
import { bannerImg } from "../../assets/index";
import Lottie from "lottie-react";
import animationData from "../../assets/images/animation.json"


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default RightBanner