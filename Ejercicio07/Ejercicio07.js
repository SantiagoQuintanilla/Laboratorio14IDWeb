function calcularDistancia(x1, y1, x2, y2){
    const distancia=Math.sqrt((x2-x1)**2+(y2-y1)**2);
    const dist1=Math.sqrt(x1**2+y1**2);
    const dist2=Math.sqrt(x2**2+y2**2);
    const suma=dist1+dist2;
    alert(
        `Distancia entre (${x1}, ${y1}) y (${x2}, ${y2}) = ${distancia.toFixed(4)}\n` +
        `Distancia de (${x1}, ${y1}) al origen = ${dist1.toFixed(4)}\n` +
        `Distancia de (${x2}, ${y2}) al origen = ${dist2.toFixed(4)}\n` +
        `Suma de ambas distancias al origen = ${suma.toFixed(4)}`
    );
}
let x1=parseFloat(prompt("->Ingrese la coordenada x del primer punto: "));
let y1=parseFloat(prompt("->Ingrese la coordenada y del primer punto: "));
let x2=parseFloat(prompt("->Ingrese la coordenada x del segundo punto: "));
let y2=parseFloat(prompt("->Ingrese la coordenada y del segundo punto: "));
calcularDistancia(x1, y1, x2, y2);