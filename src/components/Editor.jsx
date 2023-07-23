/* eslint-disable react/prop-types */
function Editor({ basicInfo, setBasicInfo, summary, setSummary}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBasicInfo({
            ...basicInfo,
            [name]: value,
        });
    };

    return(
    <div className="flex flex-1 flex-col bg-white rounded-lg shadow-lg p-8 gap-8">
        <div className="flex flex-col shadow-lg rounded-lg border-slate-300 border-2 p-4 gap-4">
            <h1 className="text-3xl font-bold">Basic Info</h1>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <label className="text-lg font-bold" htmlFor="firstName">First Name</label>
                    <input
                        className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1"
                        type="text"
                        name="firstName"
                        value={basicInfo.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-bold" htmlFor="lastName">Last Name</label>
                    <input
                        className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1"
                        type="text"
                        name="lastName"
                        value={basicInfo.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-bold" htmlFor="email">Email</label>
                    <input
                        className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1"
                        type="text"
                        name="email"
                        value={basicInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-bold" htmlFor="phone">Phone</label>
                    <input
                        className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1"
                        type="text"
                        name="phone"
                        value={basicInfo.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-bold" htmlFor="social">Social</label>
                    <input
                        className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1"
                        type="text"
                        name="social"
                        value={basicInfo.social}
                        onChange={handleChange}
                    />  
                </div>
            </div>
        </div>
        <div className="flex flex-col shadow-lg rounded-lg border-slate-300 border-2 p-4 gap-4">
            <h1 className="text-3xl font-bold">Summary</h1>
            <div className="flex flex-col">
                <textarea
                    className="text-lg border-slate-300 border-2 rounded-lg bg-slate-100 p-1 resize-y"
                    type="text"
                    name="summary"
                    value={summary.summary}
                    onChange={handleChange}
                />
            </div>
        </div>
    </div>
    )
}

export default Editor;