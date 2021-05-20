import { motion } from "framer-motion";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avril from "../images/avril.jpg";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.6],
};

export const Home = ({ imageDetails }) => {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center homeScreen px-0 mx-0">
        <div className="image-container col-12 col-md-auto px-0 mx-0">
          <div
            className="frame overflow-hidden"
            style={{
              width: imageDetails.width,
              height: imageDetails.height,
            }}
          >
            <Link to={`/model/avril`}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition}
                src={Avril}
                alt="Avril Lavigne"
                className="img-full"
              />
            </Link>
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className="information d-flex justify-content-between pt-2"
          >
            <p className="title text-uppercase">Here's to Never Growing Up</p>
            <p className="data mb-0">April 9, 2013</p>
          </motion.div>
        </div>
      </Row>
    </Container>
  );
};
