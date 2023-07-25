/* eslint-disable react/prop-types */
import Details from "./editors/Details";
import Summary from "./editors/Summary";
import Education from "./editors/Education";
import Experience from "./editors/Experience";
import Projects from "./editors/Projects";

function Editor({ resumeData, setResumeData }) {

    const handleChange = (arrayName, index, field, value, subArrayName = null, subIndex = null) => {
        const updatedArray = [...resumeData[arrayName]];

        if (subArrayName !== null && subIndex !== null) {
          // Update a sub-item in the specified sub-array
          updatedArray[index][field][subIndex][subArrayName] = value;
        } else {
          // Update a top-level field
          updatedArray[index][field] = value;
        }
      
        setResumeData({
          ...resumeData,
          [arrayName]: updatedArray,
        });
    };

    const removeItem = (arrayName, index, subArrayName = null, subIndex = null) => {
        const updatedArray = [...resumeData[arrayName]];
        console.log(arrayName, index, subArrayName, subIndex)

        if (subArrayName !== null && subIndex !== null) {
          // Remove a sub-item
          updatedArray[index][subArrayName].splice(subIndex, 1);
        } else {
          // Remove a top-level item
          updatedArray.splice(index, 1);
        }
      
        setResumeData({
          ...resumeData,
          [arrayName]: updatedArray,
        });
    };

    return(
        <div className="flex flex-1 flex-col gap-8 p-5 overflow-y-scroll no-scrollbar">

            <Details resumeData={resumeData} setResumeData={setResumeData}/>

            <Summary resumeData={resumeData} setResumeData={setResumeData}/>

            <Education resumeData={resumeData} setResumeData={setResumeData}/>

            <Experience resumeData={resumeData} setResumeData={setResumeData} handleChange={handleChange} removeItem={removeItem}/>

            <Projects resumeData={resumeData} setResumeData={setResumeData} handleChange={handleChange} removeItem={removeItem}/>

        </div>
    )
}

export default Editor;