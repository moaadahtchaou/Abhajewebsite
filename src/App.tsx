import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Project from './pages/Project'
import ProjectDetails from './pages/projectdetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
      <div className='relative flex min-h-screen flex-col'>
          <Navbar/>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/project/:id' element={<ProjectDetails/>}/>
          </Routes>
          <Footer/>

      </div>
  )
}

export default App
