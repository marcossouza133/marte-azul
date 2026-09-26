import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Botao } from '../components/Button'
import { api } from '../utils/api'

const equipamentos = [
  { id: 1, nome: '🔭 Telescópio', custo: 30, desc: 'Observa estrelas e galáxias distantes' },
  { id: 2, nome: '☀️ Painel Solar', custo: 50, desc: 'Gera energia limpa no seu terreno' },
  { id: 3, nome: '📡 Antena de Comunicação', custo: 40, desc: 'Conecta com a Terra e outras bases' },
  { id: 4, nome: '🤖 Robô Explorador', custo: 80, desc: 'Mapeia áreas desconhecidas' },
  { id: 5, nome: '🏠 Módulo Habitável', custo: 100, desc: 'Sua base permanente em Marte!' },
]

export default function Loja() {
  const [usuarioId, setUsuarioId] = useState<number | null>(null)
  const [pontos, setPontos] = useState(0)
  const [mensagem, setMensagem] = useState('')

  const comprar = async (nome: string, custo: number) => {
    if (!usuarioId) {
      setMensagem('⚠️ Primeiro vá em "Meu Terreno" e faça seu registro!')
      return
    }
    try {
      const res = await api.comprarEquipamento(usuarioId, nome, custo)
      setPontos(res.pontos_restantes)
      setMensagem(`✅ ${nome} instalado com sucesso! Pontos restantes: ${res.pontos_restantes}`)
    } catch {
      setMensagem('❌ Pontos insuficientes! Responda o Quiz para ganhar mais! 🧠')
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#FF7A30', textAlign: 'center', marginBottom: '10px' }}>🏗️ Loja de Equipamentos</h2>
      <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '30px' }}>Pontos disponíveis: <span style={{ color: '#FF7A30', fontWeight: 'bold' }}>{pontos}</span></p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {equipamentos.map(eq => (
          <Card key={eq.id}>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{eq.nome}</h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>{eq.desc}</p>
            <p style={{ color: '#FF7A30', fontWeight: 'bold', marginBottom: '12px' }}>{eq.custo} pontos</p>
            <Botao variant="secondary" onClick={() => comprar(eq.nome, eq.custo)}>Comprar 🛒</Botao>
          </Card>
        ))}
      </div>
      
      {mensagem && <p style={{ marginTop: '24px', textAlign: 'center', color: mensagem.includes('✅') ? '#25f080' : '#FF7A30' }}>{mensagem}</p>}
    </div>
  )
}