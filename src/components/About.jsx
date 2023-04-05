import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-[#D2E2DF] uppercase tracking-wider">Why?</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#D2E2DF] text-[17px] max-w-3xl leading-[30px]'
      >
        As a driven individual with a deep interest in the potential of blockchain technology, I'm passionate about realizing ideas and making a positive impact on the world. My vision is to leverage my skills to contribute to a movement that can transform the way we live and work.

        <br/>
        <br/>

        Blockchain has the power to revolutionize entire industries, and I'm thrilled to be part of this ongoing transformation. I'm committed to working towards this goal and creating innovative solutions that can bring about lasting change. Whether it's through research, development, or implementation, I'm always eager to contribute to the blockchain ecosystem and help shape a brighter future.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");