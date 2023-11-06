import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
        <ResumeCard
            title="Full-Stack Programming"
            subTitle="Code Academy (2022 - 2023)"
            result="93.5/100"
            front='Front-End: HTML, CSS, JavaScript, React, Redux, Context API'
            back="Backend: C#, ASP.NET Core Web API / MVC, MS Sql "
            des="During my Full-Stack Programming training at Code Academy, I gained practical experience in both front-end and back-end technologies. I honed my skills in creating creative and user-centric interfaces using HTML, CSS, and JavaScript in the front-end domain.
            Additionally, in the back-end domain, I learned C# programming language and worked with ASP.Net Core MVC and Web API technologies. Developing proficiency in these areas allowed me to independently and effectively create projects"
          />
          <ResumeCard
            title="Process Automation Engineering"
            subTitle="Azerbaijan State Oil and Industry University. (2016 - 2020)"
            result="82/100"
            des="I gained practical experience in university laboratories for process automation systems. Thanks to my proficiency in working with innovative automation technologies and PLC systems, I have developed the skill to independently and effectively design projects."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education