const { Sequelize } = require("sequelize"); // Importa o Sequelize para definição de modelos
const connection = require("../database/database"); // Importa a conexão com o banco de dados

// Define o modelo 'Question', que representa a tabela 'pergunta' no banco de dados
const Question = connection.define("pergunta", {
    title: {
        type: Sequelize.STRING, // Define o tipo do campo como string
        allowNull: false,       // Campo obrigatório, não pode ser nulo
    },
    description: {
        type: Sequelize.TEXT,   // Define o tipo do campo como texto (pode conter mais caracteres que STRING)
        allowNull: false        // Campo obrigatório, não pode ser nulo
    }
});

// Sincroniza o modelo com o banco de dados
// 'force: false' garante que a tabela só será criada se ainda não existir
// Se a tabela já estiver criada, nenhum dado será perdido
Question.sync({ force: false });

module.exports = Question; // Exporta o modelo para uso em outras partes da aplicação
