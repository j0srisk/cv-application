/* eslint-disable react/prop-types */
function Editor({ resumeData, setResumeData, removeItem, handleChange }) {
	const addEducation = () => {
		const newEducation = {
			institution: '',
			school: '',
			degree: '',
			date: '',
			gpa: '',
		};

		// Add the new institution to the existing education array
		setResumeData({
			...resumeData,
			education: [...resumeData.education, newEducation],
		});
	};

	return (
		<div className="card">
			<h2 className="card-title">Education</h2>

			<p className="card-text">
				Add the name of your school, where it is located, what degree you obtained, your field of
				study, and your graduation year.
			</p>

			<div className="-mt-8">
				{resumeData.education.map((educationItem, index) => (
					<div key={index} className="item">
						<div className="flex justify-between">
							<h3 className="item-title">
								{' '}
								{educationItem.institution ? educationItem.institution : 'Untitled'}
							</h3>

							<button
								type="button"
								onClick={() => removeItem('education', index)}
								className="text-sm font-bold text-red-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="gray"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`institution${index}`} className="input-title">
								Institution
							</label>
							<input
								type="text"
								name={`school${index}`}
								value={educationItem.institution}
								onChange={(e) => handleChange('education', index, 'institution', e.target.value)}
								className="input"
							/>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`school${index}`} className="input-title">
								School
							</label>
							<input
								type="text"
								name={`school${index}`}
								value={educationItem.school}
								onChange={(e) => handleChange('education', index, 'school', e.target.value)}
								className="input"
							/>
						</div>

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`degree${index}`} className="input-title">
									Degree
								</label>
								<input
									type="text"
									name={`degree${index}`}
									value={educationItem.degree}
									onChange={(e) => handleChange('education', index, 'degree', e.target.value)}
									className="input"
								/>
							</div>

							<div className="input-wrapper">
								<label htmlFor={`major${index}`} className="input-title">
									Major
								</label>
								<input
									type="text"
									name={`major${index}`}
									value={educationItem.major}
									onChange={(e) => handleChange('education', index, 'major', e.target.value)}
									className="input"
								/>
							</div>
						</div>

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`gpa${index}`} className="input-title">
									GPA
								</label>
								<input
									type="text"
									name={`gpa${index}`}
									value={educationItem.gpa}
									onChange={(e) => handleChange('education', index, 'gpa', e.target.value)}
									className="input"
								/>
							</div>

							<div className="input-wrapper">
								<label htmlFor={`startDate${index}`} className="input-title">
									Start Date
								</label>
								<input
									type="text"
									name={`startDate${index}`}
									value={educationItem.startDate}
									onChange={(e) => handleChange('education', index, 'startDate', e.target.value)}
									className="input"
								/>
							</div>

							<div className="input-wrapper">
								<label htmlFor={`endDate${index}`} className="input-title">
									End Date
								</label>
								<input
									type="text"
									name={`endDate${index}`}
									value={educationItem.endDate}
									onChange={(e) => handleChange('education', index, 'endDate', e.target.value)}
									className="input"
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			{resumeData.education.length === 0 && <div className="item p-0 pt-2"></div>}

			<div className="mt-2 flex justify-end">
				<button
					type="button"
					onClick={addEducation}
					className="block w-fit rounded-md border-0 bg-indigo-600 px-4 py-2  font-bold text-white shadow-sm"
				>
					Add Education
				</button>
			</div>
		</div>
	);
}

export default Editor;
