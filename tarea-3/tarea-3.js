const $botonCrearFormulario = document.querySelector("#crear-formulario")
const $botonCalcularTiempo = document.querySelector("#boton-calcular-tiempo")

$botonCrearFormulario.onclick = function(){
    const nodoBody = document.querySelector('body');
    const nodoForm= document.createElement("form");
    nodoForm.id = "formulario-clases"
    nodoBody.appendChild(nodoForm)

    ocultarBotonCrearFormulario()
    crearInputVideos(nodoForm)
    mostrarBotonCalcularTiempo()
   
    return false;
}

function ocultarBotonCrearFormulario(){
    $botonCrearFormulario.classList = "oculto"
    return false;
}

function crearInputVideos(nodoForm){
    const cantidadVideos = document.querySelector("#cantidad-clases").value
    let $inputHoras;
    let $labelHoras;
    let $inputMinutos;
    let $labelMinutos;
    let $inputSegundos;
    let $labelSegundos;

    for (let i = 0; i < cantidadVideos; i++) {
        
        $labelHoras = document.createElement("label")
        $labelHoras.for= `horas-${i+1}`
        $labelHoras.textContent = `Video ${i+1} hs`
        nodoForm.appendChild($labelHoras)
        
        $inputHoras =document.createElement("input")
        $inputHoras.id = `horas-${i+1}`
        $inputHoras.className = "horas"
        nodoForm.appendChild($inputHoras)

        $labelMinutos = document.createElement("label")
        $labelMinutos.for= `minutos-${i+1}`
        $labelMinutos.textContent = `Video ${i+1} mins`
        nodoForm.appendChild($labelMinutos)     
    
        $inputMinutos =document.createElement("input")
        $inputMinutos.id = `minutos-${i+1}`
        $inputMinutos.className = "minutos"
        nodoForm.appendChild($inputMinutos)

        $labelSegundos = document.createElement("label")
        $labelSegundos.for= `segundos-${i+1}`
        $labelSegundos.textContent = `Video ${i+1} segs`
        nodoForm.appendChild($labelSegundos)     

        $inputSegundos=document.createElement("input")
        $inputSegundos.id = `segundos-${i+1}`
        $inputSegundos.className = "segundos"
        nodoForm.appendChild($inputSegundos)
      }
        
    return false;
}
function mostrarBotonCalcularTiempo(){
    $botonCalcularTiempo.classList = ""
    return false;
}
$botonCalcularTiempo.onclick = function(){
    const horas = document.querySelectorAll(".horas");
    const minutos = document.querySelectorAll(".minutos");
    const segundos = document.querySelectorAll(".segundos");
    calcularTiempoDeVideos(horas,minutos,segundos)

    return horas, minutos, segundos;
}
function calcularTiempoDeVideos(horas,minutos,segundos){
    let totalHoras = 0;
    let totalMinutos= 0;
    let totalSegundos = 0;

    for (let i = 0; i < segundos.length; i++) {
        totalSegundos += Number(segundos[i].value)
        if (totalSegundos > 59) {
            totalSegundos = totalSegundos-60
            totalMinutos = totalMinutos+1
        }
    }
    for (let i = 0; i < minutos.length; i++) {
        totalMinutos += Number(minutos[i].value);
        if (totalMinutos > 59) {
            totalMinutos = totalMinutos - 60
            totalHoras = totalHoras + 1
        }    
    }
    for (let i = 0; i < horas.length; i++) {
        totalHoras += Number(horas[i].value);
    }
    
    mostrarResultado(totalHoras, totalMinutos, totalSegundos)

    return totalHoras,totalMinutos,totalSegundos;
}

function mostrarResultado(totalHoras, totalMinutos, totalSegundos) {
    $outputResultado = document.querySelector("#output-resultado")
    $outputResultado.value = `Usted ha visto ${totalHoras} hs, ${totalMinutos} minutos y ${totalSegundos} segundos de video`

    return false;
}
