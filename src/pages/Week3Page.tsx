import { useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const Week3Page = () => {
  useEffect(() => {
    document.title = 'Week 3: Testing & Workflow | Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
          Week 3: Frontend Testing & Developer Workflow
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Master testing, CI/CD, code quality tools, and debugging techniques
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <MarkdownContent filePath="/src/data/week3_tasks.md" />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <a
            href="/week2"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            ← Previous: Week 2
          </a>
        </div>
        <div>
          <a
            href="/week4"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next: Week 4 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Week3Page;
