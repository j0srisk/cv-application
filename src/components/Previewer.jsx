/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

import McCombsResume from './McCombsResume';

const Previewer = ({ resumeData }) => {
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

    const componentRef = useRef();
    const print = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${resumeData.firstName}${resumeData.lastName}Resume`,
    });

    return(
    <div className="aspect-[8.5/11] bg-white my-5 mr-5 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
        <div  style={{ transform: `scale(${horizontalScale.toFixed(6)})` }} className="flex relative w-[8.5in] h-[11in] origin-top-left">
            <McCombsResume resumeData={resumeData} ref={componentRef}/>
            <div>
              <button
                type="button"
                onClick={print}
                className="absolute flex gap-2 items-center bottom-0 right-0 w-fit h-10 m-3 rounded-md shadow-sm border-0 px-8 py-4 bg-indigo-600 text-white font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
              </button>
            </div>
        </div>
    </div>
    );
};

export default Previewer;