# 📝 Fórum de perguntas e respostas

Este é um fórum de perguntas e respostas inspirado no estilo do Yahoo! Respostas, mas sem vínculo ou associação oficial com ele.
O objetivo é fornecer uma plataforma simples e direta onde usuários podem interagir, compartilhar dúvidas e fornecer soluções, com funcionalidades modernas e seguras.

## ✨ Funcionalidades

- Criar perguntas e respostas.
- Organização por ordem de criação (mais recentes primeiro).
- Interface simples e responsiva.
- Renderização de páginas usando EJS.
- Banco de dados relacional via Sequelize + MySQL.

## 💻 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução.
- **Express.js** — Framework para o servidor.
- **Sequelize** – ORM para o banco de dados.
- **MySQL** – Banco de dados relacional.
- **EJS** – Template engine para renderização.
- **Body-parser** – Tratamento de requisições HTTP.
- **Bootstrap** – Estilização da interface.

## 📅 Futuras Atualizações

- Sistema de Login com autenticação de usuários.
- Associação de perguntas e respostas ao usuário autor.
- Edição de perguntas e respostas (apenas pelo autor).
- Exclusão de perguntas e respostas (apenas pelo autor).
- Mecânica de Pesquisa para localizar perguntas por palavras-chave.
- Slugify para URLs amigáveis, usando o texto da pergunta em vez de ID numérico.
- Cookies para manter sessão de login.
- Organização e interação entre perguntas e respostas de forma mais dinâmica.

## 📦 Como Executar o Projeto

1. Clone ou baixe este repositório.
    ```bash
   git clone https://github.com/rn-cantanhede/forum-node-express-sequelize.git
   ```
2. Instale as dependências
   ```bash
   npm install
   ```
3. Configure o banco de dados.
   - Edite o arquivo database/database.js com suas credenciais MySQL.
     
4. Inicie o servidor
   ```bash
   node index.js
   ```
   ou
   ```bash
   nodemon index.js
   ```
5. Acesse no navegador
    ```bash
   http://localhost:8080
   ```
---

## 📜 Licença

Este projeto é de uso acadêmico e pessoal.
Não possui vínculo com o Yahoo! Respostas e é distribuído sem garantias.

---



