import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Play, Square, Trash2, Wifi, WifiOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import LanguageSelector from '../components/LanguageSelector';
import OutputPanel from '../components/OutputPanel';

export interface Language {
  value: string;
  label: string;
  extension: string;
  defaultCode: string;
}

const languages: Language[] = [
  {
    value: 'python',
    label: 'Python',
    extension: '.py',
    defaultCode: `# Welcome to BuddyCode - Python Edition
print("Hello, World!")`
  },
  {
    value: 'javascript',
    label: 'JavaScript',
    extension: '.js',
    defaultCode: `// Welcome to BuddyCode - JavaScript Edition
console.log("Hello, World!");`
  },
  {
    value: 'java',
    label: 'Java',
    extension: '.java',
    defaultCode: `// Welcome to BuddyCode - Java Edition
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`
  },
  {
    value: 'cpp',
    label: 'C++',
    extension: '.cpp',
    defaultCode: `// Welcome to BuddyCode - C++ Edition
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`
  },
  {
    value: 'c',
    label: 'C',
    extension: '.c',
    defaultCode: `// Welcome to BuddyCode - C Edition
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`
  }
];

const EditorPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [code, setCode] = useState<string>(selectedLanguage.defaultCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Check backend connection on component mount
  React.useEffect(() => {
    checkBackendConnection();
  }, []);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch('https://buddycoderserver-d8iy.onrender.com/health');
      if (response.ok) {
        setIsConnected(true);
      }
    } catch {
      setIsConnected(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setCode(language.defaultCode);
    setOutput('');
    setError('');
  };

  const runCode = async () => {
    if (!isConnected) {
      setError('Backend server is not running. Please start the Python server on port 5000.');
      return;
    }

    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      const response = await fetch('https://buddycoderserver-d8iy.onrender.com/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: selectedLanguage.value,
          code: code
        })
      });

      const result = await response.json();
      
      if (result.error) {
        setError(result.error);
      } 
      else {
        const stdout = result.run?.stdout || '';
        const stderr = result.run?.stderr || '';
        if (stdout.trim() || stderr.trim()) {
          setOutput(`${stdout}${stderr}`);
        } else {
          setOutput('Code executed successfully with no output');
        }
      }
    } catch (err) {
      setError('Failed to connect to backend server. Please ensure the Python server is running on port 5000.');
      setIsConnected(false);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-material-dark text-white">
      {/* Header */}
      <header className="bg-surface border-b border-gray-700 px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex items-center text-gray-400 hover:text-white transition-all duration-200 hover:bg-gray-700 px-3 py-2 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <Code2 className="w-6 h-6 text-primary-blue" />
              <h1 className="text-xl font-bold">CodeRunner</h1>
            </div>
            <div className="w-px h-6 bg-gray-600 hidden md:block"></div>
            <LanguageSelector 
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Connection Status */}
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-xs ${
              isConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {isConnected ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{isConnected ? 'Server Connected' : 'Server Disconnected'}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning || !isConnected}
              className="flex items-center px-6 py-3 bg-primary-blue hover:bg-blue-700 disabled:bg-gray-600 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isRunning ? (
                <>
                  <Square className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Run Code</span>
                </>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearOutput}
              className="flex items-center px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200"
              title="Clear Output"
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex h-[calc(100vh-88px)]">
        {/* Code Editor Panel (70%) */}
        <div className="flex-[7] border-r border-gray-700">
          <CodeEditor 
            language={selectedLanguage}
            code={code}
            onChange={setCode}
          />
        </div>

        {/* Output Panel (30%) */}
        <div className="flex-[3] bg-surface min-w-0">
          <OutputPanel 
            output={output}
            error={error}
            isRunning={isRunning}
            onClear={clearOutput}
            language={selectedLanguage.label}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;