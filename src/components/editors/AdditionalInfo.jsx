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
