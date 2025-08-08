const express = require("express"); // Importa o framework Express, que facilita a criação de servidores web em Node.js
const bodyParser = require("body-parser"); // Middleware responsável por interpretar dados enviados no corpo da requisição HTTP
const app = express(); // Cria uma instância da aplicação Express

const connection = require("./database/database"); // Importa o módulo de conexão com o banco de dados MySQL configurado pelo Sequelize
const Question = require("./question/Question"); // Importa o model Question, responsável por interagir com a tabela de perguntas no banco
const Answer = require("./answer/Answer"); // Importa o model Answer, que interage com a tabela de respostas
const QuestionController = require("./question/QuestionController"); // Importa o conjunto de rotas relacionadas a perguntas
const AnswerController = require("./answer/AnswerController"); // Importa o conjunto de rotas relacionadas a respostas

app.set("view engine", "ejs"); // Define o EJS como mecanismo de renderização de páginas HTML dinâmicas
app.use(express.static("public")); // Define a pasta "public" como diretório para arquivos estáticos (CSS, imagens, JS do cliente, etc.)

app.use(bodyParser.urlencoded({ extended: false })); // Configura o body-parser para interpretar dados de formulários (application/x-www-form-urlencoded)
app.use(bodyParser.json()); // Configura o body-parser para interpretar dados no formato JSON (application/json)

app.use("/", QuestionController); // Registra as rotas de perguntas no caminho raiz da aplicação
app.use("/", AnswerController); // Registra as rotas de respostas também no caminho raiz

// Define a rota principal "/" que será executada quando o usuário acessar a página inicial
app.get("/", async (req, res) => {
    try {
        const questions = await Question.findAll({ raw: true, order: [["id", "DESC"]] }); // Busca todas as perguntas, ordenadas do mais recente para o mais antigo
        const answers = await Answer.findAll({ raw: true, order: [["id", "DESC"]] }); // Busca todas as respostas, também ordenadas por data de criação (mais recentes primeiro)

        res.render("index", {
            questions: questions, // Envia as perguntas para a view EJS
            answers: answers // Envia as respostas para a view EJS
        });
    } catch (error) {
        console.error(error); // Exibe o erro no console em caso de falha na consulta ao banco
        res.redirect("/"); // Redireciona o usuário para a página inicial
    }
});

// Função assíncrona que tenta autenticar a conexão com o banco e iniciar o servidor
async function startServer() {
    try {
        await connection.authenticate(); // Tenta autenticar a conexão com o banco de dados MySQL usando Sequelize
        console.log("Conexão estabelecida com o database MySQL");

        app.listen(8080, () => {
            console.log("Servidor funcionando na porta 8080"); // Inicia o servidor na porta 8080 e exibe uma mensagem no terminal
        });
    } catch (error) {
        console.error("Erro na conexão com o banco MySQL:", error); // Exibe erro no terminal caso a conexão falhe
    }
}

startServer(); // Executa a função que inicializa o servidor
