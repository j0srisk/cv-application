const Details = ({ resumeData, handleChange }) => {
	return (
		<div className="card">
			<h2 className="card-title">Personal Details</h2>

			<p className="card-text">
				Personal details such as name and job title are essential in a resume to give the recruiter
				a quick overview of the candidate.
			</p>

			{resumeData.details.map((detailItem, index) => (
				<div key={detailItem.id} className="flex flex-col gap-6">
					<div className="inline-wrapper">
						<div className="input-wrapper">
							<label htmlFor={`firstName${index}`} className="input-title">
								First name
							</label>
							<input
								type="text"
								name={`firstName${index}`}
								value={detailItem.firstName}
								onChange={(e) => handleChange('details', index, 'firstName', e.target.value)}
								className="input"
							/>
						</div>

						<div className="input-wrapper">
							<label htmlFor={`lastName${index}`} className="input-title">
								Last name
							</label>
							<input
								type="text"
								name={`lastName${index}`}
								value={detailItem.lastName}
								onChange={(e) => handleChange('details', index, 'lastName', e.target.value)}
								className="input"
							/>
						</div>
					</div>

					<div className="input-wrapper">
						<label htmlFor={`email${index}`} className="input-title">
							Email address
						</label>
						<input
							type="text"
							name={`email${index}`}
							value={detailItem.email}
							onChange={(e) => handleChange('details', index, 'email', e.target.value)}
							className="input"
						/>
					</div>

					<div>
						<label htmlFor={`phone${index}`} className="input-title">
							Phone Number
						</label>
						<input
							type="text"
							name={`phone${index}`}
							value={detailItem.phone}
							onChange={(e) => handleChange('details', index, 'phone', e.target.value)}
							className="input"
						/>
					</div>

					<div>
						<label htmlFor={`social${index}`} className="input-title">
							Social (LinkedIn)
						</label>
						<input
							type="text"
							name={`social${index}`}
							value={detailItem.social}
							onChange={(e) => handleChange('details', index, 'social', e.target.value)}
							className="input"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Details;
