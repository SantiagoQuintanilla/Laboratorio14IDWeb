import Figura from `./Figura.js`;

class Cuadrado extends Figura {
    constructor(lado) {
        super("Cuadrado");
        this.lado=lado; 
    }
    area() {
        return this.lado*this.lado;
    }
    perimetro() {
        return 4*this.lado; 
    }
}
export default Cuadrado; 