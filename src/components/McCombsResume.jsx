/* eslint-disable react/prop-types */
import React from 'react';

const McCombsResume = React.forwardRef(({ resumeData }, ref) => {
    return (
        /*Entire Page*/
        <div ref={ref} className="flex flex-col gap-[10.5pt] p-[.5in] w-full font-calibr overflow-hidden">
    
        {/*Basic Info*/}
        <div>
            <p className="text-[18pt] font-bold text-center font-calibri uppercase leading-[1.15] rendering-precision">{resumeData.firstName} {resumeData.lastName}</p>
            <p className="text-[10.5pt] font-calibri text-center leading-[1.15] rendering-precision">{resumeData.email} • {resumeData.phone} • {resumeData.social}</p>
        </div> 
    
        {/*Summary*/}
        {resumeData.summary && (
            <div>
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Summary</h2>
                <p className="text-[10.5pt] font-calibri mt-[5.25pt] leading-[1.15] rendering-legibility rendering-precision">{resumeData.summary}</p>
            </div>
        )}
    
        {/*Experience*/}
        {resumeData.experience.length > 0 && (
            <div>
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Experience</h2>
                <div className="flex flex-col mt-[5.25pt] gap-[10.5pt]">
                    {resumeData.experience.map((experience, index) => (
                        <div key={index} className="">
                            <div className="flex justify-between mb-[3.5pt]">
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15] rendering-precision">{experience.company}</p>
                                    {experience.company  && experience.title &&(
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">-</p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri italic leading-[1.15] rendering-precision">{experience.title}</p>
                                    {experience.title  && experience.location &&(
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">-</p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{experience.location}</p>
                                </div>
                                
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{experience.startDate}</p>
                                    {experience.startDate && experience.endDate && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision"> - </p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{experience.endDate}</p>
                                </div>
                            </div>
                            {experience.description.map((description, subIndex) => (
                                <div key={subIndex} className="flex gap-1">
                                    {description.bullet  && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">•</p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{description.bullet}</p>
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
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Education</h2>
                <div className="flex flex-col gap-1 mt-[5.25pt]">
                {resumeData.education.map((education, index) => (
                    <div key={index} className="">
                        <div className="flex gap-3">
                            <div className="flex flex-col w-1/3">
                                <p className="text-[10.5pt] font-calibri font-bold leading-[1.15] rendering-precision">{education.institution}</p>
                                <p className="text-[10.5pt] font-calibri font-bold leading-[1.15] rendering-precision">{education.school}</p>
                            </div>
                            <div className="flex flex-col flex-1">
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{education.degree}</p>
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{education.major}</p>
                                {education.gpa && (
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">Final GPA: {education.gpa}</p>
                                )}
                            </div>
                                
                            <div className="flex gap-1">
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{education.startDate}</p>
                                {education.startDate && education.endDate && (
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision"> - </p>
                                )}
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{education.endDate}</p>
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
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Academic Projects</h2>
                <div className="flex flex-col gap-[10.5pt] mt-[5.25pt] rendering-precision">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="">
                            <div className="flex justify-between mb-[3.5pt]">
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri font-bold leading-[1.15] rendering-precision">{project.name}</p>
                                    {project.name && project.client && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision"> - </p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri italic leading-[1.15] rendering-precision">{project.client}</p>
                                </div>
                                
                                <div className="flex gap-1">
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{project.startDate}</p>
                                    {project.startDate && project.endDate && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision"> - </p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{project.endDate}</p>
                                </div>
                            </div>
                            {project.description.map((description, subIndex) => (
                                <div key={subIndex} className="flex gap-1">
                                    {description.bullet  && (
                                        <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">•</p>
                                    )}
                                    <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{description.bullet}</p>
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
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Awards</h2>
                <div className="mt-[5.25pt]">
                    {resumeData.awards.map((award, index) => (
                        <div key={index}>
                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">•</p>
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{award.name}</p>
                                </div>
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{award.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
            
        {/*Additional Information*/}
        {resumeData.additionalInfo.length > 0 && (
            <div>
                <h2 className="text-[10.5pt] font-bold font-calibri uppercase border-b-[1px] border-black w-full leading-none rendering-precision">Additional Information</h2>
                <div className="mt-[5.25pt]">
                    {resumeData.additionalInfo.map((info, index) => (
                        <div key={index}>
                            <div className="flex gap-1">
                                <p className="text-[10.5pt] font-calibri font-bold leading-[1.15] rendering-precision">{info.name}:</p>
                                <p className="text-[10.5pt] font-calibri leading-[1.15] rendering-precision">{info.description}</p>
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