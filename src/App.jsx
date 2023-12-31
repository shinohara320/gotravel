import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DetailArticle from './pages/DetailArticle'
function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage/>} />
        <Route path={"/article/:id"} element={<DetailArticle/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/dashboard"} element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
