/* eslint-disable react/prop-types */
function McCombsResume({ resumeData }) {
    return(
        <div className="flex flex-col p-[.5in] w-full">
            <h1 className="text-[18pt] text-center font-bold">{resumeData.firstName} {resumeData.lastName}</h1>
            <p className="text-[10.5pt] text-center">{resumeData.email} • {resumeData.phone} • {resumeData.social}</p>
            <p className="text-[10.5pt] text-left font-bold uppercase">Summary</p>
            <p className="text-[10.5pt] text-left">{resumeData.summary}</p>
        </div>
    )
}

export default McCombsResume;