class Usuario {
    constructor(nombre, email) {
        this.nombre=nombre; 
        this.email=email; 
    }
    mostrarInfo() {
        return `Usuario: ${this.nombre}\nEmail: ${this.email}`;
    }
}
export default Usuario; 