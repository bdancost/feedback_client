# 📬 FeedbackHub - Frontend

Frontend moderno e responsivo do sistema **FeedbackHub**, uma plataforma que permite a coleta, visualização e gestão de feedbacks de usuários de forma simples e eficiente.

---

## 📸 Preview

![Dashboard Preview](./public/preview-dashboard.png) <!-- Você pode colocar um print real do dashboard aqui -->

---

## ⚙️ Tecnologias utilizadas

- ⚛️ **React** + **TypeScript**
- 🎨 **TailwindCSS** (estilização moderna e responsiva)
- 🔒 **JWT Auth** via `AuthContext`
- 🧭 **React Router DOM** (roteamento e proteção de rotas)
- 🧠 **React Hooks** (lógica e estados isolados)
- 📦 **Vite** (build rápido)

---

## 📁 Estrutura de pastas

```bash
src/
├── components/       # Componentes reutilizáveis (InputField, Layout, etc.)
├── hooks/            # Custom Hooks (ex: useFeedbackForm)
├── pages/            # Páginas da aplicação (Login, Register, Dashboard, etc.)
├── routes/           # Configuração de rotas privadas e públicas
├── context/          # AuthContext para autenticação
├── services/         # Comunicação com a API backend
└── App.tsx           # Componente principal

🚀 Como rodar o projeto

1. Clone o repositório:

git clone https://github.com/seu-usuario/feedbackhub-frontend.git
cd feedbackhub-frontend

2. Instale as dependências:

npm install

3. Configure o ambiente:
Crie um arquivo .env com a URL do backend:

VITE_API_URL=http://localhost:3333

4. Rode o projeto localmente:

npm run dev
Acesse http://localhost:5173

✅ Funcionalidades
 Registro de novo usuário

 Login com autenticação JWT

 Redirecionamento automático pós-login

 Criação de feedback com validação e notificação

 Página de Dashboard moderna com navegação

 Roteamento privado

 Listagem e edição de feedbacks (em andamento)

🔐 Autenticação
O contexto AuthContext gerencia:

token JWT

usuário autenticado

persistência em localStorage

proteção de rotas com PrivateRoute

🧪 Testes
(Adicione esta seção caso você implemente testes futuramente com Vitest, React Testing Library, etc.)

✨ Contribuição
Sinta-se livre para abrir issues, enviar PRs ou sugestões. Vamos construir juntos!

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

💡 Autor
Desenvolvido com 💙 por Daniel Fernandes

```
