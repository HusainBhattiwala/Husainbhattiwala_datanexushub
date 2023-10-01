"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/data";

export default function Home() {
  const [image, setImage] = useState({
    id: 1,
    img: "/image1.jpg",
    title: "Skin Retouch",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const h1Variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const btnVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "anticipate" },
    },
  };

  return (
    <main className='flex flex-col md:flex md:flex-row justify-around items-center mt-12'>
      <motion.div
        className='w-[400px] lg:w-[500px] h-[600px] rounded-xl shadow-lg 
        bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm 
        bg-opacity-10 border border-gray-100'
        initial='hidden'
        animate='visible'
        variants={imageVariants}
      >
        <img
          src={image.img}
          alt='/'
          className='object-cover object-center h-[100%] w-[100%] rounded-xl
           bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm 
           bg-opacity-10 border border-gray-100'
        />
      </motion.div>

      <div
        className=' max-w-[300px] flex flex-row space-x-3 mt-4 bg-white
        md:flex-col md:space-x-0 md:mt-0 mb-6 md:mb-0'
      >
        {images.map((image) => (
          <div
            key={image.id}
            className='w-[150px] h-[80px] border mb-8 rounded-md  
            shadow-sm hover:scale-105 transition-all duration-200'
          >
            <img
              src={image.img}
              alt='/'
              className=' object-fill object-center h-[100%] w-[100%] rounded-md hover:cursor-pointer'
              onClick={() => setImage(image)}
            />
            <p className='text-center text-[14px] text-gray-700 font-medium'>
              {image.title}
            </p>
          </div>
        ))}
      </div>

      <div className='w-[300px] lg:w-[400px]'>
        <div className='text-center space-y-8'>
          <motion.h1
            className='text-[28px] md:text-[32px] lg:text-[48px] font-bold
            rounded-lg bg-white'
            initial='hidden'
            animate='visible'
            variants={h1Variants}
          >
            {image.title}
          </motion.h1>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={pVariants}
            className='text-left text-gray-900 bg-white'
          >
            {image.desc}
          </motion.p>
        </div>
        <motion.button
          initial='hidden'
          animate='visible'
          variants={btnVariants}
          className='px-8 py-2 bg-blue-600 rounded-full shadow-md
           text-white mt-3 flex items-center gap-2 font-medium 
           hover:scale-110 transition-all duration-300 delay-100'
        >
          Contact Us
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
            />
          </svg>
        </motion.button>
      </div>
    </main>
  );
}
