import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../assets/images/zyro-image-removebg-preview.png"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 flex items-center">
      <div className="w-full h-full flex flex-wrap  items-center gap-8">
        <img className="w-32 rounded-[100px] border-[2px] border-solid border-gray-500" src={logo} alt="logo" />
        <span className='text-[24px] font-medium text-gray-500' >Portfolio</span>
      </div>

      <div className="flex gap-4">
        <span className="bannerIcon">
          <a target='_blank' href="https://github.com/RahimVa1iyev">
            <FaGithub />
          </a>
        </span>
        <span className="bannerIcon">
          <a target='_blank' href="https://www.linkedin.com/in/rahim-valiyev/">
            <FaLinkedinIn />
          </a>
        </span>
      </div>

    </div>
  );
}

export default Footer