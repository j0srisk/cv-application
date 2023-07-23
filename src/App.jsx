import { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: 'Joseph',
    lastName: 'Risk',
    email: 'j0srisk@utexas.edu',
    phone: '(936) 647-8636',
    social: 'LinkedIn.com/in/JosephRisk',
  });

  const [summary, setSummary] = useState({
    summary: 'I am a full stack web developer with a background in education and a passion for learning. I am a graduate of the University of Texas at Austin Full Stack Web Development Bootcamp. I am a team player with a strong work ethic and a desire to contribute to a team. I am looking for a position as a full stack web developer where I can continue to learn and grow as a developer.',
  });

  return (
    <div className="flex h-screen bg-slate-200">
       <main className="flex h-full w-full p-5 gap-5" >
          <Editor basicInfo={basicInfo} setBasicInfo={setBasicInfo} summary={summary} setSummary={setSummary}/>
          <Previewer basicInfo={basicInfo}/>
      </main>
    </div>
  )
}

export default App
