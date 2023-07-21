import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {

  return (
    <app className="flex h-screen bg-slate-400">
       <main className="flex h-full w-full p-5 gap-5" >
          <Editor />
          <Preview />
      </main>
    </app>
  )
}

export default App
