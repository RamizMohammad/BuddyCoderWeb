import { motion } from 'framer-motion';
import { Code2, Coffee, FileCode, Github, Globe, Linkedin, Play, Settings, Terminal, Twitter, Wrench, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import Navbar from '../components/Navbar';
import SeoTags from "../components/SeoTags";

const languages = [
  { 
    name: 'Python', 
    icon: <FileCode className="w-8 h-8" />, 
    color: 'from-green-400 to-blue-500', 
    description: 'High-level programming with clean syntax and powerful libraries',
    features: ['Data Science', 'AI/ML', 'Web Development']
  },
  { 
    name: 'JavaScript', 
    icon: <Zap className="w-8 h-8" />, 
    color: 'from-amber-highlight to-orange-500', 
    description: 'Dynamic web development with modern ES6+ features',
    features: ['Frontend', 'Backend', 'Full-stack']
  },
  { 
    name: 'Java', 
    icon: <Coffee className="w-8 h-8" />, 
    color: 'from-red-400 to-pink-500', 
    description: 'Object-oriented enterprise development with robust performance',
    features: ['Enterprise', 'Android', 'Spring Boot']
  },
  { 
    name: 'C++', 
    icon: <Settings className="w-8 h-8" />, 
    color: 'from-primary-blue to-purple-500', 
    description: 'System programming with high performance and memory control',
    features: ['Gaming', 'Systems', 'Performance']
  },
  { 
    name: 'C', 
    icon: <Wrench className="w-8 h-8" />, 
    color: 'from-gray-400 to-gray-600', 
    description: 'Low-level systems programming with direct hardware access',
    features: ['Embedded', 'OS Development', 'Drivers']
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-material-dark text-white">
      {/* ✅ SEO TAGS at top */}
      <SeoTags
        title="BuddyCode - Online Compiler for Java, Python, C, C++, JavaScript"
        description="BuddyCode is a free online compiler and IDE for Java, Python, C, C++, and JavaScript. Run code instantly in your browser."
        url="https://your-domain.com/"
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-blue via-accent-teal to-amber-highlight bg-clip-text text-transparent leading-tight">
              Code, Compile & Run Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Supports Java, C, C++, Python, and JavaScript. <br />
              Write, test, and share your code instantly in the browser with professional-grade tools.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/editor"
                className="inline-flex items-center px-10 py-5 bg-primary-blue hover:bg-blue-700 rounded-lg text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Play className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Start Coding Now</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-20 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-highlight/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-surface relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Supported Languages</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our carefully selected programming languages, each optimized for the best coding experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard language={language} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose BuddyCode?</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our platform provides a seamless coding experience with real-time compilation, 
                professional syntax highlighting, and instant feedback. Perfect for learning, 
                prototyping, interviewing, and sharing code snippets with colleagues.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Execution</h3>
                    <p className="text-gray-400">Compile and run your code instantly with detailed output and error reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Editor</h3>
                    <p className="text-gray-400">Monaco editor with IntelliSense, syntax highlighting, and auto-completion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-highlight/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-amber-highlight" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zero Setup</h3>
                    <p className="text-gray-400">No installation required - start coding immediately in your browser</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - terminal window */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-surface rounded-3xl p-8 border border-gray-700 relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-highlight rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">terminal</span>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 font-fira">
                <div className="text-accent-teal mb-2">$ python hello.py</div>
                <pre className="text-green-400 text-sm leading-relaxed">
{`def greet(name):
    return f"Welcome to BuddyCode, {name}!"

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(greet("Developer"))
print(f"Fibonacci(8) = {fibonacci(8)}")

> Welcome to BuddyCode, Developer!
> Fibonacci(8) = 21`}
                </pre>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-surface border-t border-gray-700 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code2 className="w-8 h-8 mr-3 text-primary-blue" />
                BuddyCode
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Professional online coding platform designed for developers, students, and educators. 
                Experience the future of collaborative programming.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/RamizMohammad" className="w-12 h-12 bg-gray-700 hover:bg-primary-blue rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/Mohammad__Ramiz" className="w-12 h-12 bg-gray-700 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mohammad-ramiz-886468217/" className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 text-gray-200">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
                <li><Link to="/editor" className="hover:text-white transition-colors duration-200">Editor</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              </ul>
            </div>
          </div>
        
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; ❤️ Developed By Mohammad Ramiz | All Right Reserved ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;