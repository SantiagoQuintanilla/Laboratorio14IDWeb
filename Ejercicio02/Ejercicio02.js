function numeroAleatorio(min, max){
    const numAleatorio=(Math.random()*max-min+1)+min;
    return numAleatorio;
}
let minimo=parseFloat(prompt("->Ingrese el mínimo: "));
let maximo=parseFloat(prompt("->Ingrese el máximo: "));
const aleatorio=Math.round(numeroAleatorio(minimo, maximo));
alert(`-Número entero entre ${minimo} y ${maximo}: ${aleatorio}`);