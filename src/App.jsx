import { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {

  const [resumeData, setResumeData] = useState({
    firstName: 'Joseph',
    lastName: 'Risk',
    email: 'j0srisk@utexas.edu',
    phone: '(936) 647-8636',
    social: 'LinkedIn.com/in/JosephRisk',
    summary: 'Results-driven graduate with a strong academic background in software development, data analytics, and business solutions. Proficient in leveraging emerging technologies to drive business growth and optimize performance. Exceptional written and verbal communication skills facilitating effective collaboration with clients and cross-functional teams. Seeking a tech-centric role to contribute expertise to cutting-edge projects and drive digital transformation.',
    education: [
      {
        school: 'University of Texas at Austin',
        degree: 'Bachelor of Business Administration',
        date: 'December 2022',
        gpa: '3.74',
      },
      {
        school: 'McCombs School of Business',
        degree: 'Management Information Systems',
        date: 'December 2022',
        gpa: '3.74',
      },
    ],
  });

  return (
    <div className="flex h-screen bg-gray-100">
       <main className="flex h-full w-full" >
          <Editor resumeData={resumeData} setResumeData={setResumeData}/>
          <Previewer resumeData={resumeData}/>
      </main>
    </div>
  )
}

export default App
