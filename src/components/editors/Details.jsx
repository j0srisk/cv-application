import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Details = ({ resumeData, setResumeData, handleChange, removeBullet }) => {
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
		// Iterate through all detail items
		resumeData.details.forEach((detailItem, index) => {
			// Check if the last bullet is not empty
			const lastIndex = detailItem.description.length - 1;
			const lastBullet = detailItem.description[lastIndex].bullet;
			const isLastBulletNotEmpty = lastBullet.trim() !== '';

			if (isLastBulletNotEmpty) {
				addBullet('details', index);
			}
		});
	}, [resumeData.details]);

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
						<label htmlFor={`description${index}`} className="input-title">
							Contacts
						</label>

						<div className="flex flex-col gap-4">
							{resumeData.details[index].description.map((descriptionItem, subIndex) => (
								<div key={descriptionItem.id}>
									<input
										type="text"
										name={`description${subIndex}`}
										value={descriptionItem.bullet}
										placeholder="Add Contact Info"
										onChange={(e) =>
											handleChange(
												'details',
												index,
												'description',
												e.target.value,
												'bullet',
												subIndex,
											)
										}
										onBlur={() => removeBullet('details', index, subIndex)}
										className="input"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Details;
