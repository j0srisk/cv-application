import axios from 'axios';

const Summary = ({ resumeData, setResumeData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setResumeData({
			...resumeData,
			[name]: value,
		});
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

	const generateText = (value) => {
		console.log(value);

		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: 'Here is my resume: {' + resumeContent + '}',
				},
				{
					role: 'user',
					content: 'Here is the role I am applying to' + resumeData.jobDescription,
				},
				{
					role: 'user',
					content:
						'Rewrite this ' +
						'summary' +
						' {' +
						value +
						'} in no more than {' +
						'500' +
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
			Authorization: `Bearer ` + resumeData.apiKey,
		};

		console.log(resumeData.apiKey);

		axios
			.post('https://api.openai.com/v1/chat/completions', requestData, { headers })
			.then((response) => {
				console.log(response);
				console.log(response.config.data);
				console.log(
					'Price: ' +
						(response.data.usage.completion_tokens * 0.000002 +
							response.data.usage.prompt_tokens * 0.0000015),
				);
				const generatedText = response.data.choices[0]?.message?.content;

				console.log(generatedText);

				setResumeData({
					...resumeData,
					summary: generatedText,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="card">
			<h2 className="card-title">Professional Summary</h2>

			<p className="card-text">
				Include your professional title, years of experience, and your most impressive achievements.
				Each achievement should be measurable and expressed in numbers.
			</p>

			<div className="input-wrapper">
				<label htmlFor="summary" className="input-title">
					Summary
				</label>
				<div className="relative">
					<textarea
						type="text"
						name="summary"
						rows="8"
						value={resumeData.summary}
						onChange={handleChange}
						className="input"
					/>
					<button
						onClick={() => generateText(resumeData.summary)}
						className="absolute bottom-2 right-2 flex h-fit w-fit gap-2 rounded-md border-0 bg-emerald-500 px-2 py-1 text-sm font-bold text-white shadow-sm"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							/>
						</svg>
						Re-Write with AI
					</button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
