const Notas = require('../model/Notas'); // Certifique-se de que o nome do arquivo esteja correto

module.exports = class ControlNotas {
    controle_get_calcular_media(request, response) {
        // Recupera as notas passadas pela URI
        const nota1 = parseFloat(request.params.nota1);
        const nota2 = parseFloat(request.params.nota2);

        const notas = new Notas(nota1, nota2); // Instância da classe Notas
        const media = notas.calcularMedia(); // Calcula a média

        response.status(200).send({ media: media });
    }
};
