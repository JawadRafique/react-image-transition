import { motion } from "framer-motion";
import React from "react";
import { Container } from "react-bootstrap";
import Avril from "../public/images/avril.jpg";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const Model = ({ imageDetails }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="container-fluid model position-relative px-0"
    >
      <div className="row top-row d-flex align-items-end justify-content-center px-0 mx-0">
        <div className="detail-info">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9, ...transition } }}
            className="info"
          >
            <motion.span className="first pr-4">
              <motion.span>A</motion.span>
              <motion.span>V</motion.span>
              <motion.span>R</motion.span>
              <motion.span>I</motion.span>
              <motion.span>L</motion.span>
            </motion.span>
            <motion.span className="last pl-4">
              <motion.span>L</motion.span>
              <motion.span>A</motion.span>
              <motion.span>V</motion.span>
              <motion.span>I</motion.span>
              <motion.span>G</motion.span>
              <motion.span>N</motion.span>
              <motion.span>E</motion.span>
            </motion.span>
          </motion.div>
        </div>
      </div>
      <div className="row bottom-row px-0 mx-0 justify-content-center">
        <motion.div
          initial={{
            width: imageDetails.width,
            height: imageDetails.height,
            y: "-53.6%",
          }}
          animate={{
            y: 0,
            width: "100%",
            height: window.innerWidth > 1400 ? 800 : 400,
            transition: { delay: 0.2, ...transition },
          }}
          className="image-container frame overflow-hidden col-12 col-md-auto px-0"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{
              transition: { delay: 0.2, ...transition },
            }}
            src={Avril}
            alt=""
            className="img-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
