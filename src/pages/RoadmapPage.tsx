import { useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const RoadmapPage = () => {
  useEffect(() => {
    document.title = 'Roadmap Overview | Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
          Complete Roadmap Overview
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Your 1-month journey to becoming a better frontend engineer
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <MarkdownContent filePath="/src/data/roadmap_overview.md" />
        </div>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Week 1</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              React Fundamentals & Modern Practices
            </p>
            <div className="mt-4">
              <a
                href="/week1"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Week 2</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Advanced Next.js & Frontend Architecture
            </p>
            <div className="mt-4">
              <a
                href="/week2"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Week 3</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Frontend Testing & Developer Workflow
            </p>
            <div className="mt-4">
              <a
                href="/week3"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Week 4</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Real-world Project & Integration
            </p>
            <div className="mt-4">
              <a
                href="/week4"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
