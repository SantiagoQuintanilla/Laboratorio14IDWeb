import Cuadrado from `./Cuadrado,js`;
import Triangulo from `./Triangulo.js`;

const cuadrado1=new Cuadrado(5);
const triangulo1=new Triangulo(6, 4, 6, 4, 5); 

console.log("Cuadrado");
console.log(`Área: ${cuadrado1.area()}`);
console.log(`Perímetro: ${cuadrado1.perimetro()}\n`);

console.log(`Triangulo`);
console.log(`Área: ${triangulo1.area()}`);
console.log(`Perímetro: ${triangulo1.perimetro()}`);