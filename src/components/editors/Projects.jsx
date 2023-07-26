/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

function Projects({ resumeData, setResumeData, handleChange, removeItem }) {
	const addProject = () => {
		const newProject = {
			id: uuidv4(),
			name: '',
			client: '',
			startDate: '',
			endDate: '',
			description: [{ bullet: '' }],
		};

		setResumeData({
			...resumeData,
			projects: [...resumeData.projects, newProject],
		});
	};

	const addBullet = (arrayName, index) => {
		const updatedArray = [...resumeData[arrayName]];
		const newBullet = {
			id: uuidv4(),
			bullet: '',
		};

		updatedArray[index].description.push(newBullet);

		setResumeData({
			...resumeData,
			[arrayName]: updatedArray,
		});
	};

	return (
		<div className="card">
			<h2 className="card-title">Projects</h2>
			<p className="card-text">List your most recent projects and achievements.</p>

			<div className="-mt-8">
				{resumeData.projects.map((projectItem, index) => (
					<div key={projectItem.id} className="item">
						<div className="flex justify-between">
							<h3 className="text-xl font-bold leading-7 text-gray-900">
								{' '}
								{projectItem.name ? projectItem.name : 'Untitled'}
							</h3>
							<button
								type="button"
								onClick={() => removeItem('projects', index)}
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
							<label htmlFor={`name${index}`} className="input-title">
								Name
							</label>
							<input
								type="text"
								name={`name${index}`}
								value={projectItem.name}
								onChange={(e) => handleChange('projects', index, 'name', e.target.value)}
								className="input"
							/>
						</div>

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`client${index}`} className="input-title">
									Client
								</label>
								<input
									type="text"
									name={`client${index}`}
									value={projectItem.client}
									onChange={(e) => handleChange('projects', index, 'client', e.target.value)}
									className="input"
								/>
							</div>
						</div>

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`startDate${index}`} className="input-title">
									Start Date
								</label>
								<input
									type="text"
									name={`startDate${index}`}
									value={projectItem.startDate}
									onChange={(e) => handleChange('projects', index, 'startDate', e.target.value)}
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
									value={projectItem.endDate}
									onChange={(e) => handleChange('projects', index, 'endDate', e.target.value)}
									className="input"
								/>
							</div>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`description${index}`} className="input-title">
								Details
							</label>

							<div className="flex flex-col gap-4">
								{resumeData.projects[index].description.map((descriptionItem, subIndex) => (
									<div key={subIndex}>
										<div className="flex gap-4">
											<input
												type="text"
												name={`description${subIndex}`}
												value={descriptionItem.bullet}
												onChange={(e) =>
													handleChange(
														'projects',
														index,
														'description',
														e.target.value,
														'bullet',
														subIndex,
													)
												}
												className="input"
											/>

											{resumeData.projects[index].description.length > 1 && (
												<button
													onClick={() => removeItem('projects', index, 'description', subIndex)}
													className="input w-fit"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="gray"
														className="h-5 w-5"
													>
														<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
													</svg>
												</button>
											)}
										</div>
									</div>
								))}
							</div>

							<button onClick={() => addBullet('projects', index)} className="input mt-4">
								Add Detail
							</button>
						</div>
					</div>
				))}
			</div>

			{resumeData.projects.length === 0 && <div className="item p-0 pt-2"></div>}

			<div className="mt-2 flex justify-end">
				<button
					type="button"
					onClick={addProject}
					className="block w-fit rounded-md border-0 bg-indigo-600 px-4 py-2  font-bold text-white shadow-sm"
				>
					Add Project
				</button>
			</div>
		</div>
	);
}

export default Projects;
