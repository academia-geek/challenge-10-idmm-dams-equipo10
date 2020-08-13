function validarCorreo(e) {
    if(document.getElementById("form-formulario").reportValidity()){
        alert('Los datos fueron enviados correctamente')
 }      
}

document.getElementById("enviar").addEventListener('click', validarCorreo);




