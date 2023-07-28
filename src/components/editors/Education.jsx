import { v4 as uuidv4 } from 'uuid';

const Editor = ({ resumeData, setResumeData, removeItem, handleChange }) => {
	const addEducation = () => {
		const newEducation = {
			id: uuidv4(),
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
					<div key={educationItem.id} className="item">
						<div className="flex justify-between">
							<h3 className="item-title">
								{' '}
								{educationItem.institution ? educationItem.institution : 'Untitled'}
							</h3>

							<button
								type="button"
								onClick={() => removeItem('education', index)}
								className="text-sm font-bold text-gray-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									className="h-6 w-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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
								name={`institution${index}`}
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
};

export default Editor;
