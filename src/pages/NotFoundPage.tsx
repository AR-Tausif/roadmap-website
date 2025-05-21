import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Page not found</p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
