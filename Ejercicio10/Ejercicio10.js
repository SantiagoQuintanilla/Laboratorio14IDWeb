import Producto from `./Producto.js`;
const prod1=new Producto("Mouse", 80.5, 20);
const prod2=new Producto("Monitor", 900, 5); 

prod1.mostrarInfo();
prod2.mostrarInfo();

prod1.precio="100.25";
prod1.stock="15";
prod2.precio=850;
prod2.stock=7;

prod1.mostrarInfo();
prod2.mostrarInfo();

prod1.vender(3);
prod2.vender(10);

prod1.mostrarInfo();
prod2.mostrarInfo();