import { useEffect } from 'react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = 'Learning Resources | Frontend Engineer Roadmap';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
          Learning Resources
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Curated collection of the best resources for frontend development
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">React Resources</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard 
              title="React Official Documentation" 
              description="The official React documentation with guides, API references, and examples."
              url="https://react.dev/"
              type="Documentation"
            />
            <ResourceCard 
              title="React Hooks Course" 
              description="Comprehensive guide to React Hooks with practical examples."
              url="https://egghead.io/courses/simplify-react-apps-with-react-hooks"
              type="Course"
            />
            <ResourceCard 
              title="useHooks" 
              description="Collection of reusable React Hooks with simple examples."
              url="https://usehooks.com/"
              type="Examples"
            />
            <ResourceCard 
              title="React Patterns" 
              description="Common design patterns and best practices for React applications."
              url="https://reactpatterns.com/"
              type="Guide"
            />
            <ResourceCard 
              title="React DevTools" 
              description="Browser extension for debugging React applications."
              url="https://react.dev/learn/react-developer-tools"
              type="Tool"
            />
            <ResourceCard 
              title="Clean Code in React" 
              description="Best practices for writing clean, maintainable React code."
              url="https://betterprogramming.pub/clean-code-in-react-best-practices-and-patterns-b8ca8d686bf6"
              type="Article"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next.js Resources</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard 
              title="Next.js Documentation" 
              description="Official Next.js documentation with comprehensive guides and API references."
              url="https://nextjs.org/docs"
              type="Documentation"
            />
            <ResourceCard 
              title="Next.js Learn Course" 
              description="Interactive tutorial for learning Next.js step by step."
              url="https://nextjs.org/learn"
              type="Course"
            />
            <ResourceCard 
              title="Vercel Blog" 
              description="Articles and guides about Next.js from the creators."
              url="https://vercel.com/blog"
              type="Blog"
            />
            <ResourceCard 
              title="Next.js Examples" 
              description="Collection of example projects built with Next.js."
              url="https://github.com/vercel/next.js/tree/canary/examples"
              type="Examples"
            />
            <ResourceCard 
              title="Next.js SEO Guide" 
              description="Comprehensive guide to SEO optimization in Next.js applications."
              url="https://nextjs.org/learn/seo/introduction-to-seo"
              type="Guide"
            />
            <ResourceCard 
              title="Next Auth" 
              description="Authentication solution for Next.js applications."
              url="https://next-auth.js.org/"
              type="Library"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Testing & Developer Workflow</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard 
              title="Jest Documentation" 
              description="Official documentation for Jest testing framework."
              url="https://jestjs.io/docs/getting-started"
              type="Documentation"
            />
            <ResourceCard 
              title="React Testing Library" 
              description="Simple and complete testing utilities for React applications."
              url="https://testing-library.com/docs/react-testing-library/intro/"
              type="Library"
            />
            <ResourceCard 
              title="GitHub Actions" 
              description="Automate your workflow with GitHub Actions CI/CD."
              url="https://docs.github.com/en/actions"
              type="Tool"
            />
            <ResourceCard 
              title="ESLint Documentation" 
              description="Pluggable JavaScript linter for identifying and fixing code issues."
              url="https://eslint.org/docs/user-guide/getting-started"
              type="Tool"
            />
            <ResourceCard 
              title="Chrome DevTools" 
              description="Web developer tools built into the Chrome browser."
              url="https://developer.chrome.com/docs/devtools/"
              type="Tool"
            />
            <ResourceCard 
              title="Web Vitals" 
              description="Essential metrics for a healthy website."
              url="https://web.dev/vitals/"
              type="Guide"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical English Resources</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard 
              title="Programming English" 
              description="Technical terms explained in simple language."
              url="https://www.programmingenglish.com/"
              type="Website"
            />
            <ResourceCard 
              title="Coding Vocabulary Flashcards" 
              description="Flashcards for learning programming terminology."
              url="https://quizlet.com/subject/programming-vocabulary/"
              type="Learning Tool"
            />
            <ResourceCard 
              title="DeepL Translator" 
              description="AI-powered translation tool that works well for technical content."
              url="https://www.deepl.com/translator"
              type="Tool"
            />
            <ResourceCard 
              title="Youglish" 
              description="Hear how technical terms are pronounced in context."
              url="https://youglish.com/"
              type="Pronunciation"
            />
            <ResourceCard 
              title="MDN Web Docs Simplified" 
              description="Web development documentation with clear explanations."
              url="https://developer.mozilla.org/en-US/docs/Learn"
              type="Documentation"
            />
            <ResourceCard 
              title="freeCodeCamp Forum" 
              description="Supportive community for learning programming."
              url="https://forum.freecodecamp.org/"
              type="Community"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-start">
        <div>
          <a
            href="/getting-started"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            ← Back to Getting Started
          </a>
        </div>
      </div>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  type: string;
}

const ResourceCard = ({ title, description, url, type }: ResourceCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
            {type}
          </span>
        </div>
      </div>
      <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium"
        >
          Visit resource →
        </a>
      </div>
    </div>
  );
};

export default ResourcesPage;
