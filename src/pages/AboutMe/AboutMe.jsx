import React from "react";
import "./AboutMe.scss";

import TopNav from "../../components/TopNav/TopNav";
import ParticleComponent from "../../components/Particles/ParticleComponent";
import PageTitle from "../../components/PageTitle/PageTitle";
import LeftLinkBar from "../../components/LeftLinkBar/LeftLinkBar";
import BottomLinkBar from "../../components/BottomLinkBar/BottomLinkBar";
import DesktopSocials from "../../components/DesktopSocials/DesktopSocials";

import { Link } from "react-router-dom";

import rocket from "../../assets/rocket.png";

import { motion } from "framer-motion";

const AboutMe = () => {
  const ContentBoxAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 50,
        delay: 4.5,
      },
    },
  };

  const ContentBoxMobileAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 50,
        delay: 1.2,
      },
    },
  };
  const ContentBoxTextAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 5.5,
      },
    },
  };

  const ContentBoxMobileTextAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  const RocketAnimation = {
    hidden: {
      y: "100vh",
      x: "3vw",
      rotate: "-.11turn",
    },
    show: {
      y: 0,
      x: 0,
      rotate: "-.16turn",
      transition: {
        duration: 1.8,
        delay: 6,
      },
    },
  };

  const RocketMobileAnimation = {
    hidden: {
      y: "100vh",
      x: "3vw",
      rotate: "-.11turn",
    },
    show: {
      y: 0,
      x: 0,
      rotate: "-.16turn",
      transition: {
        duration: 1.8,
        delay: 2.5,
      },
    },
  };

  return (
    <div className="aboutMe__container container">
      <ParticleComponent theme="theme3" />
      <TopNav />
      {window.innerWidth > 820 && <LeftLinkBar />}
      {window.innerWidth > 820 && <BottomLinkBar />}
      {window.innerWidth > 820 && <DesktopSocials />}
      <PageTitle>
        <h2 className="aboutMe__Title">About</h2>
      </PageTitle>
      <motion.div
        className="rocket"
        variants={
          window.innerWidth > 820 ? RocketAnimation : RocketMobileAnimation
        }
        initial="hidden"
        animate="show"
      >
        <img src={rocket} alt="rocket" />
      </motion.div>
      <motion.div
        className="aboutMe__contentBox"
        variants={
          window.innerWidth > 820
            ? ContentBoxAnimation
            : ContentBoxMobileAnimation
        }
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="aboutMe__contentBoxText"
          variants={
            window.innerWidth > 820
              ? ContentBoxTextAnimation
              : ContentBoxMobileTextAnimation
          }
          initial="hidden"
          animate="show"
        >
          <div className="aboutMe__paragraph">
            I am a 28 year old Front-End Web Developer currently living in
            Cleveland, Ohio. I love to create awesome websites just like this
            one!
          </div>
          <div className="aboutMe__paragraph">
            I started learning web development through a 6 month coding program
            at Case Western Reserve University in Cleveland and have been
            expanding my knowledge and skills since the end of the program.
          </div>
          <div className="aboutMe__paragraph">
            {" "}
            If you would like to see more of the projects that I have created
            click{" "}
            <Link to="/projects" className="p-link link">
              here
            </Link>
            , or if you would like to contact me about designing and creating a
            website for you click{" "}
            <Link to="/contact" className="p-link link">
              here
            </Link>
            !
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
