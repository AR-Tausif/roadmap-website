import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  filePath: string;
  className?: string;
}

const MarkdownContent = ({ filePath, className = '' }: MarkdownContentProps) => {
  const [content, setContent] = useState<string>('Loading...');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setContent('Error loading content. Please try again later.');
      }
    };

    fetchContent();
  }, [filePath]);

  return (
    <div className={`prose prose-indigo max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Simplified code block rendering without syntax highlighting
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return (
              <pre className={`${match ? `language-${match[1]}` : ''} rounded-md bg-gray-800 p-4 text-white overflow-x-auto`}>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          // Add responsive table support
          table({ ...props }) {
            return (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300" {...props} />
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
