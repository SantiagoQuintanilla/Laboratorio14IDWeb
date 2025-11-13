import Producto from `./Producto.js`;
const prod1=new Producto("Laptop", 3500, 10);
const prod2=new Producto("Mouse", 80, 50);
const prod3=new Producto("Monitor", 1200, 5); 

prod1.mostrarInfo();
prod2.mostrarInfo();
prod3.mostrarInfo();

prod1.vender(3);
prod2.vender(60);
prod3.vender(0);

prod1.mostrarInfo();
prod2.mostrarInfo();
prod3.mostrarInfo();