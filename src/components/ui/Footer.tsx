const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/roadmap" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Roadmap
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/english" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              English Learning
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/consistency" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Consistency Guide
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/getting-started" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Getting Started
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400 dark:text-gray-500">
          &copy; 2025 Frontend Engineer Roadmap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
