import React from 'react';
import Editor from '@monaco-editor/react';
import { Language } from '../pages/EditorPage';

interface CodeEditorProps {
  language: Language;
  code: string;
  onChange: (value: string) => void;
}

const getMonacoLanguage = (language: string): string => {
  switch (language) {
    case 'cpp': return 'cpp';
    case 'c': return 'c';
    case 'java': return 'java';
    case 'python': return 'python';
    case 'javascript': return 'javascript';
    default: return 'javascript';
  }
};

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, onChange }) => {
  return (
    <div className="h-full bg-gray-900">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm ml-4">
            main{language.extension}
          </span>
        </div>
      </div>
      
      <Editor
        height="calc(100% - 48px)"
        language={getMonacoLanguage(language.value)}
        value={code}
        onChange={(value) => onChange(value || '')}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "'Fira Code', 'Roboto Mono', monospace",
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          wordWrap: 'on',
          minimap: { enabled: true },
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          renderLineHighlight: 'gutter',
          selectionHighlight: false,
          bracketPairColorization: { enabled: true },
        }}
      />
    </div>
  );
};

export default CodeEditor;