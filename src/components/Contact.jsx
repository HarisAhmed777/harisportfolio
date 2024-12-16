// Import required modules and components
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { styles } from "../components/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Contactus from "../components/images/Contactus.jpg";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward,Twitter,X } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../context";

// Contact Component
export const Contact = () => {
  const { isLight } = useContext(ThemeContext);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  
  const isLeftInView = useInView(leftRef, { once: false });
  const isRightInView = useInView(rightRef, { once: false });

  return (
    <>
      <div
        className={`flex flex-col-reverse gap-10 overflow-hidden md:pt-20 px-20 md:flex-row ${
          isLight ? "lightmode" : "darkmode"
        }`}
      >
        {/* Left Section */}
        <motion.div
          ref={leftRef}
          variants={slideIn("left", "tween", 0.1, 0.5)}
          initial="hidden"
          animate={isLeftInView ? "show" : "hidden"}
          className={`${isLight ? "lightmode" : "darkmode"} h-[100px] flex-[0.75] rounded-2xl ps-8`}
        >
          <p
            className={`${styles.sectionSubText} ${
              isLight ? "lightmode" : "darkmode"
            }`}
          >
            Get in touch
          </p>
          <h3
            className={`${styles.sectionHeadText} ${
              isLight ? "lightmode" : "darkmode"
            }`}
          >
            Contact.
          </h3>
          <div className="flex items-center justify-center mt-8 flex-wrap gap-2">
            <div>
              <a href="mailto:mern.dev.harisahmed@gmail.com">
                <Button variant="outlined" endIcon={<Email />}>
                  Email
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/harisahmed-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<LinkedIn />}>
                  LinkedIn
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/HarisAhmed777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<GitHub />}>
                  GitHub
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://x.com/Harisahmed_Dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<X/>}>
                  X
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          ref={rightRef}
          variants={slideIn("right", "tween", 0.1, 0.5)}
          initial="hidden"
          animate={isRightInView ? "show" : "hidden"}
          className="md:h-[300px] md:flex-1"
        >
          <img
            src={Contactus}
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>

      {/* Resume Button */}
      <div className={`pb-4 pl-5 ${isLight ? "lightmode" : "darkmode"}`}>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1KB3IUAseB0_cNzSvUCnudQfPtANZRgDg/view"
          >
            <Button variant="outlined" endIcon={<ArrowOutward />}>
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* <hr className="ml-2" /> */}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
