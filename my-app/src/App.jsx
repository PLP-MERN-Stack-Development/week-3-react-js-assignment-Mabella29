import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TaskManager from './components/TaskManager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ApiData from './components/ApiData'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar title={"PLP Task Manager"} />
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path='/api-data' element={<ApiData/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App