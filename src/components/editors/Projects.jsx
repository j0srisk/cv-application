import { v4 as uuidv4 } from 'uuid';

const Projects = ({ resumeData, setResumeData, handleChange, removeItem }) => {
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

											<button className="input w-fit bg-emerald-500 shadow-sm ring-0">
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
														d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
													/>
												</svg>
											</button>

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
};

export default Projects;
