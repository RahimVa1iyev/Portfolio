import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="YellowGo"
            subTitle="Front-End Developer - (2023 - Present)"
            result="Bakı"
            des="Develop an effective and aesthetic interface for the convenience of users and the appearance of the application.
            Proficiency in basic web technologies (HTML, CSS, JavaScript) and use these technologies effectively.
            Knowing and effectively applying the most commonly used JavaScript frameworks and libraries (React, Next).
            Understand the principles of responsive design to ensure that the application looks correctly on different sizes and devices.
            Proficiency in using version control systems such as Git."
          />
            <ResumeCard
            title="HobyLoc"
            subTitle="Front-End Developer - (2023 - Present)"
            result="Bakı"
            des="Leading the development and customization of the front-end for the company's websites and web applications.Using HTML, CSS, and JavaScript,Redux to create websites and applications based on innovative and integrated design principles.
            Implementing code optimization on websites for high-speed and efficient performance.
            Integrating RESTful APIs to collaborate with the backend for overall progress.
            Participating in version control and code review processes to enhance coding efficiency"
          />
          <ResumeCard
            title="State Employment Agency / Jed Academy"
            subTitle="Front-End Developer Intern Program - (2023 - Present)"
            result="Bakı"
            des="Basic technologies for frontend web application development
            learning (HTML, CSS, JavaScript, React, Redux, Next.js, Node.js)
            Creating dynamic websites on Figma and
            development of user interfaces"
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;
