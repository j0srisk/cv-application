const Role = ({ resumeData, handleChange }) => {
	return (
		<div className="card">
			<h2 className="card-title">Job Position</h2>

			<p className="card-text">
				Enter the relevant information about the position you are applying to.
			</p>

			{resumeData.role.map((roleItem, index) => (
				<div key={roleItem.id} className="flex flex-col gap-6">
					<div className="inline-wrapper">
						<div className="input-wrapper">
							<label htmlFor={`title${index}`} className="input-title">
								Job Title
							</label>
							<input
								type="text"
								name={`title${index}`}
								value={roleItem.title}
								onChange={(e) => handleChange('role', index, 'title', e.target.value)}
								className="input"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor={`company${index}`} className="input-title">
								Company Name
							</label>
							<input
								type="text"
								name={`company${index}`}
								value={roleItem.company}
								onChange={(e) => handleChange('role', index, 'company', e.target.value)}
								className="input"
							/>
						</div>
					</div>
					<div className="input-wrapper">
						<label htmlFor={`description${index}`} className="input-title">
							Job Description
						</label>
						<textarea
							type="text"
							name={`description${index}`}
							rows="5"
							value={roleItem.description}
							onChange={(e) => handleChange('role', index, 'description', e.target.value)}
							className="input no-scrollbar::-webkit-scrollbar no-scrollbar"
						/>
					</div>

					<div className="inline-wrapper">
						<div className="input-wrapper">
							<label htmlFor={`apiKey${index}`} className="input-title">
								OpenAI API Key
							</label>
							<input
								type="text"
								name={`apiKey${index}`}
								value={roleItem.apiKey}
								onChange={(e) => handleChange('role', index, 'apiKey', e.target.value)}
								className="input"
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Role;
