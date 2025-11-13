class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    set precio(valor) {
        if (valor>0) {
            this.#precio=valor;
        } else {
            console.log("->El precio debe ser mayor a 0");
        }
    }
    set stock(valor) {
        if (valor>=0){
            this.#stock=valor;
        } else {
            console.log("->El stock no puede ser negativo");
        }
    }
    get nombre() {
        return this.#nombre;
    }
    get precio() {
        return this.#precio;
    }
    get stock() {
        return this.#stock;
    }
    vender(cantidad){
        if (cantidad<=0) {
            console.log("->La cantidad debe ser mayor a 0");
        } else if (cantidad>this.#stock) {
            console.log("->No hay suficiente stock");
        } else {
            this.#stock-=cantidad; 
            console.log(`->Venta realizada: ${cantidad} unidades de ${this.#nombre}`);
        }
    }
    mostrarInfo(){
        console.log(`Producto: ${this.#nombre}`);
        console.log(`Precio: ${this.#precio}`);
        console.log(`Stock: ${this.#stock}`);
    }
}
export default Producto; 