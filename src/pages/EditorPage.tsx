import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowLeft,
    Check,
    Code2,
    Download,
    Edit2,
    FileCode,
    LogIn,
    Menu,
    Play,
    Save,
    Square,
    Trash2,
    Wifi,
    WifiOff,
    X,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import LanguageSelector from '../components/LanguageSelector';
import OutputPanel from '../components/OutputPanel';
import SeoTags from '../components/SeoTags';
import { useAuth } from '../context/AuthContext';

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
print("Hello, World!")`,
  },
  {
    value: 'javascript',
    label: 'JavaScript',
    extension: '.js',
    defaultCode: `// Welcome to BuddyCode - JavaScript Edition
console.log("Hello, World!");`,
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
`,
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
`,
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
`,
  },
];

interface FileItem {
  _id: string;
  filename: string;
  uploadedAt?: string;
  stored_name?: string;
}

const EditorPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [code, setCode] = useState<string>(selectedLanguage.defaultCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [filesLoading, setFilesLoading] = useState<boolean>(false);
  const [filesError, setFilesError] = useState<string>('');
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [editingFileName, setEditingFileName] = useState<string>('');
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // ✅ Check backend connection on mount
  useEffect(() => {
    checkBackendConnection();
  }, []);

  // ✅ Fetch files when side panel opens
  useEffect(() => {
    if (isAuthenticated && isSidePanelOpen) {
      fetchFiles();
    }
  }, [isAuthenticated, isSidePanelOpen]);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch('https://api.server.buddycode.online/health');
      if (response.ok) setIsConnected(true);
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
      setError('Backend server is not running.');
      return;
    }

    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      const response = await fetch('https://api.server.buddycode.online/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: selectedLanguage.value, code }),
      });

      const result = await response.json();
      if (result.error) setError(result.error);
      else {
        const stdout = result.run?.stdout || '';
        const stderr = result.run?.stderr || '';
        setOutput(stdout.trim() || stderr.trim() ? `${stdout}${stderr}` : 'Code executed successfully with no output');
      }
    } catch {
      setError('Failed to connect to backend server.');
      setIsConnected(false);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
    setError('');
  };

  const fetchFiles = async () => {
    setFilesLoading(true);
    setFilesError('');

    try {
      const response = await fetch('https://api.server.buddycode.online/files', {
        headers: { Authorization: `Bearer ${user?.token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch files');
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : 'Failed to load files');
    } finally {
      setFilesLoading(false);
    }
  };

  const handleDownload = async (fileId: string, filename: string) => {
    if (!fileId) {
      setFilesError('Invalid file ID');
      return;
    }

    console.log('📥 Downloading file:', fileId);

    try {
      const response = await fetch(`https://api.server.buddycode.online/download/${fileId}`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });

      if (!response.ok) throw new Error('Failed to download file');
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : 'Failed to download file');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleRenameFile = async (fileId: string) => {
    if (!editingFileName.trim()) {
      setFilesError('Filename cannot be empty');
      return;
    }

    try {
      const response = await fetch(`https://api.server.buddycode.online/files/${fileId}/rename`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${user?.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: editingFileName }),
      });

      if (!response.ok) throw new Error('Failed to rename file');
      setEditingFileId(null);
      setEditingFileName('');
      fetchFiles();
    } catch (err) {
      setFilesError(err instanceof Error ? err.message : 'Failed to rename file');
    }
  };

  const startEditing = (fileId: string, currentName: string) => {
    setEditingFileId(fileId);
    setEditingFileName(currentName);
  };

  const cancelEditing = () => {
    setEditingFileId(null);
    setEditingFileName('');
  };

  const saveFile = async () => {
    if (!isAuthenticated) {
      setSaveMessage('Please login to save files');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    setIsSaving(true);
    setSaveMessage('');

    try {
      const filename = `code${selectedLanguage.extension}`;
      const blob = new Blob([code], { type: 'text/plain' });
      const formData = new FormData();
      formData.append('file', blob, filename);

      const response = await fetch('https://api.server.buddycode.online/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${user?.token}` },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to save file');
      setSaveMessage('File saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
      if (isSidePanelOpen) fetchFiles();
    } catch (err) {
      setSaveMessage(err instanceof Error ? err.message : 'Failed to save file');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-material-dark text-white">
      {/* ✅ SEO TAGS */}
      <SeoTags
        title="BuddyCode Online Editor - Write, Compile & Run Code Instantly"
        description="Use BuddyCode's powerful online editor to code in Python, Java, C, C++, and JavaScript. Compile and run instantly with zero setup."
        url="https://your-domain.com/editor"
        keywords="online code editor, online compiler, python editor, java compiler, c++ online, javascript editor, buddycode"
      />

      {/* Header */}
      <header className="bg-surface border-b border-gray-700 px-3 sm:px-6 py-3 sm:py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-2 sm:space-x-6">
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-white transition-all duration-200 hover:bg-gray-700 px-2 sm:px-3 py-2 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden lg:inline ml-2">Back</span>
            </Link>
            <div className="w-px h-6 bg-gray-600 hidden sm:block"></div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
              <h1 className="text-base sm:text-xl font-bold hidden sm:block">Editor</h1>
            </div>
            <div className="w-px h-6 bg-gray-600 hidden lg:block"></div>
            <div className="hidden md:block">
              <LanguageSelector
                languages={languages}
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3">
            <div
              className={`hidden lg:flex items-center space-x-2 px-3 py-1 rounded-lg text-xs ${
                isConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {isConnected ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
            </div>

            {saveMessage && (
              <div
                className={`hidden sm:block px-3 py-1 rounded-lg text-xs ${
                  saveMessage.includes('success')
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {saveMessage}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
              className="flex items-center px-2 sm:px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-all duration-200"
              title="My Files"
            >
              <Menu className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveFile}
              disabled={isSaving}
              className="flex items-center px-2 sm:px-4 py-2 sm:py-3 bg-accent-teal/20 hover:bg-accent-teal/30 text-accent-teal disabled:bg-gray-600 disabled:text-gray-400 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed"
              title="Save File"
            >
              <Save className="w-4 h-4" />
              <span className="hidden lg:inline ml-2">{isSaving ? 'Saving...' : 'Save'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning || !isConnected}
              className="flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-primary-blue hover:bg-blue-700 disabled:bg-gray-600 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isRunning ? (
                <>
                  <Square className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline ml-2">Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline ml-2">Run</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearOutput}
              className="hidden sm:flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200"
              title="Clear Output"
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Language Selector */}
        <div className="md:hidden mt-3">
          <LanguageSelector
            languages={languages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex h-[calc(100vh-88px)] relative">
        {/* Code Editor */}
        <div className="flex-1 border-r border-gray-700 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <CodeEditor language={selectedLanguage} code={code} onChange={setCode} />
          </div>

          {/* Mobile Output */}
          <div className="md:hidden h-48 border-t border-gray-700 bg-surface">
            <OutputPanel
              output={output}
              error={error}
              isRunning={isRunning}
              onClear={clearOutput}
              language={selectedLanguage.label}
            />
          </div>
        </div>

        {/* Desktop Output */}
        <div className="hidden md:block md:flex-[3] lg:flex-[2] bg-surface min-w-0">
          <OutputPanel
            output={output}
            error={error}
            isRunning={isRunning}
            onClear={clearOutput}
            language={selectedLanguage.label}
          />
        </div>

        {/* Files Panel */}
        <AnimatePresence>
          {isSidePanelOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidePanelOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed md:absolute right-0 top-0 h-full w-80 md:w-96 bg-surface border-l border-gray-700 shadow-2xl z-50 overflow-hidden flex flex-col"
              >
                <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileCode className="w-5 h-5 text-primary-blue" />
                    <h2 className="text-lg font-bold">My Files</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidePanelOpen(false)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {!isAuthenticated ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                      <LogIn className="w-12 h-12 text-gray-500" />
                      <h3 className="text-lg font-semibold">Sign in to see your files</h3>
                      <p className="text-gray-400 text-sm">Login to save and access your code files</p>
                      <Link
                        to="/login"
                        className="px-6 py-3 bg-primary-blue hover:bg-blue-700 rounded-lg font-medium transition-all duration-200"
                      >
                        Sign In
                      </Link>
                    </div>
                  ) : filesLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-blue"></div>
                    </div>
                  ) : filesError ? (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                      {filesError}
                    </div>
                  ) : files.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                      <FileCode className="w-12 h-12 text-gray-500" />
                      <h3 className="text-lg font-semibold">No saved files yet</h3>
                      <p className="text-gray-400 text-sm">Start coding and save your files to see them here</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {files.map((file) => (
                        <motion.div
                          key={file._id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-primary-blue transition-all duration-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1 min-w-0">
                              <div className="w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <FileCode className="w-5 h-5 text-primary-blue" />
                              </div>
                              <div className="flex-1 min-w-0">
                                {editingFileId === file._id ? (
                                  <input
                                    type="text"
                                    value={editingFileName}
                                    onChange={(e) => setEditingFileName(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') handleRenameFile(file._id);
                                      if (e.key === 'Escape') cancelEditing();
                                    }}
                                    className="w-full bg-gray-700 text-white text-sm font-semibold px-2 py-1 rounded border border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                    autoFocus
                                  />
                                ) : (
                                  <h3 className="text-sm font-semibold truncate">{file.filename}</h3>
                                )}
                                {file.uploadedAt && (
                                  <p className="text-gray-400 text-xs mt-1">{formatDate(file.uploadedAt)}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 flex-shrink-0">
                              {editingFileId === file._id ? (
                                <>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleRenameFile(file._id)}
                                    className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-200"
                                    title="Save"
                                  >
                                    <Check className="w-4 h-4" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={cancelEditing}
                                    className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-200"
                                    title="Cancel"
                                  >
                                    <X className="w-4 h-4" />
                                  </motion.button>
                                </>
                              ) : (
                                <>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => startEditing(file._id, file.filename)}
                                    className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-all duration-200"
                                    title="Rename"
                                  >
                                    <Edit2 className="w-4 h-4" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleDownload(file._id, file.filename)}
                                    className="p-2 bg-accent-teal/20 hover:bg-accent-teal/30 text-accent-teal rounded-lg transition-all duration-200"
                                    title="Download"
                                  >
                                    <Download className="w-4 h-4" />
                                  </motion.button>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EditorPage;
