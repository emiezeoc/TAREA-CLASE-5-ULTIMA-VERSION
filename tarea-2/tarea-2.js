const $botonMostrarDatos = document.querySelector('#boton-mostrar-datos');

$botonMostrarDatos.onclick = function(){
    const primerNombreUsuario = document.querySelector('#nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value
    const edadUsuario = document.querySelector('#edad-usuario').value

    const tituloBienvenida = document.querySelector('#titulo-bienvenida')
    tituloBienvenida.textContent = "BIENVENIDO" + " " + primerNombreUsuario

    const datosUsuario = document.querySelector('#datos-usuario')
    datosUsuario.value = `PRIMER NOMBRE = ${primerNombreUsuario} SEGUNDO NOMBRE = ${segundoNombreUsuario} APELLIDO = ${apellidoUsuario} EDAD = ${edadUsuario} años`

    
return false;
}
