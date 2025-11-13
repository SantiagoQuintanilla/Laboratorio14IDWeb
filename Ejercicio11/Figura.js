class Figura {
    constructor(nombre) {
        this.nombre=nombre;
    }
    area() {
        console.log(`->Área de ${this.nombre}: No definido`);
    }
    perimetro(){
        console.log(`->Perímetro de ${this.nombre}: No definido`);
    }
    mostrarInfo(){
        console.log(`->Figura: ${this.nombre}`);
        console.log(`->Área: ${this.area()}`);
        console.log(`->Perímetro: ${this.perimetro()}`);
    }
}
export default Figura; 