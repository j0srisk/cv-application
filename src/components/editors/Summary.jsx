/* eslint-disable react/prop-types */
function Summary ({ resumeData, setResumeData }){

    const handleChange = (e) => {
        const {name, value} = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    return (
    <div className="card">

        <h2 className="card-title">Professional Summary</h2>

        <p className="card-text">Include your professional title, years of experience, and your most impressive achievements. Each achievement should be measurable and expressed in numbers.</p>

        <textarea
            type="text"
            name="summary"
            rows="5"
            value={resumeData.summary}
            onChange={handleChange}
            className="input"
        />

    </div>
    )
}

export default Summary;