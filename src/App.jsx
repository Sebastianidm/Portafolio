//Componentes
import Navbar from './components/Navbar'
import About from './components/About'
import Github from './components/Github'
import Skills from './components/Skills'
import Contact from './components/Contact'



function App() {
 

  return (
    <main className='text-gray-400  bg-slate-800 body-font '>
    <Navbar/>
    <About/>
    <Skills/>
    <Github/>
    <Contact/>
    
   
    </main>
  )
}

export default App
