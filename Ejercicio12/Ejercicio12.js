import Cliente from `./Cliente.js`;
import Administrador from `./Administrador.js`;

const cliente1=new Cliente("Jose", "josegonzaloch@gmail.com", 4);
const cliente2=new Cliente("Lucia", "luciamercedesfr@gmail.com", 6);

const admin1=new Administrador("Marco", "marcoalbertoqn@gmail.com", ["crear", "editar", "eliminar"]) ;
const admin2=new Administrador("Paula", "paulamartinaml@gmail.com", ["editar"]);

console.log("Clientes");
console.log(cliente1.mostrarInfo());
console.log(cliente2.mostrarInfo());
console.log("Administradores");
console.log(admin1.mostrarInfo());
console.log(admin2.mostrarInfo());