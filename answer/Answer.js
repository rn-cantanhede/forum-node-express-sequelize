const { Sequelize } = require("sequelize"); // Importa o construtor Sequelize para definir tipos de dados
const connection = require("../database/database"); // Importa a conexão com o banco de dados
const Question = require("../question/Question"); // Importa o modelo de perguntas para criar associação

// Define o modelo "Answer" (respostas), que representa a tabela 'answers' no banco de dados
const Answer = connection.define("answers",{
    body: {
        type: Sequelize.TEXT, // Tipo TEXT para armazenar o conteúdo da resposta
        allowNull: false      // Campo obrigatório, não pode ser nulo
    },
    questionId: { // Este campo representa a chave estrangeira que liga a resposta à pergunta
        type: Sequelize.INTEGER, // Tipo inteiro, que será o ID da pergunta relacionada
        allowNull: false         // Obrigatório: toda resposta precisa estar ligada a uma pergunta
    }
});

// Define relacionamento de um-para-muitos: uma pergunta pode ter muitas respostas
Question.hasMany(Answer);

// Define relacionamento de muitos-para-um: uma resposta pertence a uma pergunta
Answer.belongsTo(Question);

// Cria a tabela 'questions' no banco, se ela ainda não existir (sem forçar recriação)
Answer.sync({force: false});

module.exports = Answer; // Exporta o modelo para uso em outras partes do projeto
