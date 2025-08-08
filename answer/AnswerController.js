const express = require("express"); // Importa o Express para criar rotas HTTP
const Answer = require("./Answer"); // Importa o modelo de resposta para manipulação no banco
const router = express.Router(); // Cria um router modular

// Rota para receber o envio de uma nova resposta
router.post("/answer", async (req, res) => {
    let {body, question} = req.body; // Desestrutura os dados enviados no corpo da requisição

    try {
        // Cria uma nova resposta associada a uma pergunta específica
        await Answer.create({
            body: body,
            questionId: question // Associa a resposta à pergunta correspondente via ID
        });
        // Redireciona de volta para a página da pergunta após salvar a resposta
        res.redirect("/question/" + question);
    } catch (error) {
        console.error(error); // Log do erro no console
        // Em caso de erro, redireciona para a página inicial
        res.redirect("/");
    }
});

module.exports = router; // Exporta o router para uso na aplicação principal
