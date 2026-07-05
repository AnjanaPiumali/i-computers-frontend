import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import TestPage from './pages/TestPage';


function App() {

  return (
    <div className="w-full h-screen">
      
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/admin/*" element={<AdminPage/>} />
        <Route path="/test" element={<TestPage/>} />

      </Routes>

    </div>
    
  )
}

export default App
