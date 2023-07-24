/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';

import McCombsResume from './McCombsResume';

function Previewer({ resumeData }) {
    const [horizontalScale, setHorizontalScale] = useState(1);
    const windowHeight = useRef(window.innerHeight);

    // Function to calculate the horizontalScale based on window dimensions
    const calculateHorizontalScale = () => {
        const newHorizontalScale = (windowHeight.current - 40) / 1056;
        setHorizontalScale(newHorizontalScale);
    };

    useEffect(() => {
        // Event listener to handle window resize
        const handleWindowResize = () => {
          windowHeight.current = window.innerHeight;
          calculateHorizontalScale();
        };

        // Calculate the initial horizontalScale once after the initial render
        calculateHorizontalScale(); 
        window.addEventListener('resize', handleWindowResize);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);


    return(
    <div className="aspect-[8.5/11] bg-white my-5 mr-5 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
        <div  style={{ transform: `scale(${horizontalScale.toFixed(6)})` }} className="flex relative w-[8.5in] h-[11in] origin-top-left">
            <McCombsResume resumeData={resumeData}/>
        </div>
    </div>
    )
}

export default Previewer;