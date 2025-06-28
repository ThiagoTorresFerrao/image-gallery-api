# 📸 Image Gallery with Likes

## EN

### Project Overview
This is a simple backend project built with **Node.js**, **Express**, **SQLite**, and **EJS**. It features a visual image gallery where users can view images and "like" them. The project demonstrates key backend concepts such as routing, MVC structure, database migrations, and seeding data.

### Features
- List images with title, description, and URL.
- Like images to increase their like count.
- Visual gallery rendered using EJS templates.
- Database powered by SQLite, managed via Knex.js.
- Seed data with example images for quick setup.

### Installation and Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/ThiagoTorresFerrao/image-gallery-api
   cd image-gallery-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run database migrations:
   ```bash
   npx knex migrate:latest
   ```

4. Seed initial data:
   ```bash
   npx knex seed:run
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser at [http://localhost:3000](http://localhost:3000) to see the gallery.

### Project Structure
- `src/`: Source code (controllers, models, routes).
- `public/`: Static files like CSS.
- `views/`: EJS templates for rendering HTML.
- `migrations/`: Database table setup.
- `seeds/`: Initial data to populate the database.

---

## PT-BR

### Visão Geral do Projeto
Este é um projeto simples de backend construído com **Node.js**, **Express**, **SQLite** e **EJS**. Ele apresenta uma galeria visual de imagens onde usuários podem visualizar fotos e “curtir” elas. O projeto demonstra conceitos importantes de backend, como rotas, estrutura MVC, migrações e seed de banco de dados.

### Funcionalidades
- Listar imagens com título, descrição e URL.
- Curtir imagens para aumentar o número de likes.
- Galeria visual renderizada com templates EJS.
- Banco de dados SQLite gerenciado pelo Knex.js.
- Dados iniciais (seed) com imagens de exemplo para configuração rápida.

### Instalação e Uso
1. Clone o repositório:
   ```bash
   git clone https://github.com/ThiagoTorresFerrao/image-gallery-api
   cd image-gallery-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute as migrações do banco de dados:
   ```bash
   npx knex migrate:latest
   ```

4. Adicione os dados iniciais:
   ```bash
   npx knex seed:run
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Abra o navegador em [http://localhost:3000](http://localhost:3000) para ver a galeria.

### Estrutura do Projeto
- `src/`: Código fonte (controllers, models, rotas).
- `public/`: Arquivos estáticos como CSS.
- `views/`: Templates EJS para renderizar HTML.
- `migrations/`: Configuração das tabelas do banco.
- `seeds/`: Dados iniciais para popular o banco.

---


## 🌐 Connect with me / Conecte-se comigo

<div align="center">
  <a href="https://www.linkedin.com/in/thiago-f-torres/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="40px" />
  </a>
  <a href="https://github.com/ThiagoTorresFerrao" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40px" />
  </a>
  <a href="https://www.instagram.com/thiagotorresferrao/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" height="30px" />
  </a>
  <a href="https://www.youtube.com/@Thiago_Torres" target="_blank">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" height="30px" />
  </a>
</div>