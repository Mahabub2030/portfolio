import React from 'react'
import Profile from '../assets/MMM.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion'
import '../components/Css/Hero.css'
import { Download } from 'lucide-react'
import cv from '../assets/Resume.pdf'
// import BG from '../assets/bg.png'
// import Navbar from './Navbar';

const Hero = () => {
    return (
      <section
        // style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        id="hero"
        className="h-max md:h-screen bg-gradient-to-l from-gray-950 to-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10"
      >
        <div className="" id="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div className='bg-black inset-0 opacity-65 absolute '></div> */}
        <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
          <div className="md:space-y-6  px-4">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:text-6xl text-4xl font-bold mb-4"
            >
              Hi👋, I'm <p className="text-blue-400 ">Mahabub-Alam</p>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="md:text-2xl text-lg mb-3  md:mb-6"
            >
              Web Developer | MERN Stack Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
            >
              Web Developer | Full Stack Learning Currently diving into full
              stack development with hands-on experience in Node.js, MongoDB,
              and Express. Exploring Next.js for modern, server-side rendered
              web applications. Passionate about building scalable, dynamic
              websites and continuously expanding knowledge in both frontend and
              backend technologies.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              href="#projects"
              className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600  shadow-blue-500 border-2  border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
            >
              <Download className="w-5 h-5" />
              <a href={cv} download>
                Download CV
              </a>
            </motion.button>
            <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
              <a
                href="https://www.facebook.com/profile.php?id=100024013500308"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-400" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahabub-alam1382312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="hover:text-blue-400" />
              </a>
            </div>
          </div>
          <div className="relative group">
            {/* <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1.4, delay:0.2}}
                    className='bg-blue-500 md:w-[500px] w-[350px] h-[350px] md:h-[500px] absolute rounded-full blur-lg '></motion.div> */}
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0 }}
              src={Profile}
              alt=""
              className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]   shadow-blue-500 "
            />
          </div>
        </div>
      </section>
    );
}

export default Hero
