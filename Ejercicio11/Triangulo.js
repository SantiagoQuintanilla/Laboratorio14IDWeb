import Figura from `/Figura.js`;

class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super("Triángulo");
        this.base=base;
        this.altura=altura; 
        this.lado1=lado1;
        this.lado2=lado2; 
        this.lado3=lado3; 
    }
    area() {
        return (this.base*this.altura)/2;
    }
    perimetro() {
        return this.lado1+this.lado2+this.lado3; 
    }
}
export default Triangulo; 