/* eslint-disable react/prop-types */
function Preview({ basicInfo }) {

    return(
    <div className="flex aspect-[8.5/11] bg-white rounded-lg shadow-lg">
         <h1 className="text-[2.272727272vh] font-bold">
                {basicInfo.firstName} {basicInfo.lastName} {basicInfo.email} {basicInfo.phone} {basicInfo.social}
        </h1>
    </div>
    )
}

export default Preview;