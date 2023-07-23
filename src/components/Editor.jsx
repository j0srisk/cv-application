/* eslint-disable react/prop-types */
function Editor({ resumeData, setResumeData}) {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    return(
    <div className="flex flex-1 flex-col gap-8 p-5 overflow-y-scroll no-scrollbar">
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Details</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Personal details such as name and job title are essential in a resume to give the recruiter a quick overview of the candidate.</p>

        
            <div className="mt-8 flex flex-col gap-x-6 gap-y-6 ">
                <div className="flex gap-8">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="firstName"
                            value={resumeData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="lastName"
                            value={resumeData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  value={resumeData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  value={resumeData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="social" className="block text-sm font-medium leading-6 text-gray-900">
                Social (LinkedIn)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="social"
                  value={resumeData.social}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Professional Summary</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Include your professional title, years of experience, and your most impressive achievements. Each achievement should be measurable and expressed in numbers.</p>

        
            <div className="mt-8 flex flex-col gap-x-6 gap-y-6 ">
                <div className="mt-2">
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
    </div>
    )
}

export default Editor;