from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, get_db, Base
from pydantic import BaseModel
from typing import Optional
from models import Usuario
from quiz_ia import get_pergunta_aleatoria, verificar_resposta
from bot_assistente import responder

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Marte-Azul API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UsuarioCreate(BaseModel):
    nome: str
    email: str

class RespostaQuiz(BaseModel):
    resposta: str
    usuario_id: Optional[int] = None

class MensagemBot(BaseModel):
    mensagem: str

@app.get("/")
def root():
    return {"mensagem": "🚀 API Marte-Azul está no ar!"}

@app.post("/usuarios/")
def criar_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    db_usuario = Usuario(nome=usuario.nome, email=usuario.email)
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario

@app.get("/perguntas/aleatoria")
def pergunta_aleatoria():
    return get_pergunta_aleatoria()

@app.post("/verificar-resposta")
def checar_resposta(dados: RespostaQuiz, db: Session = Depends(get_db)):
    pergunta_atual = get_pergunta_aleatoria()
    acertou = verificar_resposta(dados.resposta, pergunta_atual["resposta"])
    
    if acertou and dados.usuario_id:
        usuario = db.query(Usuario).filter(Usuario.id == dados.usuario_id).first()
        if usuario:
            usuario.pontos += 10
            db.commit()
            return {"acertou": True, "pontos": usuario.pontos, "resposta_correta": pergunta_atual["resposta"]}
    
    return {"acertou": acertou, "resposta_correta": pergunta_atual["resposta"]}

@app.post("/bot/resposta")
def falar_com_bot(dados: MensagemBot):
    return {"resposta": responder(dados.mensagem)}

@app.get("/usuario/{usuario_id}")
def dados_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(404, "Usuário não encontrado")
    return usuario

@app.put("/usuario/{usuario_id}/terreno")
def definir_terreno(usuario_id: int, coordenadas: str, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(404, "Usuário não encontrado")
    usuario.coordenadas = coordenadas
    db.commit()
    return {"sucesso": True, "coordenadas": coordenadas}

@app.post("/usuario/{usuario_id}/equipamentos")
def comprar_equipamento(usuario_id: int, nome: str, custo: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()
    if not usuario or usuario.pontos < custo:
        raise HTTPException(400, "Pontos insuficientes")
    usuario.pontos -= custo
    equipamentos = usuario.equipamentos or []
    equipamentos.append({"nome": nome, "custo": custo})
    usuario.equipamentos = equipamentos
    db.commit()
    return {"sucesso": True, "pontos_restantes": usuario.pontos, "equipamento": nome}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)