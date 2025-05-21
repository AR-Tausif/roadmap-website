import { useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Frontend Engineer Roadmap
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          A step-by-step guide to becoming a better frontend engineer in one month
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <MarkdownContent filePath="/src/data/final_roadmap.md" />
        </div>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Getting Started</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              New to the roadmap? Start here with simple first steps.
            </p>
            <div className="mt-4">
              <a
                href="/getting-started"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Begin Here
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Weekly Plans</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Detailed tasks and resources for each week of learning.
            </p>
            <div className="mt-4">
              <a
                href="/week1"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Week 1
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Consistency Guide</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Strategies to help you stay consistent with your learning.
            </p>
            <div className="mt-4">
              <a
                href="/consistency"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
