import { ThemeContext } from '../../context';
import styles from './ToggleButton.module.css';
import { useContext } from 'react';

function ToggleButton() {
  const { isLight, toggletheme } = useContext(ThemeContext);
  console.log("btn is clicked")
  return (
    <div className='inline-block'>
          <div className={`${styles.tdnn} ${isLight ? styles.day : ''}`} onClick={toggletheme}>
      <div className={`${styles.moon} ${isLight ? styles.sun : ''}`}></div>
    </div>
      </div>
    
  );
}

export default ToggleButton;
