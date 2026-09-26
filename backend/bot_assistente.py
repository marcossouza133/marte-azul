import re

def responder(pergunta: str) -> str:
    p = pergunta.lower()
    
    if re.search(r"pontos|ponto|ganhar", p):
        return "Aí sim! 🎉 Você ganha pontos respondendo o Quiz! Cada resposta certa vale 10 pontos. Com eles, você pode comprar equipamentos pra deixar seu pedacinho de Marte incrível! 🔭✨"
    
    if re.search(r"terreno|comprar|adquirir", p):
        return "Eba! 🚀 É super fácil! Vai em 'Meu Terreno', escolhe suas coordenadas e ele é seu — simbolicamente, claro! 😊 Depois é só acumular pontos pra construir coisas por lá!"
    
    if re.search(r"equipamento|construir|comprar", p):
        return "Aí que a diversão começa! 🛠️ Vai na Loja e veja o que pode instalar: antenas, painéis solares, robôs... cada um com sua pontuação! Quanto mais você aprende, mais constrói! 💡"
    
    if re.search(r"como funciona|o que é|projeto", p):
        return "Somos o Marte-azul! 🔵🚀 Um projeto divertido e fictício onde você tem seu pedacinho de Marte, aprende sobre o espaço e evolui seu terreno com o conhecimento! Tudo feito com muito carinho pra você! 💙"
    
    if re.search(r"oi|olá|bom dia|boa tarde", p):
        return "Oiii! Tudo bem? 😊✨ Que alegria te ver por aqui! Eu sou sua assistente espacial! Em que posso te ajudar hoje? 🚀"
    
    return "Hmm... deixa eu pensar 🤔💭 Ainda tô aprendendo! Mas posso te ajudar com pontos, terrenos, equipamentos e o quiz! Pergunta sobre qualquer coisa dessas que te explico direitinho! 💙"