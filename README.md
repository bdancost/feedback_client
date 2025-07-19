# 🎨✨ FeedbackHub Client

Bem-vindo ao **FeedbackHub Client**!  
Este é o frontend da plataforma FeedbackHub, feito com React e TypeScript para uma experiência moderna e responsiva.

---

## 🌈 Tecnologias

- ⚛️ **React** + **TypeScript**
- 🎨 **TailwindCSS**
- 🔒 **JWT Auth**
- 🧭 **React Router DOM**
- 🧠 **React Hooks**
- 📦 **Vite**
- 🧪 **Jest** (Testes)

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/feedbackhub.git
cd feedbackhub/feedback_client
npm install
```

---

## ⚙️ Configuração

1. (Opcional) Crie `.env`:

   ```
   VITE_API_URL=http://localhost:3333
   ```

2. Certifique-se que o backend está rodando.

---

## ▶️ Executando

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🖥️ Funcionalidades

- 🔐 **Registro/Login**: Formulários com validação.
- 📝 **Criação de Feedback**: Campos dinâmicos e validados.
- 📋 **Listagem de Feedbacks**: Visualize seus feedbacks.
- 🔒 **Roteamento Protegido**:  
  ![Lock Animation](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)
  Utiliza o componente `PrivateRoute` para proteger páginas sensíveis.
- 📊 **Dashboard**: Estatísticas e visualização geral.
- 📱 **Responsivo**: Interface adaptável a qualquer dispositivo.

---

## 🔗 Fluxo de Funcionamento

1. **Usuário registra/login**  
   &rarr; Token JWT salvo no localStorage.

2. **Acesso a rotas protegidas**  
   &rarr; `PrivateRoute` verifica autenticação.

3. **Envio de feedback**  
   &rarr; Dados validados e enviados ao backend.

4. **Visualização/Edição/Exclusão**  
   &rarr; Gerencie seus feedbacks facilmente.

---

## 📝 Exemplos

- `src/routes/PrivateRoute.tsx`  
  Protege rotas usando contexto de autenticação.

- `src/pages/CreateFeedback.tsx`  
  Formulário dinâmico para envio de feedback.

---

## 🖼️ Preview

![Frontend Animation](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)

---

## 💡 Autor

Desenvolvido por Daniel Fernandes  
[GitHub](https://github.com/bdancost) | [LinkedIn](https://www.linkedin.com/in/daniel-fernandes1988/)

---

## 🎉 Use, contribua e compartilhe! 🚀
