/* eslint-disable react/prop-types */
function Awards ({ resumeData, setResumeData, handleChange, removeItem }) {

    const addAward = () => {
        const newAward = {
            name: '',
            date: '',
        };

        setResumeData({
            ...resumeData,
            awards: [...resumeData.awards, newAward],
        });
    };


    return (
        <div className="card">

            <h2 className="card-title">Honors & Awards</h2>

            <p className="card-text">Include any honors or awards you have received that are relevant to the job you are applying for.</p>

            <div className="-mt-8">
                {resumeData.awards.map((awardItem, index) => (
                    <div key={index} className="item">
                            <div className="flex justify-between">

                                <h3 className="item-title"> {awardItem.name ? awardItem.name : "Untitled"}</h3>

                                <button
                                    type="button"
                                    onClick={() => removeItem('awards', index)}
                                    className="text-sm text-red-600 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                    </svg>
                                </button>

                            </div>

                            <div className="inline-wrapper">
                                <div className="input-wrapper">
                                    <label htmlFor={`name${index}`} className="input-title">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name={`name${index}`}
                                        value={awardItem.name}
                                        onChange={(e) => handleChange('awards', index, 'name', e.target.value)}
                                        className="input"
                                    />
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor={`date${index}`} className="input-title">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        name={`date${index}`}
                                        value={awardItem.date}
                                        onChange={(e) => handleChange('awards', index, 'date', e.target.value)}
                                        className="input"
                                    />
                                </div>
                            </div>
                    </div>
                    
                ))}
            </div>

            <div className="flex justify-end mt-2">
                <button 
                    type="button"
                    onClick={addAward}
                    className="block w-fit rounded-md shadow-sm border-0 px-4 py-2  bg-indigo-600 text-white font-bold">
                    Add Award
                </button>
            </div>
        </div>
    )
}

export default Awards;