import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/3333.jpg';
import pic from '../assets/neoINTRO.png';
import './glitchImage.css';

const Intro = () => {
  const glitchImgRef = useRef(null);

  function startAnimation() {
    glitchImgRef.current.classList.add('animate');
    glitchImgRef.current.addEventListener('animationend', handleAnimationEnd);
  }

  function handleAnimationEnd() {
    glitchImgRef.current.classList.remove('animate');
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      startAnimation();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className={`relative w-full h-screen mx-auto`}
      style={{ backgroundImage: `url(${bg})`, height: '80vh' }}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-9'>
          <div className='w-7 h-7 bg-[#8DB6A8]' />
          <div className='w-1 sm:h-80 h-40 mt-5'>
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`w-full h-full ${i > 0 ? 'mt-2' : ''}`}
                style={{ transform: `scale(${1 - i * 0.1})` }}
              >
                <div className='w-full h-full bg-[#8DB6A8] rounded-sm' />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hi, I'm <span className='text-[#9BCFB8]'>Ilia</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white`}>
          I develop smart contracts, web applications, <br className='sm:block hidden' />
            and integrate them together.
          </p>
        </div>
        <div
          className='ml-auto w-[300px] h-[300px] relative'
          style={{ float: 'right' }}
        >
          <div className='glitch-container'>
            <img
              src={pic}
              alt='Glitched Image'
              className='glitch'
              ref={glitchImgRef}
            />
          </div>
        </div>
      </div>

      <div className='absolute  w-full flex justify-start items-center '>
        <a href='#about'>
          <div className='p-8'>
            <motion.div
              animate={{
                y: [0, 850, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 square-full bg-[#8DB6A8] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro
