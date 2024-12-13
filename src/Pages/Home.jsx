import React, { useContext ,useState} from 'react'
import { ThemeContext } from '../context'
import Header from '../components/Header';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
// import {Experience} from '../components/Works'

import Arrow from '../components/images/arrow.svg?react';
import Arrowblack from '../components/images/arrowblack.svg?react';
import Linkedin from '../components/images/linkedin.svg?react';
import Instagram from '../components/images/instagram.svg?react';
import Mail from '../components/images/mail.svg?react';
import X from '../components/images/X.svg?react';
import Name from '../components/images/Name.svg?react';
import AboutMeDialog from '../components/AboutMeDialog';
import Skiils from '../components/Skiils';
import  { Experience } from '../components/Works';
import {Works} from '../components/Projects'
function Home() {
  const [open, setOpen] = useState(false);

  // useGSAP(()=>{
  //   gsap.from('.name',{
  //     // x:-480,
  //     // opacity:0,
  //     delay:1,
  //     duration:1,
  //   })
  // })
    const {isLight} = useContext(ThemeContext);
    console.log(isLight);
  return (
    <>    
    <Header/>
    <div className={isLight?'lightmode':'darkmode'}>
    <div className='h-[90vh] flex items-center justify-between'>
      <div className='flex flex-col  mb-20'>
        <h2 className='uppercase text-6xl ms-20 font-dancing name'>haris ahmed</h2>
        <p className='uppercase ms-20 mt-3 text-2xl'>MERN STACK DEVELOPER</p>
        <div className='ms-20 mt-3'>
              <button onClick={() => setOpen(true)} className='bg-[#4595eb] px-5 py-2 rounded block font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 mb-9'>
                About Me
               {isLight?
             <Arrowblack className='w-[50px] h-[60px] z-30 absolute top-1/2 -translate-y-1/2 -right-9 group-hover:-right-64' />
               :
             <Arrow className='w-[50px] h-[60px] z-30 absolute top-1/2 -translate-y-1/2 -right-9 group-hover:-right-64' />

               }                 
              </button>
              <AboutMeDialog open={open} setOpen={setOpen} />
            </div>
      </div>
      <div className='me-10 '>
      <ul className='mb-20 space-y-5 '>
          <a href="https://www.linkedin.com/in/haris-ahmed-s-a42536215/" target='Blank'><li className='hover:scale-150 ease-in-out duration-200'><Linkedin /></li></a>
          <li className='hover:scale-150 ease-in-out duration-200 cursor-pointer'><Instagram /></li>
          <li className='hover:scale-150 ease-in-out duration-200 cursor-pointer'><Mail /></li>
          <li className='hover:scale-150 ease-in-out duration-200 cursor-pointer'><X /></li>
        </ul>
      </div>
    </div>
  
    </div>
    <Skiils/>
    <Experience/>
    <Works/>
    </>

  )
}

export default Home