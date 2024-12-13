import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../components/styles";
import { experiences } from "../components/experince";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion.js";
import { ThemeContext } from "../context";

const ExperienceCard = ({ experience }) => {
    const {isLight} = useContext(ThemeContext);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.title}
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Experience = () => {
    const {isLight} =useContext(ThemeContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isLight?'lightmode':'darkmode'} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} ${isLight?'lightmode':'darkmode'} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <motion.div variants={textVariant()} className={` pt-20 flex flex-col ${isLight?'lightmode':'darkmode'}`}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "technicalSkills");