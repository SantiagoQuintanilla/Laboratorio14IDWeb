function gradosARadianes(grados){
    rad=grados*(Math.PI/180);
    seno=Math.sin(rad);
    coseno=Math.cos(rad);
    radRed=rad.toFixed(5);
    senoRed=seno.toFixed(5);
    cosenoRed=coseno.toFixed(5);
    alert(`-${grados} a radianes = ${radRed}\n-Seno de ${radRed} = ${senoRed}\n-Coseno de ${radRed} = ${cosenoRed}`);
}
function radianesAGrados(radianes){
    grad=radianes*(180/Math.PI);
    gradRed=grad.toFixed(5);
    alert(`-${radianes} a grados = ${gradRed}`);
}
let grados=parseFloat(prompt("->Ingrese grados: "));
let radianes=parseFloat(prompt("->Ingrese radianes: "));
gradosARadianes(grados);
radianesAGrados(radianes);