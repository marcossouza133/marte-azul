import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { BotAssistente } from './components/BotAssistente'
import Inicio from './pages/Inicio'
import Terreno from './pages/Terreno'
import QuizPage from './pages/QuizPage'
import Loja from './pages/Loja'
import Registro from './pages/Registro'

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #382B24 0%, #1A1A1E 60%, #0F0F12 100%)',
        color: '#fff',
        paddingTop: '70px'
      }}>
        <Navbar />
        <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/terreno" element={<Terreno />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>
        <BotAssistente />
      </div>
    </Router>
  )
}

export default App