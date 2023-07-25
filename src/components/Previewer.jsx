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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </button>
            </div>
        </div>
    </div>
    )
}

export default Previewer;