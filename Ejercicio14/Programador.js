import Empleado from `./Empleado.js`;

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje=lenguaje; 
    }
    calcularSueldo() {
        const bono=this.sueldoBase*0.10;
        return super.calcularSueldo()+bono;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}\nLenguaje: ${this.lenguaje}\n`+
        `Sueldo total: $${this.calcularSueldo().toFixed(2)}`;
    }
}
export default Programador; 