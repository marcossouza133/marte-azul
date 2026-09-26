from sqlalchemy import Column, Integer, String, JSON
from database import Base

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    pontos = Column(Integer, default=0)
    coordenadas = Column(String, default="")
    equipamentos = Column(JSON, default=list)

class Pergunta(Base):
    __tablename__ = "perguntas"
    id = Column(Integer, primary_key=True, index=True)
    pergunta = Column(String)
    resposta = Column(String)
    dica = Column(String, default="")