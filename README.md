# Twitter Clone Project

Este é um projeto full-stack que implementa funcionalidades similares ao Twitter, desenvolvido com React no frontend e Node.js no backend.

## 🚀 Funcionalidades Principais

- ✅ Criação e autenticação de usuários
- 📝 Criação de posts
- 💬 Sistema de comentários em posts
- 🏠 Feed de posts na página inicial
- 📱 Interface responsiva e amigável

## 🛠️ Tecnologias Utilizadas

### Frontend (bluejay_frontend)
- React
- Vite
- CSS Modules
- ESLint

### Backend (client)
- Node.js
- Express.js
- MongoDB (via Mongoose)

## 📁 Estrutura do Projeto

```
📦 pwebII-twitter
├── 📂 bluejay_frontend/           # Frontend da aplicação
│   ├── 📄 index.html
│   ├── 📄 package.json
│   ├── 📂 public/
│   └── 📂 src/
│       ├── 📄 App.jsx
│       ├── 📄 main.jsx
│       ├── 📂 assets/            # Recursos estáticos
│       ├── 📂 components/        # Componentes React reutilizáveis
│       │   ├── 📂 CommentForm/   # Formulário de comentários
│       │   ├── 📂 HomePost/      # Componente de post na página inicial
│       │   ├── 📂 Navbar/        # Barra de navegação
│       │   ├── 📂 PostForm/      # Formulário de criação de post
│       │   ├── 📂 PostPageCardPost/  # Card de post na página individual
│       │   └── 📂 PostPageComment/   # Componente de comentário
│       ├── 📂 pages/             # Páginas da aplicação
│       │   ├── 📂 CreatePostPage/    # Página de criação de post
│       │   ├── 📂 HomePage/          # Página inicial
│       │   ├── 📂 PostPage/          # Página individual do post
│       │   └── 📂 RegisterPage/      # Página de registro
│       └── 📂 services/          # Serviços e integrações com API
│           └── 📄 api.js
│
└── 📂 client/                    # Backend da aplicação
    ├── 📄 index.js              # Ponto de entrada do servidor
    ├── 📄 package.json
    └── 📂 src/
        ├── 📄 app.js            # Configuração do Express
        ├── 📂 config/           # Configurações do projeto
        │   └── 📄 dbConnection.js    # Conexão com banco de dados
        ├── 📂 controllers/      # Controladores da aplicação
        │   ├── 📄 commentController.js
        │   ├── 📄 postController.js
        │   └── 📄 userController.js
        ├── 📂 models/          # Modelos do Mongoose
        │   ├── 📄 Comment.js
        │   ├── 📄 Post.js
        │   └── 📄 User.js
        └── 📂 routers/         # Rotas da aplicação
            ├── 📄 commentRoutes.js
            ├── 📄 index.js
            ├── 📄 postRoutes.js
            └── 📄 userRoutes.js
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js
- MongoDB

### Frontend
```bash
cd bluejay_frontend
npm install
npm run dev
```

### Backend
```bash
cd client
npm install
npm start
```

## 🌟 Principais Características

### Frontend
- Interface moderna e responsiva
- Componentização eficiente com React
- Gerenciamento de estado
- Integração com API RESTful

### Backend
- Arquitetura MVC
- Sistema de autenticação
- API RESTful
- Banco de dados MongoDB com Mongoose
- Rotas organizadas e modulares

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou fazer um pull request.

## 📝 Licença

Este projeto está sob a licença MIT.
