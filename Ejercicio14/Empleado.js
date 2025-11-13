class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre=nombre; 
        this.sueldoBase=sueldoBase; 
    }
    calcularSueldo() {
        return this.sueldoBase; 
    }
    mostrarInfo() {
        return `Empleado: ${this.nombre}\n`
        +`Sueldo base: $${this.sueldoBase.toFixed(2)}`;
    }
}
export default Empleado; 