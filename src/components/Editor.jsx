/* eslint-disable react/prop-types */
import Details from "./editors/Details";
import Summary from "./editors/Summary";
import Education from "./editors/Education";
import Experience from "./editors/Experience";

function Editor({ resumeData, setResumeData }) {

    return(
        <div className="flex flex-1 flex-col gap-8 p-5 overflow-y-scroll no-scrollbar">

            <Details resumeData={resumeData} setResumeData={setResumeData}/>

            <Summary resumeData={resumeData} setResumeData={setResumeData}/>

            <Education resumeData={resumeData} setResumeData={setResumeData}/>

            <Experience resumeData={resumeData} setResumeData={setResumeData}/>

        </div>
    )
}

export default Editor;