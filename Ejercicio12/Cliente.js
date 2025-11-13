import Usuario from `/Usuario.js`;

class Cliente extends Usuario{
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        if (nivelFidelidad >= 1&&nivelFidelidad<=5) {
        this.nivelFidelidad=nivelFidelidad;
        } else {
        this.nivelFidelidad=1; 
        }
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\nNivel de fidelidad: ${this.nivelFidelidad}`;
    }
}
export default Cliente; 