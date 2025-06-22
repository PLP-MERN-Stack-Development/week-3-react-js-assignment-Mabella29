const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer