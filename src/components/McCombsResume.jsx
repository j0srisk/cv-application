/* eslint-disable react/prop-types */
function McCombsResume({ resumeData }) {
    return(
        /*Entire Page*/
        <div className="flex flex-col gap-[10.5pt] p-[.5in] w-full font-calibr overflow-hidden">

            {/*Basic Info*/}
            <div>
                <p className="text-[18pt] font-bold text-center font-calibri uppercase leading-[1.15]">{resumeData.firstName} {resumeData.lastName}</p>
                <p className="text-[10.5pt] font-calibri text-center leading-[1.15]">{resumeData.email} • {resumeData.phone} • {resumeData.social}</p>
            </div> 

            {/*Summary*/}
            {resumeData.summary && (
                <div>
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Summary</h2>
                    <p className="text-[10.5pt] font-calibri mt-[5.25pt] leading-[1.15]">{resumeData.summary}</p>
                </div>
            )}

            {/*Experience*/}
            {resumeData.experience.length > 0 && (
                <div>
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Experience</h2>
                    <div className="flex flex-col mt-[5.25pt] gap-[10.5pt]">
                        {resumeData.experience.map((experience, index) => (
                            <div key={index} className="">
                                <div className="flex justify-between mb-[3.5pt]">
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{experience.company}</p>
                                        {experience.company  && experience.title &&(
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]">-</p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri italic leading-[1.15]">{experience.title}</p>
                                        {experience.title  && experience.location &&(
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]">-</p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{experience.location}</p>
                                    </div>
                                    
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{experience.startDate}</p>
                                        {experience.startDate && experience.endDate && (
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{experience.endDate}</p>
                                    </div>
                                </div>
                                {experience.description.map((description, subIndex) => (
                                    <div key={subIndex} className="flex gap-1">
                                        {description.bullet  && (
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]">•</p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{description.bullet}</p>
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
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Education</h2>
                    <div className="flex flex-col gap-1 mt-[5.25pt]">
                    {resumeData.education.map((education, index) => (
                        <div key={index} className="">
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/3">
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{education.institution}</p>
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{education.school}</p>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.degree}</p>
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.major}</p>
                                    {education.gpa && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">Final GPA: {education.gpa}</p>
                                    )}
                                </div>
                                    
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.startDate}</p>
                                    {education.startDate && education.endDate && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15]">{education.endDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )}

            {/*Projects*/}
            {resumeData.projects.length > 0 && (
                <div>
                    <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none">Academic Projects</h2>
                    <div className="flex flex-col gap-[10.5pt] mt-[5.25pt]">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="">
                                <div className="flex justify-between mb-[3.5pt]">
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri font-bold leading-[1.15]">{project.name}</p>
                                        {project.name && project.client && (
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri italic leading-[1.15]">{project.client}</p>
                                    </div>
                                    
                                    <div className="flex gap-1">
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{project.startDate}</p>
                                        {project.startDate && project.endDate && (
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]"> - </p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{project.endDate}</p>
                                    </div>
                                </div>
                                {project.description.map((description, subIndex) => (
                                    <div key={subIndex} className="flex gap-1">
                                        {description.bullet  && (
                                            <p className="text-[10.5pt] font-calibri leading-[1.15]">•</p>
                                        )}
                                        <p className="text-[10.5pt] font-calibri leading-[1.15]">{description.bullet}</p>
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
            )}
                
            {/*Additional Information*/}
            {resumeData.additionalInfo.length > 0 && (
                <div>
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
            )}
            
        </div>
    )
}

export default McCombsResume;