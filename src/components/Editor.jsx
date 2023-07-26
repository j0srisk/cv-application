import Details from './editors/Details';
import Summary from './editors/Summary';
import Education from './editors/Education';
import Experience from './editors/Experience';
import Projects from './editors/Projects';
import Awards from './editors/Awards';
import AdditionalInfo from './editors/AdditionalInfo';
import Footer from './Footer';

const Editor = ({ resumeData, setResumeData, defaultResumeData }) => {
	const handleChange = (arrayName, index, field, value, subArrayName = null, subIndex = null) => {
		const updatedArray = [...resumeData[arrayName]];

		if (subArrayName !== null && subIndex !== null) {
			// Update a sub-item in the specified sub-array
			updatedArray[index][field][subIndex][subArrayName] = value;
		} else {
			// Update a top-level field
			updatedArray[index][field] = value;
		}

		setResumeData({
			...resumeData,
			[arrayName]: updatedArray,
		});
	};

	const removeItem = (arrayName, index, subArrayName = null, subIndex = null) => {
		const updatedArray = [...resumeData[arrayName]];

		if (subArrayName !== null && subIndex !== null) {
			// Remove a sub-item
			updatedArray[index][subArrayName].splice(subIndex, 1);
		} else {
			// Remove a top-level item
			updatedArray.splice(index, 1);
		}

		setResumeData({
			...resumeData,
			[arrayName]: updatedArray,
		});
	};

	const resetToDefault = () => {
		setResumeData(defaultResumeData);
	};

	return (
		<div className="no-scrollbar flex flex-1 flex-col gap-8 overflow-y-scroll scroll-smooth p-5">
			<Details resumeData={resumeData} setResumeData={setResumeData} />

			<Summary resumeData={resumeData} setResumeData={setResumeData} />

			<Education
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<Experience
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<Projects
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<Awards
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<AdditionalInfo
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<div className="flex justify-end gap-4">
				<Footer />
				<button
					className="block w-fit rounded-md border-0 bg-indigo-600 px-4 font-bold text-white shadow-sm"
					onClick={resetToDefault}
				>
					Reset to Default
				</button>
			</div>
		</div>
	);
};

export default Editor;
