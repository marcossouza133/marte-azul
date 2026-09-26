import React from 'react'
import { Link } from 'react-router-dom'
import { Botao } from '../components/Button'
import { Card } from '../components/Card'

export default function Inicio() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '16px', background: 'linear-gradient(90deg, #FF7A30, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        🚀 Marte-Azul
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 40px' }}>
        Seu pedacinho simbólico do Planeta Vermelho. Aprenda, evolua e construa seu espaço no cosmos! 🔭✨
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <Card>
          <h3 style={{ color: '#FF7A30', marginBottom: '12px' }}>🌍 Adquira seu Terreno</h3>
          <p style={{ color: '#aaa', marginBottom: '16px' }}>Escolha suas coordenadas e reivindique simbolicamente um pedaço de Marte!</p>
          <Link to="/terreno"><Botao>Conseguir Meu Lote 🎁</Botao></Link>
        </Card>

        <Card>
          <h3 style={{ color: '#FF7A30', marginBottom: '12px' }}>🧠 Aprenda com o Quiz</h3>
          <p style={{ color: '#aaa', marginBottom: '16px' }}>Responda perguntas, acumule pontos e ganhe conhecimento espacial!</p>
          <Link to="/quiz"><Botao>Começar a Aprender 📚</Botao></Link>
        </Card>

        <Card>
          <h3 style={{ color: '#FF7A30', marginBottom: '12px' }}>🏗️ Construa e Evolua</h3>
          <p style={{ color: '#aaa', marginBottom: '16px' }}>Use seus pontos para instalar equipamentos e melhorar sua base!</p>
          <Link to="/loja"><Botao>Ver Loja 🔧</Botao></Link>
        </Card>
      </div>

      <div style={{ color: '#666', fontSize: '14px', marginTop: '20px', padding: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        ⚠️ Este é um projeto fictício e simbólico — sem valor legal. Feito com 💙 para explorar o espaço!
      </div>
    </div>
  )
}