import Empleado from `./Empleado.js`;
import Programador from `./Programador.js`;
import ProgramadorSenior from `./ProgramadorSenior.js`;

const empleado1=new Empleado("Laura", 2000);
const programador1=new Programador("Andrés", 2500, "JavaScript");
const senior1=new ProgramadorSenior("Carla", 3000, "Python");

console.log("Lista de Empleados"); 
console.log(empleado1.mostrarInfo());
console.log(programador1.mostrarInfo());
console.log(senior1.mostrarInfo());