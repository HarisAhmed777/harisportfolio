import React, { useContext } from "react";
import { motion } from "framer-motion";
import { styles } from "../components/styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../components/experince";
import { fadeIn, textVariant } from "../utils/motion.js";
import { ThemeContext } from "../context";
import weblink from '../components/images/webLink.png'
const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    alt,
    source_code_link,
    live_link,
  }) => {
    const {isLight} = useContext(ThemeContext);

    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.7)}>
        <div className={`w-full rounded-2xl  p-5 sm:w-[360px] ${isLight?'lightmode':'darkmode'}`}>
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={alt}
              className="h-full w-full rounded-2xl object-cover"
            />
  
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={weblink}
                  alt="live link"
                  className="h-full w-full rounded-full  object-contain"
                />
              </div>
           
            </div>
          </div>
  
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="mt-2 text-[14px] text-secondary">{description}</p>
          </div>
  
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <p key={i} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export const Works = () => {
    const {isLight} = useContext(ThemeContext);
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${isLight?'lightmode':'darkmode'} text-center pt-6`}>My work</p>
          <h2 className={`${styles.sectionHeadText} ${isLight?'lightmode':'darkmode'} text-center`}>Projects.</h2>
        </motion.div>
  
        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={`pt-3  text-[17px] px-14 leading-[30px] ${isLight?'lightmode':'darkmode'}`}
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
  
        <div className={`flex items-center justify-around pt-20 flex-wrap gap-7 ${isLight?'lightmode':'darkmode'}`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Works, "work");