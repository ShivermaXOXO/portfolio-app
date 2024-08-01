import React, { useEffect,  useRef } from 'react';
import { gsap } from "gsap";


const CustomCursor = () => {
  const cursorRef = useRef(null);
 

  useEffect(() => {
    const cursor = cursorRef.current;

    const updateCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: 'power1.out', 
      });
    };


  document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  // const handleMouseEnter = () => {
  //   setCursorStyle({
  //     width: '30px',
  //     height: '30px',
  //     background: 'blue',
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setCursorStyle({
  //     width: '20px',
  //     height: '20px',
  //     background: 'red',
  //   });
  // };

  return (
    
   <div
        ref={cursorRef}
        className='cursor'
     />
    
  );
};

export default CustomCursor;