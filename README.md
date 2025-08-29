# CodeRunner - Professional Online Coding Platform

A modern, full-featured online IDE that supports multiple programming languages with real-time compilation and execution.

## 🚀 Features

- **Multi-Language Support**: Python, JavaScript, Java, C++, C
- **Professional Editor**: Monaco editor with syntax highlighting, IntelliSense, and auto-completion
- **Real-time Execution**: Compile and run code instantly with detailed output
- **Material Design UI**: Dark theme with professional aesthetics
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Secure Execution**: Backend sandboxing with timeout protection

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Monaco Editor** for code editing
- **Vite** for development and building

### Backend
- **Python Flask** for API server
- **Subprocess** for code execution
- **CORS** for cross-origin requests
- **Temporary file handling** for secure execution

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- GCC compiler (for C/C++)
- Java Development Kit (for Java)

### Quick Start

1. **Clone and install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install Python backend dependencies:**
   ```bash
   pip install flask flask-cors
   ```

3. **Start both servers:**
   ```bash
   python run_servers.py
   ```

   Or run them separately:
   
   **Frontend (Terminal 1):**
   ```bash
   npm run dev
   ```
   
   **Backend (Terminal 2):**
   ```bash
   python server.py
   ```

4. **Open your browser:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🎯 Usage

1. **Landing Page**: Browse the features and language support
2. **Editor Page**: Select a language, write your code, and click "Run Code"
3. **Output Panel**: View execution results, errors, and compilation messages
4. **Language Switching**: Change languages on-the-fly with default code templates

## 🔒 Security Features

- **Execution Timeout**: 10-second limit to prevent infinite loops
- **Temporary Files**: Code is executed in isolated temporary files
- **Error Handling**: Comprehensive error reporting and validation
- **CORS Protection**: Configured for local development

## 🎨 Design System

### Colors
- **Background**: Material Dark (#121212)
- **Primary**: Blue (#1976D2)
- **Accent**: Teal (#009688)
- **Highlights**: Amber (#FFC107)
- **Surface**: Dark Grey (#1E1E1E)

### Typography
- **UI Font**: Roboto (300, 400, 500, 700)
- **Code Font**: Fira Code (400, 500)

## 📚 API Documentation

### POST /run
Execute code in specified language.

**Request:**
```json
{
  "language": "python",
  "code": "print('Hello World')"
}
```

**Response:**
```json
{
  "output": "Hello World\n",
  "error": ""
}
```

### GET /health
Check server status and supported languages.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Monaco Editor by Microsoft
- Material Design by Google
- React team for the amazing framework
- Flask community for the lightweight web framework