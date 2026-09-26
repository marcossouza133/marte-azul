Crie um Produto Minimo Viavel (MVP) responsivo para uma plataforma de imobiliaria espacial chamada "Mars Horizon". A aplicacao deve ser totalmente funcional com dados mockados, simulacao estrita de estados de autenticacao e uma estetica futurista de ficcao cientifica.
  ### intrucoes para a ia: pode alterar e testar qualquer arquivo desde que o proprio admin de autorizacao e que receba autorizacao direta de mim e do meu github  ### objetivo eu preciso do sistema rodando locamente no meu computador, leia completamente as intrcoes para esse projeto e entenda oque eu preciso, salve a suas orientacoes e o processo para rodar essa aplicacao na pasta raiz do projeto com o nome "setap.md"  faz o mapa do projeto que voce consiga entender para retomamar o serviço de onde parou caso nao consiga terminar no mesmo dia ou caso voce ou outra ia precise terminar o servico, ao terminar esse projeto me mande uma notificao pode ser no proprio prompt do meu chat gpt com o email da conta que estiver logado como "marcos.souza@equipe.pixaflow.com" ou "marcos.al.arquiteto@gmail.com"###

**### Estilo Global e Tema (Interface Futurista)**

- Fundo: Preto absoluto profundo (use classes Tailwind como `bg-black`).

- Detalhes e Contrastes: Linhas brancas finas e nitidas (`border-white/20`) e realces em neon laranja (`text-orange-500`, `shadow-orange-500/50`).

- Estilo dos Cards: Efeito de vidro translucido / glassmorphism (`bg-white/5 backdrop-blur-md border border-white/10`).

- Interacoes e Animacoes: Passar o mouse pelos cards deve acionar um efeito de zoom suave (`hover:scale-105 transition-all`), um brilho neon laranja ao redor e uma mudanca no ponteiro. Cliques devem simular visualmente um efeito de clique tecnologico ou ripple.

**### Estados do App e Navegacao**

Simule um estado global de autenticacao do usuario: `isLoggedIn` (true/false) e `currentUser`.

- Navegacao Desktop: Uma barra lateral esquerda fixa contendo os links: (1) Login/Perfil, (2) Meu Passaporte, (3) Painel Rede Social, (4) Explorar Marte.

- Navegacao Mobile (Celular): Uma barra de navegacao inferior fixa com os mesmos 4 itens.

- EXCECAO CRITICA: A Tela de Entrada Inicial NAO DEVE exibir nenhuma barra de navegacao (sem barra lateral no desktop e sem barra inferior no mobile).

**---**

**### TELA 1: Tela de Entrada / Inicio (Bem-vindo)**

- Layout: Tela cheia centralizada, sem barras de navegacao visiveis.

- Conteudo: Um titulo de introducao inspirador e um pequeno texto sobre como vai ser bom ter uma experiencia e possuir terrenos em Marte.

- Card de Login: Container centralizado com estilo translucido (efeito vidro).

* Campo Input Email: tipo email, obrigatorio (required), placeholder: "email valido".

* Campo Input Senha: tipo password, obrigatorio (required), placeholder: "senha valida".

* Botao de Acao 1: "Entrar" -> Valida os campos, define `isLoggedIn = true` e redireciona para a tela "Explorar Marte".

* Botao de Acao 2: "Cadastrar Novo Usuario" -> Abre um Modal / Pop-up sobreposto na tela.

* Botao de Acao 3: "Entrar sem Cadastro" -> Define `isLoggedIn = false` e redireciona para a tela "Explorar Marte" em modo visitante.

- Modal de Cadastro (Pop-up sobreposto):

* Formulario para registrar novo usuario. Campos: Nome, Email, Senha. Ao salvar, loga o usuario automaticamente.

**---**

**### TELA 2: Explorar Marte (Vitrine de Terrenos)**

- Layout: Exibe as barras de navegacao (lateral no desktop / inferior no mobile).

- Estrutura da Grade: Exibe um array inicial com 8 cards de terrenos mockados.

- Paginacao / Proximos Arrays: Inclua um botao de acao chamado "Proximo Lote" para avancar e carregar mais 2 arrays de rolagem (totalizando 24 terrenos unicos mockados no sistema).

- Cards de Terrenos:

* Cada card deve buscar imagens online variadas e de alta qualidade com tematica espacial/Marte (vistas de satelite, paisagens vermelhas).

* Exibir atributos no card: Numero do Lote, Setor, Coordenadas e Preco (em BTC ou Creditos Cosmicos).

* Botao de Acao: "Comprar".

  * Regra: Se `isLoggedIn` for falso (visitante), bloqueie a acao e mostre um toast/alerta flutuante translucido dizendo: "Autenticacao requerida. Faca login para adquirir terras em Marte". Se estiver logado, exiba uma mensagem de sucesso na compra.

**---**

**### TELA 3: Painel Rede Social (Mural de Mensagens)**

- Layout: Exibe as barras de navegacao.

- Componente Mural: Um feed social futurista onde os usuarios compartilham pensamentos cosmicos.

- Funcionalidades:

* Caixa de Texto para Postar: Se o usuario digitar e clicar em "Postar", verifique se `isLoggedIn` e verdadeiro. Se for falso, bloqueie e peca login. Se for verdadeiro, adicione a mensagem no topo do feed com o nome do usuario.

* Comentarios / Respostas: Cada post no mural deve ter uma lista interna de respostas e um botao "Responder". Tambem exige `isLoggedIn = true` para enviar a resposta.

* Inicialize o feed com pelo menos 3 mensagens mockadas de outros astronautas/usuarios para o mural nao iniciar vazio.

# MARS HORIZON

# MARS HORIZON

## 1. OBJETIVO

Este projeto e uma plataforma de imobiliaria espacial chamada "Mars Horizon".

O frontend foi desenvolvido inicialmente no Lovable e sera utilizado como referencia para a construcao de um backend real.

O projeto deve funcionar localmente no computador do desenvolvedor.

O backend deve utilizar:

* Python
* FastAPI
* SQLite
* SQLAlchemy ou SQLModel
* Pydantic
* Uvicorn

O frontend existente deve ser preservado e conectado ao backend real.

Nao utilizar dados mockados como fonte principal da aplicacao depois que o backend estiver implementado.

---

# 2. REGRA PRINCIPAL PARA A IA

Antes de modificar qualquer arquivo ou criar qualquer tabela, analise todo o frontend existente.

Identifique:

* paginas;
* componentes;
* formularios;
* botoes;
* estados;
* dados utilizados;
* requisicoes HTTP existentes;
* dados mockados;
* entidades;
* relacionamentos;
* operacoes de criacao;
* operacoes de leitura;
* operacoes de atualizacao;
* operacoes de exclusao;
* regras de autenticacao;
* regras de negocio;
* navegacao entre telas.

Nao invente entidades ou funcionalidades que nao sejam necessarias para atender ao frontend.

Quando houver alguma duvida sobre a estrutura dos dados, primeiro registre a duvida no plano tecnico em vez de assumir uma estrutura arbitraria.

---

# 3. FLUXO DE IMPLEMENTACAO

A implementacao deve seguir obrigatoriamente estas etapas.

## ETAPA 1 - ANALISE

Analise todo o frontend existente.

Mapeie todas as telas e funcionalidades.

Identifique quais dados atualmente sao mockados.

Identifique quais informacoes precisam ser armazenadas no banco.

Identifique quais operacoes precisam de endpoints.

Nao altere o frontend nesta etapa.

---

## ETAPA 2 - PLANO DO BACKEND

Depois da analise, apresente um plano contendo:

### Entidades

Para cada entidade informe:

* nome;
* finalidade;
* campos;
* tipo de cada campo;
* chave primaria;
* chaves estrangeiras;
* relacionamentos;
* obrigatoriedade;
* valores padrao.

### Banco de dados

Defina:

* SQLite como banco local;
* ORM escolhido;
* estrutura das tabelas;
* relacionamentos;
* indices quando necessarios.

### API

Para cada recurso informe:

* metodo HTTP;
* rota;
* finalidade;
* parametros;
* body;
* resposta;
* possiveis erros.

### Autenticacao

Defina como sera implementado:

* cadastro;
* login;
* identificacao do usuario atual;
* protecao de rotas;
* usuario visitante;
* logout.

### Integracao

Explique como o frontend ira consumir a API FastAPI.

Nao implemente ainda.

---


# 5. IMPLEMENTACAO DO BACKEND

Depois da aprovacao:

Crie uma estrutura organizada semelhante a:

backend/
main.py
database.py
models.py
schemas.py
routers/
services/
requirements.txt

A estrutura pode ser adaptada caso a analise do projeto indique uma organizacao melhor.

O backend deve possuir:

* FastAPI;
* SQLAlchemy ou SQLModel;
* SQLite;
* Pydantic;
* CORS configurado para o frontend local;
* tratamento basico de erros;
* organizacao por routers;
* criacao automatica das tabelas.

---

# 6. BANCO DE DADOS

O banco deve ser SQLite local.

O arquivo do banco deve ficar dentro do backend, por exemplo:

backend/data/mars_horizon.db

A aplicacao deve criar automaticamente as tabelas quando for iniciada pela primeira vez.

Nao depender de um banco externo.

Nao depender de Supabase para o funcionamento principal.

Nao utilizar dados mockados como substituto do banco depois da implementacao.

---

# 7. MODELOS

Os modelos do banco devem ser derivados das necessidades reais encontradas no frontend.

Cada modelo deve possuir:

* id;
* campos necessarios;
* tipos corretos;
* relacionamentos;
* constraints quando necessarias.

Evite criar campos que nao possuem utilizacao real.

Nao duplicar informacoes desnecessariamente.

---

# 8. API

A API deve seguir padrao REST sempre que fizer sentido.

Exemplo:

GET    /api/usuarios
POST   /api/usuarios
GET    /api/usuarios/{id}
PUT    /api/usuarios/{id}
DELETE /api/usuarios/{id}

As rotas reais devem ser determinadas a partir da analise do frontend.

Todos os endpoints devem possuir schemas de entrada e saida quando necessario.

---

# 9. AUTENTICACAO

O sistema deve substituir a simulacao de:

isLoggedIn

por uma autenticacao real.

O cadastro deve salvar o usuario no SQLite.

O login deve validar as credenciais utilizando o banco.

O frontend deve conseguir identificar o usuario autenticado.

O modo visitante deve continuar disponivel para funcionalidades que permitam acesso sem cadastro.

Senhas nunca devem ser armazenadas em texto puro.

---

# 10. TERRENOS DE MARTE

Os terrenos exibidos na tela "Explorar Marte" devem deixar de ser apenas dados mockados.

Eles devem ser armazenados no SQLite.

Cada terreno deve possuir somente os campos realmente necessarios, identificados durante a analise do frontend.

Exemplos de informacoes que podem ser necessarias:

* numero do lote;
* setor;
* coordenadas;
* preco;
* moeda;
* imagem;
* descricao;
* disponibilidade;
* proprietario;
* data de criacao.

A estrutura final deve ser definida apos a analise do frontend.

---

# 11. COMPRA DE TERRENOS

Quando um usuario autenticado comprar um terreno:

1. verificar autenticacao;
2. verificar se o terreno existe;
3. verificar se esta disponivel;
4. registrar a compra;
5. associar o terreno ao usuario;
6. atualizar a disponibilidade;
7. retornar o resultado para o frontend.

Usuarios visitantes nao podem realizar compras.

A operacao deve ser realizada no backend e nao apenas simulada no frontend.

---

# 12. REDE SOCIAL

O mural social deve utilizar dados reais do SQLite.

Posts devem possuir um usuario autor.

Respostas devem possuir:

* autor;
* post relacionado;
* conteudo;
* data de criacao.

A criacao de posts e respostas deve ser realizada atraves da API.

O frontend nao deve manter o feed apenas em memoria.

---

# 13. DADOS INICIAIS

Caso o projeto precise iniciar com terrenos, usuarios demonstrativos ou posts iniciais, criar um mecanismo de seed.

O seed deve:

* ser executavel localmente;
* evitar duplicacoes;
* utilizar dados claramente identificados como iniciais;
* nao substituir os dados reais criados posteriormente.

---

# 14. FRONTEND

Depois que a API estiver funcionando:

Analise os componentes do frontend que atualmente utilizam dados mockados.

Substitua gradualmente os mocks por requisicoes para a API.

Nao alterar o design visual sem necessidade.

Preservar:

* layout;
* responsividade;
* navegacao;
* animacoes;
* identidade visual;
* experiencia do usuario.

Alterar somente o necessario para conectar o frontend ao backend.

---

# 15. CORS

Configurar CORS para permitir o frontend local.

A configuracao deve considerar a porta utilizada pelo Vite durante o desenvolvimento.

Nao liberar origens desnecessarias.

---

# 16. EXECUCAO LOCAL

O projeto deve poder ser executado localmente.

Backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Frontend:

```bash
npm install
npm run dev
```

Os comandos finais devem ser ajustados caso a estrutura existente utilize outros caminhos.

---

# 17. DOCUMENTACAO DA API

Utilizar a documentacao automatica do FastAPI.

Apos iniciar o backend, a documentacao deve estar disponivel nas rotas padrao do FastAPI.

Documentar os endpoints importantes com:

* descricao;
* parametros;
* body;
* respostas;
* erros esperados.

---

# 18. REGRAS DE SEGURANCA

Mesmo sendo um projeto local, seguir boas praticas basicas:

* nunca armazenar senhas em texto puro;
* validar dados recebidos;
* validar IDs;
* validar permissoes;
* evitar SQL manual quando o ORM puder ser utilizado;
* tratar erros;
* nao confiar em regras implementadas apenas no frontend.

---

# 19. TESTE

Depois da implementacao, verificar:

* servidor inicia corretamente;
* banco e criado automaticamente;
* tabelas sao criadas;
* cadastro funciona;
* login funciona;
* usuario visitante funciona;
* terrenos sao carregados do banco;
* compra funciona para usuario autenticado;
* compra e bloqueada para visitante;
* posts funcionam;
* respostas funcionam;
* frontend consegue consumir a API;
* nao existem erros no console;
* nao existem endpoints quebrados.

---

# 20. REGRA DE TRABALHO DA IA

Trabalhe em etapas pequenas e verificaveis.

Antes de realizar uma alteracao estrutural importante:

1. analise os arquivos existentes;
2. explique brevemente o que sera alterado;
3. implemente;
4. verifique se funciona;
5. corrija erros;
6. somente depois avance.

Nao reescreva arquivos inteiros sem necessidade.

Nao remova funcionalidades existentes sem autorizacao.

Nao substitua o frontend por outro projeto.

Nao criar funcionalidades que nao estejam relacionadas ao objetivo do projeto.

Quando encontrar conflito entre o frontend e este README, analise primeiro o codigo existente e informe o conflito antes de tomar uma decisao estrutural.

---

# 21. OBJETIVO FINAL

Ao finalizar a implementacao, o projeto devera possuir:

Frontend
|
v
FastAPI
|
v
SQLAlchemy / SQLModel
|
v
SQLite local

O usuario devera conseguir executar o projeto localmente e utilizar as funcionalidades principais da plataforma com dados persistidos no banco.

O objetivo nao e apenas criar uma demonstracao visual.

O objetivo e transformar o frontend existente em uma aplicacao funcional com backend real e banco de dados local.

# CONFIGURAR ADMINISTRADOR PRINCIPAL E RECUPERACAO DE CONTA

Implemente um sistema completo de administrador para o Mars Horizon.

IMPORTANTE:

Nao colocar credenciais reais diretamente no codigo.

Nao colocar senha no README.md.

Nao colocar senha no GitHub.

Utilizar variaveis de ambiente atraves de um arquivo .env.

## 1. ADMINISTRADOR PRINCIPAL

Criar automaticamente o administrador principal na primeira inicializacao do backend.

Utilizar:

ADMIN_EMAIL
ADMIN_PASSWORD
ADMIN_RECOVERY_EMAIL
ADMIN_RECOVERY_PHONE

Os valores reais serao configurados somente no arquivo .env local.

A conta criada deve possuir:

role = "admin"

O administrador deve utilizar a mesma tela de login da aplicacao.

Depois do login, o backend deve identificar a permissao administrativa e permitir acesso ao:

/admin

## 2. SEGURANCA DA SENHA

A senha nunca deve ser armazenada em texto puro.

Utilizar um algoritmo seguro de hashing de senha.

Nunca mostrar a senha nos logs.

Nunca retornar a senha pela API.

Nunca colocar a senha em arquivos versionados.

Adicionar .env ao .gitignore.

Criar somente:

.env.example

com valores ficticios para demonstracao.

## 3. PAINEL ADMINISTRATIVO

Criar um painel exclusivo para usuarios com:

role = "admin"

O painel deve possuir inicialmente:

/admin
/admin/users
/admin/lands
/admin/purchases
/admin/marketplace
/admin/posts
/admin/missions
/admin/settings
/admin/logs

O backend deve proteger todas essas rotas.

Nao confiar apenas na protecao do frontend.

## 4. RECUPERACAO DE CONTA POR EMAIL

Implementar recuperacao de senha por email.

Fluxo:

1. Usuario seleciona "Esqueci minha senha".
2. Informa o email.
3. Backend verifica a conta.
4. Sistema gera um token temporario e seguro.
5. Token possui prazo de expiracao.
6. Sistema envia um link ou codigo para o email de recuperacao.
7. Usuario confirma o token.
8. Usuario define uma nova senha.
9. Backend salva somente o hash da nova senha.
10. Token antigo deixa de funcionar.

O sistema deve evitar revelar se determinado email possui ou nao uma conta.

## 5. SERVICO DE EMAIL

Antes de escolher um provedor, verifique quais opcoes gratuitas ou com plano gratuito estao disponiveis atualmente.

Preferir uma solucao simples para desenvolvimento local.

Toda configuracao deve ficar no .env.

Exemplo:

EMAIL_PROVIDER=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
RECOVERY_EMAIL=

Nunca colocar credenciais do provedor no codigo.

Se nao for possivel configurar o envio automatico imediatamente, implementar a estrutura de recuperacao e deixar o provedor preparado para configuracao posterior.

## 6. RECUPERACAO POR CELULAR

Preparar a arquitetura para recuperacao por telefone.

Utilizar:

ADMIN_RECOVERY_PHONE

como variavel de ambiente.

Nao colocar o numero diretamente no codigo.

Antes de implementar SMS, verificar se existe um servico gratuito adequado.

Se nao houver uma opcao realmente gratuita e confiavel, NAO contratar ou ativar servico pago automaticamente.

Nesse caso:

* manter o telefone cadastrado;
* deixar a interface preparada;
* documentar qual provedor pode ser integrado posteriormente;
* manter a recuperacao por email funcionando.

## 7. ALTERACAO DE SENHA

No painel:

/admin/settings

criar:

"Alterar senha"

O administrador deve informar:

* senha atual;
* nova senha;
* confirmacao da nova senha.

A nova senha deve ser armazenada somente como hash.

## 8. DADOS DO ADMINISTRADOR

O administrador principal deve possuir:

* nome;
* email;
* telefone de recuperacao;
* role;
* data de criacao;
* status da conta.

Nao exibir informacoes sensiveis desnecessariamente.

## 9. PROTECAO CONTRA PERDA DE ACESSO

O administrador principal nao deve ser removido acidentalmente pelo proprio painel.

Nao permitir que o ultimo administrador seja excluido.

Nao permitir que o ultimo administrador tenha sua role removida sem uma segunda confirmacao.

## 10. CONFIGURACAO LOCAL

Criar:

.env.example

Exemplo:

ADMIN_EMAIL=[admin@example.com](mailto:admin@example.com)
ADMIN_PASSWORD=troque-esta-senha
ADMIN_RECOVERY_EMAIL=[admin@example.com](mailto:admin@example.com)
ADMIN_RECOVERY_PHONE=+5500000000000

Criar tambem instrucoes no README explicando:

1. copiar .env.example para .env;
2. preencher as credenciais;
3. iniciar o backend;
4. acessar a tela de login;
5. entrar com o administrador;
6. acessar /admin.

Nao colocar minhas credenciais reais no README.

## 11. TESTES

Testar:

* criacao automatica do administrador;
* login;
* acesso ao painel;
* bloqueio de usuario comum;
* bloqueio de visitante;
* recuperacao por email;
* expiracao do token;
* alteracao de senha;
* protecao das rotas administrativas;
* persistencia no SQLite;
* reinicializacao do servidor sem criar administradores duplicados.

Antes de implementar, analise o sistema de autenticacao existente e apresente um plano curto.

Apos a aprovacao, implemente em etapas pequenas sem destruir funcionalidades existentes, tudo inicialmete vai rodar no nosso servidor local



