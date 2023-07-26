import { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

import McCombsResume from './McCombsResume';

const Previewer = ({ resumeData }) => {
	const [horizontalScale, setHorizontalScale] = useState(1);
	const [verticalScale, setVerticalScale] = useState(1);
	const windowHeight = useRef(window.innerHeight);
	const windowWidth = useRef(window.innerWidth);

	// Function to calculate the horizontalScale based on window dimensions
	const calculateScale = () => {
		const newHorizontalScale = (windowHeight.current - 40) / 1056;
		console.log(windowHeight.current);
		console.log(newHorizontalScale);
		const newVerticalScale = (windowWidth.current - 40) / 816;
		setHorizontalScale(newHorizontalScale);
		setVerticalScale(newVerticalScale);
	};

	useEffect(() => {
		// Event listener to handle window resize
		const handleWindowResize = () => {
			windowHeight.current = window.innerHeight;
			windowWidth.current = window.innerWidth;
			calculateScale();
		};

		// Calculate the initial horizontalScale once after the initial render
		calculateScale();
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

	//set the scale of the resume based on the window size
	//should utilize tailwind but complication with props
	const isLargeScreen = windowWidth.current >= 1024;

	const aspectRatio = {
		height: isLargeScreen ? `${horizontalScale * 1056}px` : `${1.294117 * verticalScale * 816}px`,
		width: isLargeScreen ? `${0.77272 * horizontalScale * 1056}px` : `${verticalScale * 816}px`,
	};

	const scale = {
		transform: isLargeScreen ? `scale(${horizontalScale})` : `scale(${verticalScale})`,
	};

	return (
		<div
			style={aspectRatio}
			className={`relative mx-5 mb-5 mt-3 rounded-md border-0 bg-white shadow-sm ring-1 ring-inset ring-gray-300 lg:ml-0 lg:mt-5`}
		>
			<div style={scale} className="flex h-[11in] w-[8.5in] origin-top-left">
				<McCombsResume resumeData={resumeData} ref={componentRef} />
			</div>
			<div>
				<button
					type="button"
					onClick={print}
					className="absolute bottom-0 right-0 m-3 flex h-10 w-fit items-center gap-2 rounded-md border-0 bg-indigo-600 px-8 py-4 font-bold text-white shadow-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Previewer;
