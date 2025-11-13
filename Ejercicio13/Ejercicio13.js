import Cliente from `./Cliente.js`;
import Administrador from `./Administrador.js`;

const usuario1=new Cliente("Jose", "josegonzaloch@gmail.com", 4);
const usuario2=new Cliente("Lucia", "luciamercedesfr@gmail.com", 6);
const usuario3=new Administrador("Marco", "marcoalbertoqn@gmail.com", ["crear", "editar", "eliminar"]) ;
const usuario4=new Administrador("Paula", "paulamartinaml@gmail.com", ["editar"]);

const usuarios=[usuario1, usuario2, usuario3, usuario4];
console.log("Lista de Usuarios");
usuarios.forEach(usuario=>{
    console.log(usuario.mostrarInfo());
});