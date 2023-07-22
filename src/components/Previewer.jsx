/* eslint-disable react/prop-types */
import ResumePDF from "./ResumePDF";

function Previewer({ basicInfo }) {

    return(
    <div className="flex relative aspect-[7.8/11]">
         <ResumePDF basicInfo={basicInfo}/>
         <div className="absolute border-[1rem] border-white w-full h-full rounded-lg shadow-lg"></div>
    </div>
    )
}

export default Previewer;