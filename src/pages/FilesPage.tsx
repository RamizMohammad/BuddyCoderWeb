import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Download, FileCode, LogOut } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeoTags from '../components/SeoTags';
import { useAuth } from '../context/AuthContext';

interface FileItem {
  id: number;
  filename: string;
  upload_date: string;
}

const FilesPage: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchFiles();
  }, [isAuthenticated, navigate]);

  const fetchFiles = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://buddycoderserver.onrender.com/files', {
        headers: {
          'Authorization': `Bearer ${user?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }

      const data = await response.json();
      setFiles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load files');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (fileId: number, filename: string) => {
    try {
      const response = await fetch(`https://buddycoderserver.onrender.com/download/${fileId}`, {
        headers: {
          'Authorization': `Bearer ${user?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to download file');
      }

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
      setError(err instanceof Error ? err.message : 'Failed to download file');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
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

  return (
    <div className="min-h-screen bg-material-dark text-white">
      <SeoTags
        title="My Files - BuddyCode"
        description="Manage your saved code files on BuddyCode"
        url="https://buddycoderserver.onrender.com/files"
      />

      <header className="bg-surface border-b border-gray-700 px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
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
              <h1 className="text-xl font-bold">My Files</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm hidden sm:inline">{user?.email}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Your Saved Files</h2>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"></div>
            </div>
          ) : files.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-surface border border-gray-700 rounded-2xl p-12 text-center"
            >
              <FileCode className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No saved files yet</h3>
              <p className="text-gray-400 mb-6">Start coding and save your files to see them here</p>
              <Link
                to="/editor"
                className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-blue-700 rounded-lg font-medium transition-all duration-300"
              >
                Go to Editor
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface border border-gray-700 rounded-xl p-6 hover:border-primary-blue transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCode className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold truncate">{file.filename}</h3>
                        <p className="text-gray-400 text-sm">{formatDate(file.upload_date)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(file.id, file.filename)}
                        className="flex items-center px-4 py-2 bg-accent-teal/20 hover:bg-accent-teal/30 text-accent-teal rounded-lg transition-all duration-200"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Download</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FilesPage;
