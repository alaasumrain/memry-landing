import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden">
      {/* Copy button */}
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="absolute top-2 right-2 px-2 py-1 text-sm text-gray-400 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Copy
      </button>

      {/* Language badge */}
      <div className="absolute top-2 left-2 px-2 py-1 text-sm text-gray-400 bg-gray-800 rounded">
        {language}
      </div>

      {/* Code */}
      <pre className={`${showLineNumbers ? 'line-numbers' : ''} m-0`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent pointer-events-none" />
    </div>
  );
}
