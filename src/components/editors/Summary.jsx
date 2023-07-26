import axios from 'axios';

const Summary = ({ resumeData, setResumeData }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setResumeData({
			...resumeData,
			[name]: value,
		});
	};

	const generateSummary = () => {
		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content:
						'Rewrite this summary section of my resume to be tailored for a' +
						resumeData.jobTitle +
						'position:' +
						resumeData.summary,
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
			Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
		};

		axios
			.post('https://api.openai.com/v1/chat/completions', requestData, { headers })
			.then((response) => {
				console.log(response);
				console.log(response.data.choices[0]?.message?.content);
				const generatedSummary = response.data.choices[0]?.message?.content;

				setResumeData({
					...resumeData,
					summary: generatedSummary || 'Error generating summary',
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
						onClick={generateSummary}
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
