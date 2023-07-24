/* eslint-disable react/prop-types */
function Details ({ resumeData, setResumeData }){

    const handleChange = (e) => {
        const {name, value} = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    return(
        <div className="card">

            <h2 className="card-title">Personal Details</h2>
            
            <p className="card-text">Personal details such as name and job title are essential in a resume to give the recruiter a quick overview of the candidate.</p>

            <div className="inline-wrapper">

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
    )
}

export default Details;