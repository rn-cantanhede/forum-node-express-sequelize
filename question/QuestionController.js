const express = require("express"); // Importa o framework Express
const Question = require("./Question"); // Importa o modelo Question
const Answer = require("../answer/Answer"); // Importa o modelo Answer
const router = express.Router(); // Cria um router para definir rotas específicas

// Rota para exibir uma pergunta pelo ID com suas respostas
router.get("/question/:id", async (req, res) => {
    try {
        let id = req.params.id; // Obtém o ID da pergunta a partir da URL

        // Busca a pergunta no banco pelo ID
        const questions = await Question.findOne({ where: { id: id }});

        // Busca todas as respostas associadas à pergunta, ordenadas do mais recente para o mais antigo
        const answers = await Answer.findAll({
            where: { questionId: questions.id },
            order: [["id", "DESC"]]
        });

        // Renderiza a view 'answer/answer', passando os dados da pergunta e das respostas
        res.render("answer/answer", {
            question: questions,
            answer: answers
        });
        
    } catch (error) {
        console.error(error); // Exibe erro no console caso algo dê errado
        return res.redirect("/"); // Redireciona para a página inicial em caso de erro
    }
});

// Rota para exibir o formulário para criar uma nova pergunta
router.get("/question", (req, res) => {
    res.render("question/new"); // Renderiza a view do formulário de nova pergunta
});

// Rota para salvar uma nova pergunta no banco de dados
router.post("/savequestion", async (req, res) => {
    let { title, description } = req.body; // Obtém título e descrição enviados pelo formulário

    if (title === undefined) { // Verifica se o título foi preenchido
        return res.redirect("/"); // Se não, redireciona para a página inicial
    }

    try {
        // Cria um novo registro de pergunta no banco
        let newQuestion = await Question.create({ title, description });
        return res.redirect("/question/" + newQuestion.id); // Redireciona para a página da pergunta criada
    } catch (error) {
        console.error(error); // Log do erro no console
        return res.redirect("/"); // Redireciona para a página inicial em caso de erro
    }
});

module.exports = router; // Exporta o router para uso em outros módulos
