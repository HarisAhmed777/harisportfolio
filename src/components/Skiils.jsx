import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import  Web  from '../components/images/web.png';
import DSA from '../components/images/DSA.png';
import fullStack from '../components/images/fullStack.png';
import mobiledev from '../components/images/mobileDev.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Skiils() {
    useGSAP(()=>{
        gsap.from('.whatibring',{
            opacity:0,
            x:-500,
            duration:1,
            // delay:1,
            scrollTrigger:{
                // markers:true,
                scroller:'body',
                trigger:'.parentdiv',
                start:'top 95%',
                end:'top 99%',
                scrub:2,
            }
        })
        let timeline = gsap.timeline();
        timeline.to('.box1',{
            x:20,
            duration:0.2,
            scrollTrigger:{
                // markers:true,
                trigger:'.wholediv',
                scroller:'body',
                start:'top 80%',
                end:'top 99%',
                scrub:2,
            }
        })
        timeline.to('.box2',{
            x:20,
            duration:0.3,
            scrollTrigger:{
                // markers:true,
                trigger:'.wholediv',
                scroller:'body',
                start:'top 80%',
                end:'top 99%',
                scrub:2,
            }

        })
        timeline.to('.box3',{
            x:20,
            duration:0.4,
            scrollTrigger:{
                // markers:true,
                trigger:'.wholediv',
                scroller:'body',
                start:'top 80%',
                end:'top 99%',
                scrub:2,
            }

        })
        timeline.to('.box4',{
            x:20,
            duration:0.5,
            scrollTrigger:{
                // markers:true,
                trigger:'.wholediv',
                scroller:'body',
                start:'top 80%',
                end:'top 99%',
                scrub:2,
            }

        })
    })
    const {isLight} = useContext(ThemeContext);
  return (
    <div className={`${isLight?'lightmode':'darkmode'} parentdiv`}>
        
        <h2 className='text-center text-4xl font-merriweather uppercase whatibring'>What I Bring to the Table</h2>
        <div className="mx-5 lg:mx-52 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-4 wholediv">
  <div className="border-2 box1 h-52 border-l-cyan-600 border-t-orange-400 border-r-purple-500 border-b-red-700">
    <div className="flex justify-center mt-2">
      <img src={Web} alt="webDeveloper icon" className="h-20" />
    </div>
    <h2 className="uppercase text-2xl font-dancing text-center mt-3">Web <span className="block"></span>Developer</h2>
  </div>

  <div className="border-2 box2 h-52 border-cyan-500">
    <div className="flex justify-center mt-2">
      <img src={DSA} alt="webDeveloper icon" className="h-20" />
    </div>
    <h2 className="uppercase text-2xl font-dancing text-center mt-3">data structures &<span className="block">algorithms</span></h2>
  </div>

  <div className="border-2 box3 h-52 border-t-[#FF5733] border-r-[#FFC300] border-b-[#DAF7A6] border-l-[#33FFDD]">
    <div className="flex justify-center mt-2">
      <img src={fullStack} alt="webDeveloper icon" className="h-20" />
    </div>
    <h2 className="uppercase text-2xl font-dancing text-center mt-3">full stack <span className="block"></span>developer</h2>
  </div>

  <div className="border-2 box4 h-52 border-cyan-500">
    <div className="flex justify-center mt-2">
      <img src={mobiledev} alt="webDeveloper icon" className="h-20" />
    </div>
    <h2 className="uppercase text-2xl font-dancing text-center mt-3">react <span className="block">native</span></h2>
  </div>
</div>

<div>
  <h2 className="text-center text-4xl font-merriweather">Heading</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-5">
    <div className="flex flex-col justify-center items-center">
      <HTML  />
      <p className=''>HTML</p>
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
  )
}

export default Skiils