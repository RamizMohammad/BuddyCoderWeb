import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Language } from '../pages/EditorPage';

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  selectedLanguage,
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const languageIcons: { [key: string]: string } = {
    python: '🐍',
    javascript: '⚡',
    java: '☕',
    cpp: '⚙️',
    c: '🔧'
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 min-w-[160px]"
      >
        <span className="text-xl">{languageIcons[selectedLanguage.value]}</span>
        <span className="font-medium">{selectedLanguage.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-1 left-0 right-0 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50"
        >
          {languages.map((language) => (
            <button
              key={language.value}
              onClick={() => {
                onLanguageChange(language);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-3 px-4 py-3 w-full text-left hover:bg-gray-600 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                selectedLanguage.value === language.value ? 'bg-blue-600/20 text-blue-400' : 'text-white'
              }`}
            >
              <span className="text-xl">{languageIcons[language.value]}</span>
              <span className="font-medium">{language.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSelector;