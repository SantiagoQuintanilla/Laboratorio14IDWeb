function generarContraseña(){
    let contraseña="";
    for (let i=0; i<6; i++){
        let digito=Math.floor(Math.random()*10);
        contraseña+=digito;
    }
    return contraseña;
}
contraseña=generarContraseña();
alert(`->Contraseña aleatorio generada: ${contraseña}`);