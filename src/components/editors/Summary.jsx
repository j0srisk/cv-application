import { useState } from 'react';

const Summary = ({ resumeData, handleChange, generateText }) => {
	const [textareaHeight, setTextareaHeight] = useState(0);

	const handleTextareaInput = (e) => {
		e.target.style.height = 'auto'; // Reset the height to recalculate scroll height
		e.target.style.height = e.target.scrollHeight + 'px'; // Set the height to the scroll height
		setTextareaHeight(e.target.scrollHeight); // Update state to manage changes
	};

	return (
		<div className="card">
			<input
				value={resumeData.sectionTitles[0].summary}
				onChange={(e) => handleChange('sectionTitles', 0, 'summary', e.target.value)}
				className="card-title"
			></input>

			<p className="card-text">
				Include your professional title, years of experience, and your most impressive achievements.
				Each achievement should be measurable and expressed in numbers.
			</p>

			{resumeData.summary.map((summaryItem, index) => (
				<div key={summaryItem.id} className="flex flex-col gap-6">
					<div className="input-wrapper">
						<label htmlFor={`summary${index}`} className="input-title">
							Summary
						</label>
						<div className="relative">
							<textarea
								type="text"
								name={`summary${index}`}
								rows="8"
								value={summaryItem.description}
								onChange={(e) => handleChange('summary', index, 'description', e.target.value)}
								onInput={handleTextareaInput}
								className="input pb-8"
							/>
							<button
								tabIndex={-1}
								onClick={(e) =>
									generateText(
										e.currentTarget,
										'summary',
										index,
										'description',
										summaryItem.description,
									)
								}
								className="group absolute bottom-2 right-2 flex h-fit w-fit gap-2 rounded-md border-0 bg-emerald-500 px-2 py-1 text-sm font-bold text-white shadow-sm ring-0 focus:ring-2 focus:ring-inset focus:ring-emerald-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									className="h-5 w-5 stroke-white group-focus:hidden"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									className="hidden h-5 w-5 stroke-white group-focus:block group-focus:animate-spin"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
									/>
								</svg>
								Re-Write with AI
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Summary;
