function normalizarCalificaciones(calificaciones){
    const max=Math.max(...calificaciones);
    const notasNormalizadas=calificaciones.map(nota=>(nota/max).toFixed(3));
    return notasNormalizadas;
}
const calificaciones=[15, 18, 12, 7, 19, 5, 13];
const normalizadas=normalizarCalificaciones(calificaciones);
alert(`->Calificaciones originales: ${calificaciones}\n`+
        `->Calificaciones normalizadas: ${normalizadas}`
);