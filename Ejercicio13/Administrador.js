import Usuario from `./Usuario.js`;

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos=permisos; 
    }
    mostrarInfo() {
        const listaPermisos=this.permisos.join(`, `);
        return `${super.mostrarInfo()}\nPermisos: ${listaPermisos}`;
    }
}
export default Administrador; 