/* eslint-disable react/prop-types */
function Editor({ resumeData, setResumeData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...resumeData.education];
        updatedEducation[index][field] = value;
        setResumeData({
          ...resumeData,
          education: updatedEducation,
        });
    };

    const addEducation = () => {
        // Create a new empty education item
        const newEducation = {
            institution: '',
            school: '',
            degree: '',
            date: '',
            gpa: '',
        };
    
        // Add the new institution to the existing education array
        setResumeData({
          ...resumeData,
          education: [...resumeData.education, newEducation],
        });
      };

    const removeEducation = (index) => {
        //removes education from array
        const updatedEducation = [...resumeData.education];
        updatedEducation.splice(index, 1);

        setResumeData({
            ...resumeData,
            education: updatedEducation,
        });
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedExperience = [...resumeData.experience];
        updatedExperience[index][field] = value;
        setResumeData({
            ...resumeData,
            experience: updatedExperience,
        });
    };

    const addExperience = () => {
        // Create a new empty experience item
        const newExperience = {
            company: '',
            title: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        };
        
        // Add the new experience to the existing experience array
        setResumeData({
            ...resumeData,
            experience: [...resumeData.experience, newExperience],
        });
    };

    const removeExperience = (index) => {
        //removes experience from array
        const updatedExperience = [...resumeData.experience];
        updatedExperience.splice(index, 1);
        
        setResumeData({
            ...resumeData,
            experience: updatedExperience,
        });
    };


    
    

    return(
    <div className="flex flex-1 flex-col gap-8 p-5 overflow-y-scroll no-scrollbar">

        <div className="card">
            <div>
                <h2 className="text-3xl font-bold leading-7 text-gray-900">Personal Details</h2>
            </div>
            
            <p className="section-text">Personal details such as name and job title are essential in a resume to give the recruiter a quick overview of the candidate.</p>

            <div className="flex gap-8">
                    <div className="input-wrapper">
                        <label htmlFor="firstName" className="input-title">
                            First name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={resumeData.firstName}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="lastName" className="input-title">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={resumeData.lastName}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="email" className="input-title">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={resumeData.email}
                        onChange={handleChange}
                        className="input"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="input-title">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={resumeData.phone}
                        onChange={handleChange}
                        className="input"
                    />
                </div>

                <div>
                    <label htmlFor="social" className="input-title">
                        Social (LinkedIn)
                    </label>
                    <input
                        type="text"
                        name="social"
                        value={resumeData.social}
                        onChange={handleChange}
                        className="input"
                    />
                </div>

        </div>

        <div className="card">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">Professional Summary</h2>
            <p className="section-text">Include your professional title, years of experience, and your most impressive achievements. Each achievement should be measurable and expressed in numbers.</p>

                    <textarea
                        type="text"
                        name="summary"
                        rows="5"
                        value={resumeData.summary}
                        onChange={handleChange}
                        className="input"
                    />

        </div>

        <div className="card">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">Education</h2>
            <p className="section-text">Add the name of your school, where it is located, what degree you obtained, your field of study, and your graduation year.</p>

            <div className="-mt-8">
                {/* Map through each education item in the education array */}
                {resumeData.education.map((educationItem, index) => (
                    <div key={index}>
                        <div className="flex flex-col gap-6 p-8 -mx-8 border-b border-gray-300">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold leading-7 text-gray-900"> {educationItem.institution ? educationItem.institution : "Untitled"}</h3>
                                <button
                                    type="button"
                                    onClick={() => removeEducation(index)}
                                    className="text-sm text-red-600 font-bold">
                                    Delete
                                </button>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor={`institution${index}`} className="input-title">
                                    Institution
                                </label>
                                <input
                                    type="text"
                                    name={`school${index}`}
                                    value={educationItem.institution}
                                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                    className="input"
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor={`school${index}`} className="input-title">
                                    School
                                </label>
                                <input
                                    type="text"
                                    name={`school${index}`}
                                    value={educationItem.school}
                                    onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                                    className="input"
                                />
                            </div>

                            <div className="flex gap-6">
                                <div className="input-wrapper">
                                    <label htmlFor={`degree${index}`} className="input-title">
                                        Degree
                                    </label>
                                    <input
                                        type="text"
                                        name={`degree${index}`}
                                        value={educationItem.degree}
                                        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`major${index}`} className="input-title">
                                        Major
                                    </label>
                                    <input
                                        type="text"
                                        name={`major${index}`}
                                        value={educationItem.major}
                                        onChange={(e) => handleEducationChange(index, 'major', e.target.value)}
                                        className="input"
                                    />    
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="input-wrapper">
                                    <label htmlFor={`gpa${index}`} className="input-title">
                                        Grade Point Average (GPA)
                                    </label>
                                    <input
                                        type="text"
                                        name={`gpa${index}`}
                                        value={educationItem.gpa}
                                        onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`startDate${index}`} className="input-title">
                                        Start Date
                                    </label>
                                    <input
                                        type="text"
                                        name={`startDate${index}`}
                                        value={educationItem.startDate}
                                        onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`endDate${index}`} className="input-title">
                                        End Date
                                    </label>
                                    <input
                                        type="text"
                                        name={`endDate${index}`}
                                        value={educationItem.endDate}
                                        onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                                        className="input"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-2">
            <button 
                type="button"
                onClick={addEducation}
                className="block w-fit rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                Add Education
            </button>
            </div>
        </div>

        <div className="card">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">Experience</h2>
            <p className="section-text">Show employers your past experience and what you have accomplished. Include simple, clear examples with action verbs to demonstrate your skills.</p>

            <div className="-mt-8">
                {/* Map through each education item in the education array */}
                {resumeData.experience.map((experienceItem, index) => (
                    <div key={index}>
                        <div className="flex flex-col gap-6 p-8 -mx-8 border-b border-gray-300">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold leading-7 text-gray-900"> {experienceItem.company ? experienceItem.company : "Untitled"}</h3>
                                <button
                                    type="button"
                                    onClick={() => removeEducation(index)}
                                    className="text-sm text-red-600 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                        </svg>
                                </button>
                            </div>
                            <div className="flex gap-6">
                                <div className="input-wrapper">
                                    <label htmlFor={`company${index}`} className="input-title">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name={`company${index}`}
                                        value={experienceItem.company}
                                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`title${index}`} className="input-title">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name={`title${index}`}
                                        value={experienceItem.title}
                                        onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="input-wrapper">
                                    <label htmlFor={`location${index}`} className="input-title">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name={`location${index}`}
                                        value={experienceItem.location}
                                        onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`startDate${index}`} className="input-title">
                                        Start Date
                                    </label>
                                    <input
                                        type="text"
                                        name={`startDate${index}`}
                                        value={experienceItem.startDate}
                                        onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`endDate${index}`} className="input-title">
                                        End Date
                                    </label>
                                    <input
                                        type="text"
                                        name={`endDate${index}`}
                                        value={experienceItem.endDate}
                                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                                        className="input"
                                    />
                                </div>
                            </div>
                                
                            <div className="input-wrapper" >
                                <label htmlFor={`description${index}`} className="input-title">
                                    Description
                                </label>
                                <div className="flex flex-col gap-4">
                                {resumeData.experience[index].description.map((descriptionItem, index) => (
                                    <div key={index}>
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                name={`description${index}`}
                                                value={descriptionItem.bullet}
                                                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                                className="input"
                                            />

                                            <button className="input w-fit">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                <button className="input mt-4">
                                        Add Bullet Point
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-2">
            <button 
                type="button"
                onClick={addExperience}
                className="block w-fit rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                Add Experience
            </button>
            </div>
        </div>

    </div>
    )
}

export default Editor;