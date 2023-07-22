import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: 'Joseph',
    lastName: 'Risk',
    email: 'j0srisk@utexas.edu',
    phone: '512-555-5555',
    social: '@j0srisk',
  });

  console.log(basicInfo);

  return (
    <div className="flex h-screen bg-slate-200">
       <main className="flex h-full w-full p-5 gap-5" >
          <Editor basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          <Preview basicInfo={basicInfo}/>
      </main>
    </div>
  )
}

export default App
