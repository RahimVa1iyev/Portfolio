import React from 'react'
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiRedux } from "react-icons/si";
import { DiJavascript1 } from 'react-icons/di'
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a target='_blank' href="https://github.com/RahimVa1iyev">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/rahim-valiyev/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiRedux />
          </span>
          <span className="bannerIcon">
            <DiJavascript1 />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media