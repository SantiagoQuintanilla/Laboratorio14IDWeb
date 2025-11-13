import Programador from `./Programador.js`;

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        super.calcularSueldo();
        const bonoSenior=this.sueldoBase*0.25;
        return this.sueldoBase+bonoSenior; 
    }
    mostrarInfo() {
        return `Empleado: ${this.nombre}\n`+
        `Sueldo base: $${this.sueldoBase.toFixed(2)}\n`+
        `Lenguaje: ${this.lenguaje}\n`+
        `Nivel: Senior\n`+
        `Sueldo total (con bono 25% adicional): $${this.calcularSueldo().toFixed(2)}`;
    }
}
export default ProgramadorSenior; 