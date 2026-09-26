const API_URL = 'http://localhost:8000'

export const api = {
  async getPerguntaAleatoria() {
    const res = await fetch(`${API_URL}/perguntas/aleatoria`)
    return res.json()
  },
  
  async verificarResposta(resposta: string, usuarioId?: number) {
    const res = await fetch(`${API_URL}/verificar-resposta`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resposta, usuario_id: usuarioId })
    })
    return res.json()
  },
  
  async falarComBot(mensagem: string) {
    const res = await fetch(`${API_URL}/bot/resposta`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensagem })
    })
    return res.json()
  },
  
  async criarUsuario(nome: string, email: string) {
    const res = await fetch(`${API_URL}/usuarios/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    })
    return res.json()
  },
  
  async definirTerreno(usuarioId: number, coordenadas: string) {
    const res = await fetch(`${API_URL}/usuario/${usuarioId}/terreno?coordenadas=${encodeURIComponent(coordenadas)}`, { method: 'PUT' })
    return res.json()
  },
  
  async comprarEquipamento(usuarioId: number, nome: string, custo: number) {
    const res = await fetch(`${API_URL}/usuario/${usuarioId}/equipamentos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, custo })
    })
    return res.json()
  },
  
  async getUsuario(usuarioId: number) {
    const res = await fetch(`${API_URL}/usuario/${usuarioId}`)
    return res.json()
  }
}