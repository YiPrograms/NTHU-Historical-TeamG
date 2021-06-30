import React, {useState} from 'react';

import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/ArrowUpward';

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Fab style={{position: 'fixed', bottom: '16px', right: '16px', display: visible ? '' : 'none', zIndex: 1}} onClick={scrollToTop}>
        <UpIcon />
    </Fab>
  );
}
  
export default ScrollButton;