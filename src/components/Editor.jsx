/* eslint-disable react/prop-types */
function Editor({ basicInfo, setBasicInfo}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBasicInfo({
            ...basicInfo,
            [name]: value,
        });
    };


    return(
    <div className="flex flex-1 flex-col bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                value={basicInfo.firstName}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                value={basicInfo.lastName}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                value={basicInfo.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input
                type="text"
                name="phone"
                value={basicInfo.phone}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="social">Social</label>
            <input
                type="text"
                name="social"
                value={basicInfo.social}
                onChange={handleChange}
            />  
        </div>
        <div className="flex flex-col">
            <label htmlFor="summary">Summary</label>
            <textarea
                type="text"
                name="summary"
                value={basicInfo.summary}
                onChange={handleChange}
            />
        </div>
    </div>
    )
}

export default Editor;