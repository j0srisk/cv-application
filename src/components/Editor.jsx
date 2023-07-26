import Details from './editors/Details';
import Summary from './editors/Summary';
import Education from './editors/Education';
import Experience from './editors/Experience';
import Projects from './editors/Projects';
import Awards from './editors/Awards';
import AdditionalInfo from './editors/AdditionalInfo';
import Footer from './Footer';

const Editor = ({ resumeData, setResumeData }) => {
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

			<Footer />
		</div>
	);
};

export default Editor;
