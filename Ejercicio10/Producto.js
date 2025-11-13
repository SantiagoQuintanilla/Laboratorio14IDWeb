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
        const num=valor*1;
        if (valor!==""&&num>0) {
            this.#precio=num;
        } else {
            console.log("->El precio debe ser un número, mayor a 0");
        }
    }
    set stock(valor) {
        const num=valor*1;
        if (valor!==""&&num>=0){
            this.#stock=num;
        } else {
            console.log("->El stock debe ser un número, mayor o igual a 0");
        }
    }
    get nombre() {
        return this.#nombre;
    }
    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }
    get stock() {
        return this.#stock;
    }
    vender(cantidad){
        const num=cantidad*1;
        if (num>0&&num<=this.#stock) {
            this.#stock-=num;
            console.log(`->Venta realizada: ${num} unidades de ${this.#nombre}`);
        } else if (num<=0) {
            console.log("->La cantidad debe ser mayor a 0");
        } else {
            console.log(`->No hay suficiente stock`);
        }
    }
    mostrarInfo(){
        console.log(`Producto: ${this.#nombre}`);
        console.log(`Precio: ${this.#precio}`);
        console.log(`Stock: ${this.#stock}`);
    }
}
export default Producto; 