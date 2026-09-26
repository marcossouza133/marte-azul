import random

perguntas_padrao = [
    {"pergunta": "Qual é o planeta conhecido como Planeta Vermelho?", "resposta": "Marte", "dica": "É o nome do nosso projeto! 🚀"},
    {"pergunta": "Qual é a maior montanha do sistema solar, localizada em Marte?", "resposta": "Monte Olimpo", "dica": "Tem o nome de um deus grego!"},
    {"pergunta": "Quantos satélites naturais tem Marte?", "resposta": "2", "dica": "São Fobos e Deimos!"},
    {"pergunta": "Qual elemento químico dá a cor avermelhada ao solo de Marte?", "resposta": "Ferro", "dica": "Oxi... de ferro!"},
    {"pergunta": "Marte está localizado entre quais dois planetas?", "resposta": "Terra e Júpiter", "dica": "Um é a nossa casa, o outro é o maior do sistema!"},
]

def get_pergunta_aleatoria():
    return random.choice(perguntas_padrao)

def verificar_resposta(resposta_usuario: str, resposta_correta: str) -> bool:
    return resposta_usuario.strip().lower() == resposta_correta.strip().lower()