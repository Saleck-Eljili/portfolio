import React from "react";
import portfo from "../../../assets/portfo.png";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfo} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, Je suis <span>Saleck</span>{" "}
        </h3>
        <span className="job">Développeur full-stack basé à paris</span>
        <span className="text">
          Passionné
          <br /> par le développement <br /> informatique.
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          contactez moi
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">DevOps</div>
        <div className="freelance">Cloud</div>
      </div>
    </motion.div>
  );
};

export default Home;
