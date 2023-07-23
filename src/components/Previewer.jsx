/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';

function Previewer({ basicInfo }) {
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
    <div className="aspect-[8.5/11] rounded-lg bg-white shadow-lg">
        <div  style={{ transform: `scale(${horizontalScale.toFixed(6)})` }} className="flex relative w-[8.5in] h-[11in] origin-top-left">
            <h1 className="text-[18pt] font-bold">{basicInfo.firstName} {basicInfo.lastName}</h1>
        </div>
    </div>
    )
}

export default Previewer;