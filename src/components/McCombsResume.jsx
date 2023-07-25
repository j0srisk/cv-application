/* eslint-disable react/prop-types */
function McCombsResume({ resumeData }) {
    return(
        <div className="flex flex-col p-[.5in] w-full font-calibri">

            <div className="mb-[10.5pt]">
                <h1 className="text-[18pt] text-center font-bold font-calibri uppercase">{resumeData.firstName} {resumeData.lastName}</h1>
                <p className="text-[10.5pt] text-center font-calibri">{resumeData.email} • {resumeData.phone} • {resumeData.social}</p>
            </div> 
            
            <div className="mb-[10.5pt]">
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Summary</h2>
                <p className="text-[10.5pt] font-calibri mt-[5.25pt] leading-[1.15]">{resumeData.summary}</p>
            </div>

            <div>
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Experience</h2>
                <div className="mt-[5.25pt]">
                    {resumeData.experience.map((experience, index) => (
                        <div key={index} className="mb-[10.5pt]">
                            <div className="flex justify-between mb-[3.5pt]">
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{experience.company}</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                    <p className="text-[10.5pt] font-calibri italic leading-[1.15]">{experience.title};</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{experience.location}</p>
                                </div>
                                
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{experience.startDate} - {experience.endDate}</p>
                                </div>
                            </div>
                            {experience.description.map((description, subIndex) => (
                                <div key={subIndex} className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">•</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{description.bullet}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Education</h2>
                {resumeData.education.map((education, index) => (
                    <div key={index} className="mb-[10.5pt]">
                        <div className="flex gap-3 mt-[5.25pt]">
                            <div className="flex flex-col">
                                <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{education.institution}</p>
                                <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{education.school}</p>
                            </div>
                            <div className="flex flex-col flex-1">
                                <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.degree}</p>
                                <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.major}</p>
                                <p className="text-[10.5pt] font-calibri leading-[1.15]">Final GPA: {education.gpa}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.startDate} - {education.endDate}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mb-[10.5pt]">
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Academic Projects</h2>
                    <div className="mt-[5.25pt]">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="mb-[10.5pt]">
                                <div className="flex justify-between mb-[3.5pt]">
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{project.name}</p>
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                        <p className="text-[10.5pt] font-calibri italic leading-[1.15]">{project.client}</p>
                                    </div>
                                    
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{project.startDate} - {project.endDate}</p>
                                    </div>
                                </div>
                                {project.description.map((description, subIndex) => (
                                    <div key={subIndex} className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">•</p>
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{description.bullet}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-[10.5pt]">
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Awards</h2>
                    <div className="mt-[5.25pt]">
                        {resumeData.awards.map((award, index) => (
                            <div key={index}>
                                <div className="flex justify-between">
                                    <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">•</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{award.name}</p>
                                    </div>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{award.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-[10.5pt]">
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-[none]">Additional Information</h2>
                    <div className="mt-[5.25pt]">
                        {resumeData.additionalInfo.map((info, index) => (
                            <div key={index}>
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{info.name}:</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default McCombsResume;