module.exports = class MiddlewareNotas {
    validar_notas(request, response, next) {
        const nota1 = parseFloat(request.params.nota1);
        const nota2 = parseFloat(request.params.nota2);

        // Verifica se as notas são números válidos e estão no intervalo de 0 a 10
        if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            const objResposta = {
                status: false,
                msg: "As notas devem ser números válidos entre 0 e 10!",
            };
            return response.status(400).send(objResposta);
        }

        next(); // Chama o próximo middleware ou rota
    }
};
