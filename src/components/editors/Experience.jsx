/* eslint-disable react/prop-types */
function Experience ({ resumeData, setResumeData, handleChange, removeItem }) {
      
    const addExperience = () => {
        // Create a new empty experience item
        const newExperience = {
            company: '',
            title: '',
            location: '',
            startDate: '',
            endDate: '',
            description: [
                { bullet: '' }, // You can leave an empty bullet point initially
            ],
        };
        
        // Add the new experience to the existing experience array
        setResumeData({
            ...resumeData,
            experience: [...resumeData.experience, newExperience],
        });
    };

    const addBullet = (arrayName, index) => {
        const updatedArray = [...resumeData[arrayName]];
        updatedArray[index].description.push({ bullet: '' });

        setResumeData({
            ...resumeData,
            [arrayName]: updatedArray,
        });
    };
    

    return (
        <div className="card">

            <h2 className="card-title">Experience</h2>
            <p className="card-text">Show employers your past experience and what you have accomplished. Include simple, clear examples with action verbs to demonstrate your skills.</p>

            <div className="-mt-8">
                {resumeData.experience.map((experienceItem, index) => (
                    <div key={index} className="item">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-bold leading-7 text-gray-900"> {experienceItem.company ? experienceItem.company : "Untitled"}</h3>
                            <button
                                type="button"
                                onClick={() => removeItem('experience', index)}
                                className="text-sm text-red-600 font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className="inline-wrapper">
                            <div className="input-wrapper">
                                <label htmlFor={`company${index}`} className="input-title">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name={`company${index}`}
                                    value={experienceItem.company}
                                    onChange={(e) => handleChange('experience', index, 'company', e.target.value)}
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
                                    onChange={(e) => handleChange('experience', index, 'title', e.target.value)}
                                    className="input"
                                />
                            </div>
                        </div>

                        <div className="inline-wrapper">
                            <div className="input-wrapper">
                                <label htmlFor={`location${index}`} className="input-title">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name={`location${index}`}
                                    value={experienceItem.location}
                                    onChange={(e) => handleChange('experience', index, 'location', e.target.value)}
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
                                    onChange={(e) => handleChange('experience', index, 'startDate', e.target.value)}
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
                                    onChange={(e) => handleChange('experience', index, 'endDate', e.target.value)}
                                    className="input"
                                />
                            </div>
                        </div>
                            
                        <div className="input-wrapper" >

                            <label htmlFor={`description${index}`} className="input-title">
                                Details
                            </label>

                            <div className="flex flex-col gap-4">
                                {resumeData.experience[index].description.map((descriptionItem, subIndex) => (
                                    <div key={subIndex}>
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                name={`description${subIndex}`}
                                                value={descriptionItem.bullet}
                                                onChange={(e) => handleChange('experience', index, 'description', e.target.value, 'bullet', subIndex)}
                                                className="input"
                                            />

                                            {resumeData.experience[index].description.length > 1 && (
                                                <button 
                                                    onClick={() => removeItem('experience', index, 'description', subIndex)}
                                                    className="input w-fit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                                    </svg>
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => addBullet('experience', index)}
                                className="input mt-4">
                                    Add Detail
                            </button>

                        </div>
                    </div>
                ))}
            </div>

            {resumeData.experience.length === 0 && (
                <div className="item p-0 pt-2">
                </div>
            )}

            <div className="flex justify-end mt-2">
                <button 
                    type="button"
                    onClick={addExperience}
                    className="block w-fit rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                    Add Experience
                </button>
            </div>
        </div>
    )
}

export default Experience;