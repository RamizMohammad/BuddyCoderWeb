import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import CPage from './pages/CPage';
import CppPage from './pages/CppPage';
import EditorPage from './pages/EditorPage';
import JavaPage from './pages/JavaPage';
import JsPage from './pages/JsPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PythonPage from './pages/PythonPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/python" element={<PythonPage />} />
            <Route path="/java" element={<JavaPage />} />
            <Route path="/c" element={<CPage />} />
            <Route path="/cpp" element={<CppPage />} />
            <Route path="/javascript" element={<JsPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
