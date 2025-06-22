import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/tasks" className="hover:text-blue-600">Tasks</Link>
          <Link to="/api-data" className="hover:text-blue-600">API Data</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar