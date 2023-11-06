import React, { useContext, useEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalContext } from '../context/ModalContext';
import Lottie from "lottie-react";
import animationData from "../assets/images/lottie.json"
import animationData2 from '../assets/images/Lottie2.json'
import {RxCross2} from 'react-icons/rx'




const ModalInfo = () => {
    const { isVisible, setIsVisible ,selected} = useContext(ModalContext)
    const modalRef = useRef(null);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleModalClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleModalClick);
        } else {
            document.removeEventListener('mousedown', handleModalClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleModalClick);
        };
    }, [isVisible]);
    return (
        <>
            <Modal
                open={isVisible ? true : false}
                onClose={isVisible ? false : true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modal-info'
            >
                <Box className='modal-con' ref={modalRef}>
                  <div className="modal-card">
                    <div className="modal-left">
                        <Lottie animationData={selected===1?animationData:animationData2} />
                    </div>
                    <div className="modal-right">
                        <h1>{selected===1? 'Front-end Developer' : 'Backend Developer'}</h1>
                        <p>
                            {
                                selected === 1 ?
                                'I have been participating in the Front-end Developer Internship program organized by the Azerbaijan State Employment Agency for 3 months. Here, we work on various figmas and create user-friendly websites. In addition, I have been working as a Front-end Developer for the startup project of YellowGo for 6 months. During my time working here, working with a team I developed my skills and also gained experience on the front-end library React by working on the given tasks':
                                'During your time at Code Academy, you studied Full-Stack Programming and learned C# along with its framework, ASP.Net Core MVC, and Web API technologies. You have utilized these skills to create several projects and, as a Full-Stack developer during freelance work, implemented the backend part of websites using ASP.Net Core Web API.'
                            }

                        </p>
                    </div>

                  </div>
                  <RxCross2 onClick={handleClose} className='cross-icon' />

                </Box>
            </Modal>
        </>
    )
}

export default ModalInfo