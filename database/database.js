// Importa a classe Sequelize do pacote sequelize, que será utilizada para configurar a conexão com o banco de dados
const { Sequelize } = require("sequelize");

// Cria uma instância da conexão com o banco de dados utilizando o Sequelize
// Os parâmetros informados são:
// - Nome do banco de dados: "forumquestions"
// - Nome do usuário: "root"
// - Senha do banco de dados: "password"
// O objeto de configuração adicional define:
// - host: endereço onde o banco está hospedado (neste caso, localmente)
// - dialect: tipo de banco de dados (neste caso, MySQL)
// - timezone: define o fuso horário usado pela conexão
const connection = new Sequelize("forumquestions", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

// Exporta a instância da conexão para que possa ser utilizada em outros módulos da aplicação
module.exports = connection;