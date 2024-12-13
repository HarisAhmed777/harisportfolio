import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import ToggleButton from './ToggleButton/ToggleButton';

function Header() {
    const {isLight} = useContext(ThemeContext);
  return (
    <div className={`${isLight?'lightmode':'darkmode'} flex items-center justify-between px-10 py-6`}>
      <h2>Logo will come here</h2>
      <ToggleButton/>
    </div>
  )
}

export default Header