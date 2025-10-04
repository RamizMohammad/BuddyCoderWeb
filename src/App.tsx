import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CPage from './pages/CPage';
import CppPage from './pages/CppPage';
import EditorPage from './pages/EditorPage';
import JavaPage from './pages/JavaPage';
import JsPage from './pages/JsPage';
import LandingPage from './pages/LandingPage';
import PythonPage from './pages/PythonPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/java" element={<JavaPage />} />
          <Route path="/c" element={<CPage />} />
          <Route path="/cpp" element={<CppPage />} />
          <Route path="/javascript" element={<JsPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
