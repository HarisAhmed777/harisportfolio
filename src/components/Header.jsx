import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import ToggleButton from './ToggleButton/ToggleButton';
import LogoBlack from '../components/images/Logoblack.jpg';
import LogoWhite from '../components/images/Logowhite.jpg';

function Header() {
    const {isLight} = useContext(ThemeContext);
  return (
    <div className={`${isLight?'lightmode':'darkmode'} flex items-center justify-between px-10 py-6`}>
      <img src={isLight?LogoWhite:LogoBlack} alt="" className='h-16' />
      <ToggleButton/>
    </div>
  )
}

export default Header