let precio=parseFloat(prompt("->Ingrese el precio del producto: (decimal)"));
const redondeoAj=Math.floor(precio);
const redondeoAr=Math.ceil(precio);
const redondeoN=Math.round(precio);
alert(`-Redondeo hacia abajo: ${redondeoAj}\n-Redondeo hacia arriba: ${redondeoAr}\n-Redondeo normal: ${redondeoN}`);