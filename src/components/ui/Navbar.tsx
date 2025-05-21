import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Frontend Roadmap
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
              <Link to="/roadmap" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                Roadmap
              </Link>
              <div className="relative group">
                <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                  Weekly Plans
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 hidden group-hover:block pt-2 w-48">
                  <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-gray-700">
                    <div className="py-1">
                      <Link to="/week1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Week 1: React Fundamentals</Link>
                      <Link to="/week2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Week 2: Advanced Next.js</Link>
                      <Link to="/week3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Week 3: Testing & Workflow</Link>
                      <Link to="/week4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Week 4: Real-world Project</Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/english" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                English Learning
              </Link>
              <Link to="/consistency" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                Consistency Guide
              </Link>
              <Link to="/getting-started" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white">
                Getting Started
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-700 dark:border-indigo-400 dark:text-white" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/roadmap" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
              Roadmap
            </Link>
            <div className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
              Weekly Plans
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/week1" className="block pl-3 pr-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
                Week 1: React Fundamentals
              </Link>
              <Link to="/week2" className="block pl-3 pr-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
                Week 2: Advanced Next.js
              </Link>
              <Link to="/week3" className="block pl-3 pr-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
                Week 3: Testing & Workflow
              </Link>
              <Link to="/week4" className="block pl-3 pr-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
                Week 4: Real-world Project
              </Link>
            </div>
            <Link to="/english" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
              English Learning
            </Link>
            <Link to="/consistency" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
              Consistency Guide
            </Link>
            <Link to="/getting-started" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleMenu}>
              Getting Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
