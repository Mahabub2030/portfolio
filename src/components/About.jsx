
import AboutImg from '../assets/mahabub.png'
import { FaChevronRight, FaNodeJs } from 'react-icons/fa'
import {
  FaReact,
  FaDatabase,
  FaLock,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";


const About = () => {
  return (
    <div
      id="about"
      className="py-20 bg-gray-900  z-50 text-gray-300 px-0 md:px-0"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">
          About Me
        </h2>
        <div className="flex flex-col  md:flex-row gap-20 items-center">
          <div className="relative border hidden md:block  border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src={AboutImg}
              alt=""
              className="w-[300px] md:w-[1500px] rounded-full  border-blue-600 border  shadow-blue-500"
            />
          </div>
          <div className=" p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="text-lg leading-7 mb-6">
              Hi! I'm Mahabub Alam, a passionate Full-Stack Developer with
              expertise in the MERN stack,React js , and Next Js. With a strong
              foundation in modern web development and an eye for detail, I
              create elegant, user-friendly web solutions tailored to meet
              client needs.
            </p>
            <p className="text-lg leading-7 mb-6">
              My journey into tech began from a IT background, and I've embraced
              every challenge to hone my skills in development, problem-solving,
              and teamwork. I’m always eager to learn and explore new
              technologies to deliver cutting-edge web experiences.
            </p>
            <p className="text-lg leading-7">
              When I’m not coding, I enjoy sharing my knowledge on
              <a
                href="/https://www.linkedin.com/in/mahabub-alam1382312/"
                className="text-blue-500 underline"
              >
                {""}
                LinkedIn
              </a>
              , where I’m learning JavaScript, the MERN stack, and core
              development concepts. Let’s connect and build something amazing
              together!
            </p>

            {/* <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">
                My Skills
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  JavaScipit
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  React.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Next.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Tailwind Css
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  MongoDb
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Node.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Github
                </p>
              </div>
              <button className="px-3 py-1  rounded-md bg-blue-500 text-white flex items-center gap-1  ">
                Contact
                <FaChevronRight />
              </button>
            </div> */}
            {/* <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">
                My Skills
              </h1>
              <div className="flex items-center">
                <h1>Frontend:</h1>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  JavaScript
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  React.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Next.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                  Tailwind CSS
                </p>
              </div>

              <br />
              <div className='flex'>
                <h1>BeackEnd:</h1>
                <div className="flex flex-wrap gap-4 mb-5 text-sm">
                  <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                    MongoDB
                  </p>
                  <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                    Node.js
                  </p>
                  <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaNodeJs /> Express.js
                  </p>
                </div>
              </div>
              <div className='flex'>
                <h1>Autiocaion:</h1>
                <div className="flex flex-wrap gap-4 mb-5 text-sm">
                  <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">
                   Firebase
                  </p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">
                Contact
                <FaChevronRight />
              </button>
            </div> */}
            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">
                My Skills
              </h1>

              {/* Frontend */}
              <div className="flex items-start gap-2 mb-4">
                <h1 className="font-semibold flex items-center gap-1">
                  <FaHtml5 className="text-orange-500" /> Frontend:
                </h1>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaJs className="text-yellow-400" /> JavaScript
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaReact className="text-cyan-400" /> React.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiNextdotjs /> Next.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiTailwindcss className="text-blue-300" /> Tailwind CSS
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex items-start gap-2 mb-4">
                <h1 className="font-semibold flex items-center gap-1">
                  <FaDatabase className="text-green-400" /> Backend:
                </h1>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiMongodb className="text-green-500" /> MongoDB
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaNodeJs className="text-green-600" /> Node.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiExpress /> Express.js
                  </p>
                </div>
              </div>

              {/* Authentication */}
              <div className="flex items-start gap-2 mb-4">
                <h1 className="font-semibold flex items-center gap-1">
                  <FaLock className="text-yellow-500" /> Authentication:
                </h1>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiFirebase className="text-orange-400" /> Firebase
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white flex items-center gap-2">
                Contact <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
