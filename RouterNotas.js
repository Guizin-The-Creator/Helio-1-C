const express = require('express');
const ControlNotas = require('../control/ControlNotas');
const MiddlewareNotas = require('../middleware/MiddlewareNotas');

module.exports = class RouterNotas {
    criarRotasNotas() {
        this._router = express.Router();
        this._controleNotas = new ControlNotas();
        this._middlewareNotas = new MiddlewareNotas();

        // Trata a rota GET: /notas/:nota1/:nota2
        this._router.get('/:nota1/:nota2',
            this._middlewareNotas.validar_notas, // Valida se as notas são válidas
            this._controleNotas.controle_get_calcular_media // Chama o controlador
        );

        return this._router;
    }
};
