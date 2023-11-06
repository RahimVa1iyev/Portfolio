import React, { useContext } from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { ModalContext } from "../../context/ModalContext";

import ModalInfo from "../ModalInfo";


const Features = () => {
  const { isVisible, setIsVisible } = useContext(ModalContext)

  return (
    <>
      {
        isVisible ? <ModalInfo /> :
          <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black"
          >
            <Title title="Features" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
              {featuresData.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </section>
      }
    </>

  );
};

export default Features;
