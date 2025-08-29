import React from 'react';
import { motion } from 'framer-motion';

interface Language {
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface FeatureCardProps {
  language: Language;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ language }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${language.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
        {language.icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{language.name}</h3>
      <p className="text-gray-400 leading-relaxed">{language.description}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Ready to use</span>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;