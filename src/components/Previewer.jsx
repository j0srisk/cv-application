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
            <div>
              <button
                type="button"
                onClick={() => window.print()}
                className="absolute flex gap-2 items-center bottom-0 right-0 w-fit h-10 m-3 rounded-md shadow-sm border-0 px-8 py-4 bg-indigo-600 text-white font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
        </div>
    </div>
    )
}

export default Previewer;