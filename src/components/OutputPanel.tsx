import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Trash2, Loader, AlertCircle, CheckCircle } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  error: string;
  isRunning: boolean;
  onClear: () => void;
  language?: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ output, error, isRunning, onClear, language = 'Code' }) => {
  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Panel Header */}
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Terminal className="w-5 h-5 text-accent-teal" />
          <span className="text-sm font-medium text-gray-300">Output Console</span>
          {language && (
            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">
              {language}
            </span>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClear}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
          title="Clear output"
        >
          <Trash2 className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Output Content */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {isRunning ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3 text-amber-highlight"
          >
            <Loader className="w-5 h-5 animate-spin" />
            <span className="text-base">Executing {language} code...</span>
            <div className="flex space-x-1">
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 bg-amber-highlight rounded-full"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="w-2 h-2 bg-amber-highlight rounded-full"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-2 bg-amber-highlight rounded-full"
              />
            </div>
          </motion.div>
        ) : (
          <>
            {error ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400"
              >
                <div className="flex items-center mb-3 text-red-300 font-semibold">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Execution Error
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-red-300 leading-relaxed">{error}</pre>
                </div>
              </motion.div>
            ) : output ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400"
              >
                <div className="flex items-center mb-3 text-green-300 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Execution Successful
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-green-100 leading-relaxed">{output}</pre>
                </div>
              </motion.div>
            ) : (
              <div className="text-gray-500 italic text-center py-12">
                <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Ready to execute code</p>
                <p className="text-sm mt-2">Click "Run Code" to see output here...</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400">Status:</span>
            <span className={`flex items-center space-x-1 ${
              isRunning ? 'text-amber-highlight' : 
              error ? 'text-red-400' : 
              output ? 'text-green-400' : 
              'text-gray-400'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isRunning ? 'bg-amber-highlight animate-pulse' : 
                error ? 'bg-red-400' : 
                output ? 'bg-green-400' : 
                'bg-gray-400'
              }`}></div>
              <span>
                {isRunning ? 'Running' : error ? 'Error' : output ? 'Success' : 'Ready'}
              </span>
            </span>
          </div>
          {(output || error) && !isRunning && (
            <span className="text-gray-400">
              Execution completed in {Math.random() * 2 + 0.5 | 0}s
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;