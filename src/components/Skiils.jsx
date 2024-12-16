import React, { useContext } from 'react';
import { ThemeContext } from '../context';
import Web from '../components/images/web.png';
import { useGSAP } from '@gsap/react';
import DSA from '../components/images/DSA.png';
import fullStack from '../components/images/fullStack.png';
import mobiledev from '../components/images/mobileDev.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HTML from '../components/images/html.svg?react';
import CSS from '../components/images/css.svg?react';
import Tailwind from '../components/images/tailwindsvg.svg?react';
import TailwindBlack from '../components/images/tailwindblack.svg?react';
import Mongo from '../components/images/mongodb.svg?react';
import Reacticon from '../components/images/react.svg?react';
import Express from '../components/images/express.svg?react';
import Expressblack from '../components/images/expressblack.svg?react';
import Node from '../components/images/node.svg?react';
import Bootstrap from '../components/images/bootstrap.svg?react';

gsap.registerPlugin(ScrollTrigger);

function Skiils() {
  useGSAP(()=>{
    gsap.from('.whatibring', {
      opacity: 0,
      x: -700,
      duration: 1,
      scrollTrigger: {
        scroller: 'body',
        trigger: '.parentdiv',
        start: 'top 95%',
        end: 'top 99%',
        scrub: 2,
      },
    });
  }) 


  //   let timeline = gsap.timeline();
  //   ['.box1', '.box2', '.box3', '.box4'].forEach((box, index) => {
  //     timeline.to(box, {
  //       x: 20,
  //       duration: 0.2 * (index + 1),
  //       scrollTrigger: {
  //         trigger: '.wholediv',
  //         scroller: 'body',
  //         start: 'top 80%',
  //         end: 'top 99%',
  //         scrub: 2,
  //       },
  //     });
  //   });
  // }

  const { isLight } = useContext(ThemeContext);

  const skillsData = [
    { title: 'Web Developer', icon: Web },
    { title: 'Data Structures & Algorithms', icon: DSA },
    { title: 'Full Stack Developer', icon: fullStack },
    { title: 'React Native', icon: mobiledev },
  ];

  return (
    <div className={`${isLight ? 'lightmode' : 'darkmode'} parentdiv`}>
      <h2 className={`text-center text-4xl font-merriweather ${isLight ? 'lightmode' : 'darkmode'}  uppercase whatibring`}>
        What I Bring to the Table
      </h2>

      <div className="mx-5 xl:mx-52 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 mb-4 wholediv">
        {skillsData.map((skill, index) => (
          <div key={index} className="relative h-52">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 rounded-lg p-1">
              <div className={`flex h-full flex-col items-center justify-center rounded-lg  ${isLight?'lightmode':'darkmode'}`}>
                <img src={skill.icon} alt={`${skill.title} icon`} className="h-20" />
                <h2 className="mt-3 text-center text-2xl font-dancing uppercase">
                  {skill.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-center text-4xl py-12   font-merriweather">Building Seamless Experiences with the Ultimate Tech Stack
</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-5">
          <div className="flex flex-col justify-center items-center">
            <HTML />
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CSS />
            <p>CSS</p>
          </div>
          {isLight ? (
            <div className="flex flex-col justify-center items-center">
              <Expressblack />
              <p>Express JS</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <Express />
              <p>Express JS</p>
            </div>
          )}
          <div className="flex flex-col justify-center items-center">
            <Reacticon />
            <p>React</p>
          </div>
          {isLight ? (
            <div className="flex flex-col justify-center items-center">
              <Tailwind />
              <p>Tailwind</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <TailwindBlack />
              <p>Tailwind</p>
            </div>
          )}
          <div className="flex flex-col justify-center items-center">
            <Mongo />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Reacticon />
            <p>React Native</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Node />
            <p>Node JS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Bootstrap />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skiils;
