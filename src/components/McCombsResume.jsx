import React from 'react';

const McCombsResume = React.forwardRef(({ resumeData }, ref) => {
	return (
		/*Entire Page*/
		<div
			ref={ref}
			className="font-calibri flex w-full flex-col gap-[10.5pt] overflow-hidden p-[.5in]"
		>
			{/*Basic Info*/}
			<div>
				{resumeData.details.map((detailItem) => (
					<div key={detailItem.id} className="">
						<p className="font-calibri text-center text-[18pt] font-bold uppercase leading-[1.15]">
							{detailItem.firstName} {detailItem.lastName}
						</p>
						<div className="flex justify-center">
							{detailItem.description.map((descriptionItem, subIndex) => (
								<div key={descriptionItem.id} className="">
									<div className="flex gap-1">
										{subIndex > 0 && descriptionItem.bullet != '' && (
											<p className="font-calibri pl-1 text-[10.5pt] leading-[1.15]">•</p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{descriptionItem.bullet}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			{/*Summary*/}
			{resumeData.summary[0].description && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].summary}
					</h2>
					{resumeData.summary.map((summaryItem) => (
						<div key={summaryItem.id} className="">
							<p className="font-calibri rendering-legibility mt-[5.25pt] text-[10.5pt] leading-[1.15]">
								{summaryItem.description}
							</p>
						</div>
					))}
				</div>
			)}

			{/*Experience*/}
			{resumeData.experience.length > 0 && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].experience}
					</h2>
					<div className="mt-[5.25pt] flex flex-col gap-[10.5pt]">
						{resumeData.experience.map((experienceItem) => (
							<div key={experienceItem.id} className="">
								<div className="mb-[3.5pt] flex justify-between">
									<div className="flex gap-1">
										<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
											{experienceItem.company}
										</p>
										{experienceItem.company && experienceItem.title && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]">-</p>
										)}
										<p className="font-calibri text-[10.5pt] italic leading-[1.15]">
											{experienceItem.title}
										</p>
										{experienceItem.title && experienceItem.location && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]">-</p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{experienceItem.location}
										</p>
									</div>

									<div className="flex gap-1">
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{experienceItem.startDate}
										</p>
										{experienceItem.startDate && experienceItem.endDate && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]"> - </p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{experienceItem.endDate}
										</p>
									</div>
								</div>
								{experienceItem.description.map((descriptionItem) => (
									<div key={descriptionItem.id} className="flex gap-1">
										{descriptionItem.bullet && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]">•</p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{descriptionItem.bullet}
										</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			)}

			{/*Education*/}
			{resumeData.education.length > 0 && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].education}
					</h2>
					<div className="mt-[5.25pt] flex flex-col gap-1">
						{resumeData.education.map((educationItem) => (
							<div key={educationItem.id} className="">
								<div className="flex justify-between gap-3">
									<div className="flex flex-col">
										<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
											{educationItem.institution}
										</p>
										<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
											{educationItem.school}
										</p>
									</div>
									<div className="flex flex-col">
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{educationItem.degree}
										</p>
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{educationItem.major}
										</p>
										{educationItem.gpa && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]">
												Final GPA: {educationItem.gpa}
											</p>
										)}
									</div>

									{educationItem.endDate && (
										<div className="flex gap-1">
											<p className="font-calibri text-[10.5pt] leading-[1.15]">
												{educationItem.startDate}
											</p>
											{educationItem.startDate && educationItem.endDate && (
												<p className="font-calibri text-[10.5pt] leading-[1.15]"> - </p>
											)}
											<p className="font-calibri text-[10.5pt] leading-[1.15]">
												{educationItem.endDate}
											</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/*Projects*/}
			{resumeData.projects.length > 0 && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].projects}
					</h2>
					<div className="rendering-precision mt-[5.25pt] flex flex-col gap-[10.5pt]">
						{resumeData.projects.map((projectItem) => (
							<div key={projectItem.id} className="">
								<div className="mb-[3.5pt] flex justify-between">
									<div className="flex gap-1">
										<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
											{projectItem.name}
										</p>
										{projectItem.name && projectItem.client && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]"> - </p>
										)}
										<p className="font-calibri text-[10.5pt] italic leading-[1.15]">
											{projectItem.client}
										</p>
									</div>

									<div className="flex gap-1">
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{projectItem.startDate}
										</p>
										{projectItem.startDate && projectItem.endDate && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]"> - </p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{projectItem.endDate}
										</p>
									</div>
								</div>
								{projectItem.description.map((descriptionItem) => (
									<div key={descriptionItem.id} className="flex gap-1">
										{descriptionItem.bullet && (
											<p className="font-calibri text-[10.5pt] leading-[1.15]">•</p>
										)}
										<p className="font-calibri text-[10.5pt] leading-[1.15]">
											{descriptionItem.bullet}
										</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			)}

			{/*Awards*/}
			{resumeData.awards.length > 0 && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].awards}
					</h2>
					<div className="mt-[5.25pt]">
						{resumeData.awards.map((awardItem) => (
							<div key={awardItem.id}>
								<div className="flex justify-between">
									<div className="flex gap-1">
										<p className="font-calibri text-[10.5pt] leading-[1.15]">•</p>
										<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
											{awardItem.name}
										</p>
									</div>
									<p className="font-calibri text-[10.5pt] leading-[1.15]">{awardItem.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/*Additional Information*/}
			{resumeData.additionalInfo.length > 0 && (
				<div>
					<h2 className="font-calibri w-full border-b-[1px] border-black text-[10.5pt] font-bold uppercase leading-none">
						{resumeData.sectionTitles[0].additionalInfo}
					</h2>
					<div className="mt-[5.25pt]">
						{resumeData.additionalInfo.map((additionalInfoItem) => (
							<div key={additionalInfoItem.id}>
								<div className="flex gap-1">
									<p className="font-calibri text-[10.5pt] font-bold leading-[1.15]">
										{additionalInfoItem.name}:
									</p>
									<p className="font-calibri text-[10.5pt] leading-[1.15]">
										{additionalInfoItem.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
});

McCombsResume.displayName = 'McCombsResume';

export default McCombsResume;
