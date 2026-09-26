import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Botao } from '../components/Button'
import { api } from '../utils/api'

export default function Terreno() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [coordenadas, setCoordenadas] = useState('')
  const [usuarioId, setUsuarioId] = useState<number | null>(null)
  const [mensagem, setMensagem] = useState('')

  const registrar = async () => {
    if (!nome || !email) return
    try {
      const res = await api.criarUsuario(nome, email)
      setUsuarioId(res.id)
      setMensagem(`Bem-vindo(a), ${res.nome}! 🚀 Agora escolha suas coordenadas!`)
    } catch {
      setMensagem('Erro ao registrar! Tenta de novo 😅')
    }
  }

  const definirTerreno = async () => {
    if (!usuarioId || !coordenadas) return
    try {
      await api.definirTerreno(usuarioId, coordenadas)
      setMensagem(`🌕 Terreno registrado em ${coordenadas}! É todo seu (simbolicamente)! ✨`)
    } catch {
      setMensagem('Erro ao registrar terreno! 😅')
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#FF7A30', textAlign: 'center', marginBottom: '30px' }}>🌍 Seu Terreno em Marte</h2>
      
      {!usuarioId ? (
        <Card>
          <h3 style={{ marginBottom: '20px' }}>Primeiro, se apresente! 👋</h3>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            style={{ width: '100%', padding: '14px', marginBottom: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: '#1E1E22', color: '#fff', fontSize: '16px' }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            type="email"
            style={{ width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: '#1E1E22', color: '#fff', fontSize: '16px' }}
          />
          <Botao onClick={registrar}>Registrar 🚀</Botao>
          {mensagem && <p style={{ marginTop: '16px', color: '#25f080' }}>{mensagem}</p>}
        </Card>
      ) : (
        <Card>
          <h3 style={{ marginBottom: '20px' }}>Defina suas coordenadas 📍</h3>
          <input
            value={coordenadas}
            onChange={(e) => setCoordenadas(e.target.value)}
            placeholder="Ex: 24°12'N 59°48'W"
            style={{ width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: '#1E1E22', color: '#fff', fontSize: '16px' }}
          />
          <Botao onClick={definirTerreno}>Reivindicar Terreno 🏗️</Botao>
          {mensagem && <p style={{ marginTop: '16px', color: '#25f080' }}>{mensagem}</p>}
        </Card>
      )}
    </div>
  )
}