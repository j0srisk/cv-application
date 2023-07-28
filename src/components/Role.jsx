const Role = ({ resumeData, setResumeData }) => {
	const handleChange = (e) => {
		console.log(e.target);
		const { name, value } = e.target;
		setResumeData({
			...resumeData,
			[name]: value,
		});
	};

	console.log(resumeData.apiKey);

	return (
		<div className="card">
			<h2 className="card-title">Job Position</h2>

			<p className="card-text">
				Enter the relevant information about the position you're applying to
			</p>

			<div className="inline-wrapper">
				<div className="input-wrapper">
					<label htmlFor="jobTitle" className="input-title">
						Job Title
					</label>
					<input
						type="text"
						name="jobTitle"
						value={resumeData.jobTitle}
						onChange={handleChange}
						className="input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="companyName" className="input-title">
						Company Name
					</label>
					<input
						type="text"
						name="companyName"
						value={resumeData.companyName}
						onChange={handleChange}
						className="input"
					/>
				</div>
			</div>
			<div className="input-wrapper">
				<label htmlFor="jobDescription" className="input-title">
					Job Description
				</label>
				<textarea
					type="text"
					name="jobDescription"
					rows="5"
					value={resumeData.jobDescription}
					onChange={handleChange}
					className="input"
				/>
			</div>

			<div className="inline-wrapper">
				<div className="input-wrapper">
					<label htmlFor="apiKey" className="input-title">
						API Key
					</label>
					<input
						type="text"
						name="apiKey"
						value={resumeData.apiKey}
						onChange={handleChange}
						className="input"
					/>
				</div>
			</div>
		</div>
	);
};

export default Role;
