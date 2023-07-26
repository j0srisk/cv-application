import { v4 as uuidv4 } from 'uuid';

const AdditionalInfo = ({ resumeData, setResumeData, handleChange, removeItem }) => {
	const addAdditionalInfo = () => {
		const newAdditionalInfo = {
			id: uuidv4(),
			name: '',
			description: '',
		};

		setResumeData({
			...resumeData,
			additionalInfo: [...resumeData.additionalInfo, newAdditionalInfo],
		});
	};

	return (
		<div className="card">
			<h2 className="card-title">Additional Information</h2>

			<p className="card-text">
				Include any additional information that you think is relevant to the job you are applying
				for.
			</p>

			<div className="-mt-8">
				{resumeData.additionalInfo.map((additionalInfoItem, index) => (
					<div key={additionalInfoItem.id} className="item">
						<div className="flex justify-between">
							<h3 className="item-title">
								{' '}
								{additionalInfoItem.name ? additionalInfoItem.name : 'Untitled'}
							</h3>

							<button
								type="button"
								onClick={() => removeItem('additionalInfo', index)}
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
								value={additionalInfoItem.name}
								onChange={(e) => handleChange('additionalInfo', index, 'name', e.target.value)}
								className="input"
							/>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`description${index}`} className="input-title">
								Details
							</label>
							<input
								type="text"
								name={`description${index}`}
								value={additionalInfoItem.description}
								onChange={(e) =>
									handleChange('additionalInfo', index, 'description', e.target.value)
								}
								className="input"
							/>
						</div>
					</div>
				))}
			</div>

			{resumeData.additionalInfo.length === 0 && <div className="item p-0 pt-2"></div>}

			<div className="mt-2 flex justify-end">
				<button
					type="button"
					onClick={addAdditionalInfo}
					className="block w-fit rounded-md border-0 bg-indigo-600 px-4 py-2  font-bold text-white shadow-sm"
				>
					Add Additional Information
				</button>
			</div>
		</div>
	);
};

export default AdditionalInfo;
