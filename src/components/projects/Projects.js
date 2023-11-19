import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import pr1 from '../../assets/images/responsive-project.png'
import pr2 from '../../assets/images/Ekran şəkli 2023-11-06 152223.png'
import pr3 from '../../assets/images/juan.png'
import pr from '../../assets/images/projects/project.png'
import pr4 from '../../assets/images/projects/rent.png'
import pr5 from '../../assets/images/projects/portfolio.png'
import ProjectsCard from './ProjectsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <Swiper
        breakpoints={
          {
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.60': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 3,
              spaceBetween: 19,
            },
          }
        }
        pagination={{
          dynamicBullets: true,
          clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}

      >
        <SwiperSlide>
          <ProjectsCard
            title="E-commerce Website"
            des="It is an e-commerce site created for the sale of watches together with the Admin Panel part"
            front='Front-End: HTML, CSS, SASS, Bootstrap, JavaScript, React, Redux.'
            back='Backend : C#, ASP.Net Core Wep API , MS Sql'
            gitLink='https://github.com/RahimVa1iyev/api-ecommerce'
            gitLink2 ='https://github.com/RahimVa1iyev/react-ecommerce'
            vercel='https://react-ecommerce-beryl.vercel.app/'
           src={pr}
          /></SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="Rent a Car Website"
            des="It is a startup project created to place all Rent a Car websites on one platform. HTML, CSS, JavaScript, React, Redux are used in the front-end part. Java and its framework should be used in the backend part"
            src={pr4}
            vercel='https://yellowgo.co'
            vercel2='https://admin.yellowgo.co'

          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="E-commerce Website"
            des='This is an e-commerce website I created for selling shoes'
            front='Front-End: HTML, CSS, SASS, Bootstrap, JavaScript.'
            back='Backend : C#, ASP.Net Core MVC'
            gitLink ='https://github.com/RahimVa1iyev/mvc-ecommerce'
            vercel='http://rahimcode-001-site1.ftempurl.com/'
            src={pr3}
          /></SwiperSlide>
        <SwiperSlide>   
             <ProjectsCard
          title="Portfolio"
          des="It is a Portfolio site about myself and the main projects I have created since I started programming. The technologies I use are HTML, Taiwind CSS, JavaScript, React, Framer Motion."
          src={pr5}
          gitLink ='https://github.com/RahimVa1iyev/Portfolio'
          vercel='https://rb.gy/vvtexa'
        /></SwiperSlide>
        <SwiperSlide>
         <ProjectsCard
          title="Banking Website"
          des="I have prepared 6 pages of the Unibank website using HTML, CSS, JavaScript, and React"
          src={pr2}
          gitLink ='https://github.com/RahimVa1iyev/react-unibank'
          vercel='https://react-unibank.vercel.app/'
        /></SwiperSlide>

        <SwiperSlide>
          <ProjectsCard

            title="Blog Website"
            des="It was an information website about the tour. The website was created using HTML, CSS and Bootstrap technologies"
            src={pr1}
            gitLink ='https://github.com/RahimVa1iyev/bootstrap-responsive'
            vercel='https://bootstrap-responsive-eosin.vercel.app/'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Projects