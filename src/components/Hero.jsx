import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Yash } from "../assets";

const Hero = () => {
  const handleDownloadClick = async () => {
    window.open(
      "https://drive.google.com/file/d/1-6BuAw4upEfRVFOeXoLoFZ2xiUhrzIy1/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className={`relative w-full h-screen mx-auto flex items-center`}>
      <div
        className={` mx-auto ${styles.paddingX} flex flex-col sm:flex-row gap-5 items-center justify-around  w-full mt-20`}
      >
        <div className={`flex gap-10 `}>
          <div className="flex flex-col justify-between items-center mt-5 sm:block hidden">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className=" text-center sm:text-left">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Yash Porwal</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a Software Developer <br className="sm:block hidden" />
             
            </p>
            <button
              onClick={handleDownloadClick}
              className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="sm:w-auto">
          <img src={Yash} alt="Yash" className="w-128 h-auto " />
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
