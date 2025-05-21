import { useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const ConsistencyGuidePage = () => {
  useEffect(() => {
    document.title = 'Consistency Guide | Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
          Consistency Guide
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Strategies and tools to help you stay consistent with your learning
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <MarkdownContent filePath="/src/data/consistency_guide.md" />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <a
            href="/english"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            ← Previous: English Learning
          </a>
        </div>
        <div>
          <a
            href="/getting-started"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next: Getting Started →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyGuidePage;
