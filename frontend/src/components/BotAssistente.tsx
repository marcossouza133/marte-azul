import React, { useState } from 'react'
import { api } from '../utils/api'
import { tocarSom } from '../utils/som'

export const BotAssistente = () => {
  const [aberta, setAberta] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [respostas, setRespostas] = useState<{texto: string; ehBot: boolean}[]>([
    { texto: 'Oiii! 😊✨ Eu sou sua assistente espacial! Em que posso te ajudar hoje?', ehBot: true }
  ])
  const [carregando, setCarregando] = useState(false)

  const enviar = async () => {
    if (!mensagem.trim()) return
    tocarSom('clique')
    setRespostas(prev => [...prev, { texto: mensagem, ehBot: false }])
    setMensagem('')
    setCarregando(true)
    
    try {
      const res = await api.falarComBot(mensagem)
      setRespostas(prev => [...prev, { texto: res.resposta, ehBot: true }])
      tocarSom('sucesso')
    } catch {
      setRespostas(prev => [...prev, { texto: 'Ops... estou com problemas técnicos! 🛰️ Tenta de novo!', ehBot: true }])
    }
    setCarregando(false)
  }

  if (!aberta) return (
    <button
      onClick={() => { tocarSom('clique'); setAberta(true) }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FF7A30, #FF9500)',
        border: 'none',
        fontSize: '28px',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(255, 122, 48, 0.5)',
        zIndex: 999
      }}
    >
      🤖
    </button>
  )

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '90%',
      maxWidth: '380px',
      maxHeight: '500px',
      background: '#2A2A2E',
      border: '1px solid rgba(255, 122, 48, 0.3)',
      borderRadius: '16px',
      boxShadow: '0 0 25px rgba(255, 122, 48, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 999
    }}>
      <div style={{
        padding: '14px 18px',
        background: 'linear-gradient(90deg, #FF7A30, #FF9500)',
        color: '#000',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>🤖 Assistente Espacial</span>
        <button onClick={() => { tocarSom('clique'); setAberta(false) }} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>×</button>
      </div>
      
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {respostas.map((r, i) => (
          <div key={i} style={{
            alignSelf: r.ehBot ? 'flex-start' : 'flex-end',
            background: r.ehBot ? '#38383D' : 'rgba(255, 122, 48, 0.2)',
            padding: '10px 14px',
            borderRadius: '14px',
            borderBottomLeftRadius: r.ehBot ? '4px' : '14px',
            borderBottomRightRadius: r.ehBot ? '14px' : '4px',
            maxWidth: '85%'
          }}>
            {r.texto}
          </div>
        ))}
        {carregando && <div style={{ color: '#888' }}>Digitando... 🪐</div>}
      </div>
      
      <div style={{ display: 'flex', padding: '14px', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <input
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && enviar()}
          placeholder="Pergunte algo..."
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: '#1E1E22', color: '#fff' }}
        />
        <button onClick={enviar} style={{ padding: '0 18px', background: '#FF7A30', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>➤</button>
      </div>
    </div>
  )
}