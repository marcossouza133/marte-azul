import React, { useState } from 'react'
import { api } from '../utils/api'
import { tocarSom } from '../utils/som'

export const Quiz = () => {
  const [pergunta, setPergunta] = useState<null | {pergunta: string; resposta: string; dica: string}>(null)
  const [respostaUsuario, setRespostaUsuario] = useState('')
  const [resultado, setResultado] = useState<null | {acertou: boolean; resposta_correta?: string}>(null)
  const [carregando, setCarregando] = useState(false)

  const novaPergunta = async () => {
    setCarregando(true)
    setResultado(null)
    setRespostaUsuario('')
    try {
      const dados = await api.getPerguntaAleatoria()
      setPergunta(dados)
      lerEmVoz(dados.pergunta)
    } catch (e) {
      console.error(e)
    }
    setCarregando(false)
  }

  const lerEmVoz = (texto: string) => {
    if ('speechSynthesis' in window) {
      const fala = new SpeechSynthesisUtterance(texto)
      fala.lang = 'pt-BR'
      fala.volume = 1
      fala.rate = 1
      speechSynthesis.speak(fala)
    }
  }

  const verificar = async () => {
    if (!pergunta) return
    tocarSom('clique')
    try {
      const res = await api.verificarResposta(respostaUsuario)
      setResultado(res)
      if (res.acertou) {
        tocarSom('sucesso')
        lerEmVoz('Parabéns! Você acertou!')
      } else {
        tocarSom('alerta')
        lerEmVoz(`Ops... a resposta certa é ${res.resposta_correta}`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      {!pergunta ? (
        <div>
          <h2 style={{ color: '#FF7A30', marginBottom: '20px' }}>🧠 Quiz Espacial</h2>
          <p style={{ color: '#aaa', marginBottom: '30px' }}>Aprenda sobre o espaço e ganhe pontos para construir no seu terreno!</p>
          <button onClick={novaPergunta} style={{ padding: '14px 32px', background: 'transparent', border: '2px solid #FF7A30', color: '#FF7A30', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', boxShadow: '0 0 15px #FF7A30' }}>
            🚀 Começar Quiz
          </button>
        </div>
      ) : (
        <div>
          <div style={{ background: '#1E1E22', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }}>
            <p style={{ fontSize: '20px', marginBottom: '16px' }}>{pergunta.pergunta}</p>
            <button onClick={() => lerEmVoz(pergunta.pergunta)} style={{ background: 'none', border: 'none', color: '#FF7A30', cursor: 'pointer', marginBottom: '16px' }}>🔊 Ouvir pergunta</button>
            <input
              value={respostaUsuario}
              onChange={(e) => setRespostaUsuario(e.target.value)}
              placeholder="Sua resposta..."
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: '#2A2A2E', color: '#fff', fontSize: '16px', marginBottom: '12px' }}
              onKeyDown={(e) => e.key === 'Enter' && verificar()}
            />
            {pergunta.dica && <p style={{ color: '#888', fontSize: '14px' }}>💡 Dica: {pergunta.dica}</p>}
          </div>

          {resultado && (
            <div style={{ padding: '16px', borderRadius: '8px', marginBottom: '16px', background: resultado.acertou ? 'rgba(37, 240, 128, 0.1)' : 'rgba(255, 80, 80, 0.1)', border: resultado.acertou ? '1px solid #25f080' : '1px solid #FF5050' }}>
              {resultado.acertou ? '🎉 Parabéns! Resposta certa!' : `😯 A resposta era: ${resultado.resposta_correta}`}
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {!resultado && <button onClick={verificar} style={{ padding: '12px 24px', background: '#FF7A30', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Verificar ✅</button>}
            <button onClick={novaPergunta} style={{ padding: '12px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>Próxima ➡️</button>
          </div>
        </div>
      )}
    </div>
  )
}