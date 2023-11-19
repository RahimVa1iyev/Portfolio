import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development"
            subTitle="Code Academy"
            result="Success"
            des="I received a 7-month Full-Stack Programming course at Code Academy with an Honors degree with an average of 93.5"
            href ="https://github.com/RahimVa1iyev/Portfolio/blob/master/src/assets/images/diplom-software.jpg"
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Achievement;
