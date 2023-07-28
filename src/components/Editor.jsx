import Role from './Role';
import Details from './editors/Details';
import Summary from './editors/Summary';
import Education from './editors/Education';
import Experience from './editors/Experience';
import Projects from './editors/Projects';
import Awards from './editors/Awards';
import AdditionalInfo from './editors/AdditionalInfo';
import Footer from './Footer';

import axios from 'axios';

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

	const removeBullet = (arrayName, index, subIndex) => {
		const updatedArray = [...resumeData[arrayName]];
		const updatedDescription = [...updatedArray[index].description];
		const isBulletEmpty = updatedDescription[subIndex].bullet.trim() === '';

		if (isBulletEmpty) {
			updatedDescription.splice(subIndex, 1); // Remove the empty bullet
		}

		const lastIndex = updatedDescription.length - 1;
		const lastBullet = updatedDescription[lastIndex].bullet;
		const isLastBulletNotEmpty = lastBullet.trim() !== '';

		// Only update resumeData if the content of the last bullet has changed
		if (isLastBulletNotEmpty !== isBulletEmpty) {
			updatedArray[index].description = updatedDescription;

			setResumeData({
				...resumeData,
				[arrayName]: updatedArray,
			});
		}
	};

	const resetToDefault = () => {
		setResumeData(defaultResumeData);
	};

	function generateResumeContent(resumeData) {
		const summaryContent = 'Summary: ' + resumeData.summary;

		const educationContent = resumeData.education
			.map(
				(educationItem) =>
					`Education: ${educationItem.institution}, ${educationItem.school}, ${educationItem.degree}, ${educationItem.major}, GPA: ${educationItem.gpa}`,
			)
			.join('\n');

		const experienceContent = resumeData.experience
			.map(
				(experienceItem) =>
					`Experience: ${experienceItem.company}, ${experienceItem.title}, ${
						experienceItem.location
					}, Description: ${experienceItem.description.map((desc) => desc.bullet).join('; ')}`,
			)
			.join('\n');

		const projectContent = resumeData.projects
			.map(
				(projectItem) =>
					`Project: ${projectItem.name}, ${
						projectItem.client
					}, Description: ${projectItem.description.map((desc) => desc.bullet).join('; ')}`,
			)
			.join('\n');

		const awardContent = resumeData.awards
			.map((awardItem) => `Award: ${awardItem.name}, Date: ${awardItem.date}`)
			.join('\n');

		const additionalInfoContent = resumeData.additionalInfo
			.map((item) => `${item.name}: ${item.description}`)
			.join('\n');

		return `${summaryContent}\n\n${educationContent}\n\n${experienceContent}\n\n${projectContent}\n\n${awardContent}\n\n${additionalInfoContent}`;
	}

	const resumeContent = generateResumeContent(resumeData);

	const generateText = (
		buttonRef,
		arrayName,
		index,
		field,
		value,
		subArrayName = null,
		subIndex = null,
	) => {
		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: 'Here is my resume: {' + resumeContent + '}',
				},
				{
					role: 'user',
					content: 'Here is the role I am applying to' + resumeData.role[0].description,
				},
				{
					role: 'user',
					content:
						'Rewrite this ' +
						field +
						' {' +
						value +
						'} in no more than {' +
						value.length +
						'} characters tailored towards this specific position. Include any relevant skills, experience, or certifications from my resume. Do not specifically mention the company or the role itself. Do not add hashtags or links.',
				},
			],
			temperature: 1,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		};

		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ` + resumeData.role[0].apiKey,
		};

		axios
			.post('https://api.openai.com/v1/chat/completions', requestData, { headers })
			.then((response) => {
				console.log(
					'Price: $' +
						(response.data.usage.completion_tokens * 0.000002 +
							response.data.usage.prompt_tokens * 0.0000015),
				);
				const generatedText = response.data.choices[0]?.message?.content;

				console.log('Generated Text: ' + generatedText);

				handleChange(arrayName, index, field, generatedText, subArrayName, subIndex);

				buttonRef.blur();
			})
			.catch((error) => {
				console.log(error);
				buttonRef.blur();
			});
	};

	return (
		<div className="no-scrollbar no-scrollbar::-webkit-scrollbar flex flex-1 flex-col gap-8 overflow-y-scroll scroll-smooth p-5">
			<Role resumeData={resumeData} handleChange={handleChange} />

			<Details resumeData={resumeData} handleChange={handleChange} />

			<Summary resumeData={resumeData} handleChange={handleChange} generateText={generateText} />

			<Experience
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
				removeBullet={removeBullet}
				generateText={generateText}
			/>

			<Education
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeItem={removeItem}
			/>

			<Projects
				resumeData={resumeData}
				setResumeData={setResumeData}
				handleChange={handleChange}
				removeBullet={removeBullet}
				removeItem={removeItem}
				generateText={generateText}
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
					className="group flex w-fit items-center gap-2 rounded-md border-0 bg-indigo-600 px-4 font-bold text-white shadow-sm"
					onClick={resetToDefault}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						className="h-6 w-6 stroke-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
						/>
					</svg>
					Reset Data
				</button>
			</div>
		</div>
	);
};

export default Editor;
