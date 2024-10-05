module.exports = class Idade {
    constructor(nota1, nota2) {
        this._nota1 = nota1; // Atribui a primeira nota
        this._nota2 = nota2; // Atribui a segunda nota
    }

    set nota1(nota1) {
        this._nota1 = nota1; // Setter para a primeira nota
    }

    get nota1() {
        return this._nota1; // Getter para a primeira nota
    }

    set nota2(nota2) {
        this._nota2 = nota2; // Setter para a segunda nota
    }

    get nota2() {
        return this._nota2; // Getter para a segunda nota
    }

    calcularMedia() {
        const media = (this.nota1 + this.nota2) / 2; // Calcula a média das notas
        return media;
    }
};

