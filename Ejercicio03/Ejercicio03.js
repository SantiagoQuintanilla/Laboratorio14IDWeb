function numeroAleatorio(min, max){
    const numAleatorio=(Math.random()*max-min)+min;
    return numAleatorio;
}
for (let i=0; i<20; i++){
let dado1=Math.round(numeroAleatorio(1, 6));
let dado2=Math.round(numeroAleatorio(1, 6)); 
let suma=dado1+dado2;
alert(`-Suma de lanzamiento de dados: ${dado1} + ${dado2} : ${suma}`);
}
