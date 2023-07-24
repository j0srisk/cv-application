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
        institution: 'The University of Texas at Austin',
        school: 'McCombs School of Business',
        degree: 'Bachelor of Business Administration',
        major: 'Management Information Systems',
        startDate: 'August 2018',
        endDate: 'December 2022',
        gpa: '3.74',
      },
      {
        institution: 'University of Texas at Austin',
        school: 'McCombs School of Business',
        degree: 'Bachelor of Business Administration',
        major: 'Management Information Systems',
        startDate: 'August 2018',
        endDate: 'December 2022',
        gpa: '3.74',
      },
    ],
    experience: [
      {
        company: 'Neutrino Web Development',
        title: 'Freelancer/Founder',
        location: 'Austin, TX',
        startDate: 'June 2017',
        endDate: 'December 2022',
        description: '• Collaborated with clients and other agencies to identify business requirements and deliver tailored web-based solutions'
      },
      {
        company: 'Markel Corporation',
        title: 'Surety Underwriting Intern',
        location: 'Austin, TX',
        startDate: 'June 2022',
        endDate: 'August 2022',
        description: '• Developed a solid foundation in a large corporate setting, gaining valuable experience within a Fortune 500 company'
      },
      {
        company: 'Frontier Extraction Services',
        title: 'Founding Partner',
        location: 'Lincoln, NE',
        startDate: 'January 2020',
        endDate: 'January 2022',
        description: '• Gained valuable entrepreneurial experience through the establishment of a hemp processing and brokering venture'
      }
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
