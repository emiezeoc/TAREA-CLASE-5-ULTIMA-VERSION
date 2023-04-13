const $numerosDeLista = document.querySelectorAll("li")
const $botonCalcularDatos = document.querySelector("#boton-calcular-datos")

$botonCalcularDatos.onclick = function() {
    $numerosDeLista;
    let arrayNumerosDeLista = []
    for (let i = 0; i < $numerosDeLista.length; i++) {
        arrayNumerosDeLista.push (Number($numerosDeLista[i].textContent));
    }
    
    calcularPromedio(arrayNumerosDeLista)
    let numeroMayor = Number(Math.max(...arrayNumerosDeLista))
    let numeroMenor = Number(Math.min(...arrayNumerosDeLista))
    obtenerNumeroMasRepetido(arrayNumerosDeLista)

    return numeroMayor, numeroMenor;
}

function calcularPromedio(arrayNumerosDeLista) {
    let sumatoriaDeNumerosLista = 0;
    let promedioDeLista = 0;
    for (let i = 0; i < arrayNumerosDeLista.length; i++) {
        sumatoriaDeNumerosLista += arrayNumerosDeLista[i]
        promedioDeLista = sumatoriaDeNumerosLista/arrayNumerosDeLista.length               
    }
return promedioDeLista;
}

function obtenerNumeroMasRepetido(arrayNumerosDeLista) {
    arrayNumerosDeLista;
    let contador = {}
    let maxRepetidos = 0;
    let numerosMasRepetidos = []

    for (let i = 0; i < arrayNumerosDeLista.length; i++) {
        let numero = arrayNumerosDeLista[i];
        if (contador[numero]) {
            contador[numero]++;
        } 
         else {
            contador[numero] = 1;
        }
        if (contador[numero] > maxRepetidos) {
            maxRepetidos = contador[numero];
            numerosMasRepetidos = [numero];
          } else if (contador[numero] === maxRepetidos) {
            numerosMasRepetidos.push(numero);
          }
        }
    return numerosMasRepetidos;
}

const $promedio = document.querySelector("#promedio")
$promedio.textContent = `El promedio es ${promedioDeLista}`
