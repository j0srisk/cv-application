/* eslint-disable react/prop-types */
function McCombsResume({basicInfo}) {
    return(
        <div className="flex flex-col p-[.5in] w-full">
            <h1 className="text-[18pt] text-center font-bold">{basicInfo.firstName} {basicInfo.lastName}</h1>
            <p className="text-[10.5pt] text-center">{basicInfo.email} • {basicInfo.phone} • {basicInfo.social}</p>
        </div>
    )
}

export default McCombsResume;