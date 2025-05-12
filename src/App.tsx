import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Project from './pages/Project'
import ProjectDetails from './pages/projectdetails'
function App() {

  return (
      <div className='relative flex min-h-screen flex-col'>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Project/>}/>
              <Route path='/project/:id' element={<ProjectDetails/>}/>
            </Routes>
          <Footer/>

      </div>
  )
}

export default App
