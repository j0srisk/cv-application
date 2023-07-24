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
        <div className="section">
            <h2 className="section-title">Personal Details</h2>
            <p className="section-text">Personal details such as name and job title are essential in a resume to give the recruiter a quick overview of the candidate.</p>

        
            <div className="card">
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
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        </div>
        
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Professional Summary</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Include your professional title, years of experience, and your most impressive achievements. Each achievement should be measurable and expressed in numbers.</p>

            
            <div className="mt-8 flex flex-col gap-x-6 gap-y-6 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 p-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="input-title">
                            Summary
                    </label>
                    <textarea
                        type="text"
                        name="summary"
                        rows="5"
                        value={resumeData.summary}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>

        <div className="section">
            <h2 className="section-title">Education</h2>
            <p className="section-text">Add the name of your school, where it is located, what degree you obtained, your field of study, and your graduation year.</p>

            <div className="">
                {/* Map through each education item in the education array */}
                {resumeData.education.map((educationItem, index) => (
                    <div key={index}>
                        <div className="card">
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

                            <button 
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="block w-full rounded-md shadow-sm border-0 px-4 py-2 bg-red-600 text-white font-bold">
                                Remove Education
                            </button>

                            {/* Add other input fields for degree, date, and GPA similarly */}
                            {/* ... */}
                        </div>
                    </div>
                ))}
            </div>

            <button 
                type="button"
                onClick={addEducation}
                className="block w-full mt-6 rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                Add Education
            </button>
        </div>

        <div className="section">
            <h2 className="section-title">Experience</h2>
            <p className="section-text">Show employers your past experience and what you have accomplished. Include simple, clear examples with action verbs to demonstrate your skills.</p>

            <div className="">
                {/* Map through each education item in the education array */}
                {resumeData.experience.map((experienceItem, index) => (
                    <div key={index}>
                        <div className="card">

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
                                <textarea
                                    type="text"
                                    name={`description${index}`}
                                    rows="5"
                                    value={experienceItem.description}
                                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                    className="input"
                                />
                            </div>

                            <button 
                                type="button"
                                onClick={() => removeExperience(index)}
                                className="block w-full rounded-md shadow-sm border-0 px-4 py-2 bg-red-600 text-white font-bold">
                                Remove Experience
                            </button>

                            {/* Add other input fields for degree, date, and GPA similarly */}
                            {/* ... */}
                        </div>
                    </div>
                ))}
            </div>

            <button 
                type="button"
                onClick={addExperience}
                className="block w-full mt-6 rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                Add Experience
            </button>
        </div>
    </div>
    )
}

export default Editor;