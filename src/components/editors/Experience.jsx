import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Experience = ({
	resumeData,
	setResumeData,
	handleChange,
	removeItem,
	removeBullet,
	generateText,
}) => {
	const addExperience = () => {
		const newExperience = {
			id: uuidv4(),
			company: '',
			title: '',
			location: '',
			startDate: '',
			endDate: '',
			description: [{ id: uuidv4(), bullet: '' }],
		};

		setResumeData({
			...resumeData,
			experience: [...resumeData.experience, newExperience],
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

	useEffect(() => {
		// Iterate through all experience items
		resumeData.experience.forEach((experienceItem, index) => {
			// Check if the last bullet is not empty
			const lastIndex = experienceItem.description.length - 1;
			const lastBullet = experienceItem.description[lastIndex].bullet;
			const isLastBulletNotEmpty = lastBullet.trim() !== '';

			if (isLastBulletNotEmpty) {
				addBullet('experience', index);
			}
		});
	}, [resumeData.experience]);

	return (
		<div className="card">
			<input
				value={resumeData.sectionTitles[0].experience}
				onChange={(e) => handleChange('sectionTitles', 0, 'experience', e.target.value)}
				className="card-title"
			></input>
			<p className="card-text">
				Show employers your past experience and what you have accomplished. Include simple, clear
				examples with action verbs to demonstrate your skills.
			</p>

			<div className="-mt-8">
				{resumeData.experience.map((experienceItem, index) => (
					<div key={experienceItem.id} className="item">
						<div className="flex justify-between">
							<h3 className="text-xl font-bold leading-7 text-gray-900">
								{' '}
								{experienceItem.company ? experienceItem.company : 'Untitled'}
							</h3>
							<button
								type="button"
								onClick={() => removeItem('experience', index)}
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

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`company${index}`} className="input-title">
									Company
								</label>
								<input
									type="text"
									name={`company${index}`}
									value={experienceItem.company}
									onChange={(e) => handleChange('experience', index, 'company', e.target.value)}
									className="input"
								/>
							</div>

							<div className="input-wrapper">
								<label htmlFor={`title${index}`} className="input-title">
									Title
								</label>
								<input
									type="text"
									name={`title${index}`}
									value={experienceItem.title}
									onChange={(e) => handleChange('experience', index, 'title', e.target.value)}
									className="input"
								/>
							</div>
						</div>

						<div className="inline-wrapper">
							<div className="input-wrapper">
								<label htmlFor={`location${index}`} className="input-title">
									Location
								</label>
								<input
									type="text"
									name={`location${index}`}
									value={experienceItem.location}
									onChange={(e) => handleChange('experience', index, 'location', e.target.value)}
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
									value={experienceItem.startDate}
									onChange={(e) => handleChange('experience', index, 'startDate', e.target.value)}
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
									value={experienceItem.endDate}
									onChange={(e) => handleChange('experience', index, 'endDate', e.target.value)}
									className="input"
								/>
							</div>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`description${index}`} className="input-title">
								Details
							</label>

							<div className="flex flex-col gap-4">
								{resumeData.experience[index].description.map((descriptionItem, subIndex) => (
									<div key={descriptionItem.id}>
										<div className="flex gap-4">
											<input
												type="text"
												name={`description${subIndex}`}
												value={descriptionItem.bullet}
												placeholder="Add Detail"
												onChange={(e) => {
													handleChange(
														'experience',
														index,
														'description',
														e.target.value,
														'bullet',
														subIndex,
													);
												}}
												onBlur={() => removeBullet('experience', index, subIndex)}
												className="input"
											/>
											<button
												onClick={(e) =>
													generateText(
														e.currentTarget,
														'experience',
														index,
														'description',
														descriptionItem.bullet,
														'bullet',
														subIndex,
													)
												}
												tabIndex="-1"
												className="input group w-fit bg-emerald-500 shadow-sm ring-0 focus:ring-2 focus:ring-emerald-600"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													className="h-6 w-6 stroke-white group-focus:hidden"
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
													className="hidden h-6 w-6 stroke-white group-focus:block group-focus:animate-spin"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
													/>
												</svg>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{resumeData.experience.length === 0 && <div className="item p-0 pt-2"></div>}

			<div className="mt-2 flex justify-end">
				<button
					type="button"
					onClick={addExperience}
					className="block w-fit rounded-md border-0 bg-indigo-600 px-4 py-2  font-bold text-white shadow-sm"
				>
					Add Experience
				</button>
			</div>
		</div>
	);
};

export default Experience;
