const $numerosDeLista = document.querySelectorAll("li")
const $botonCalcularDatos = document.querySelector("#boton-calcular-datos")
const $promedio = document.querySelector("#promedio")
const $numeroMayor = document.querySelector("#numero-mas-grande")
const $numeroMenor = document.querySelector("#numero-mas-pequenio")
const $numeroMasFrecuente = document.querySelector("#numero-mas-frecuente")


$botonCalcularDatos.onclick = function() {
    let arrayNumerosDeLista = []
    for (let i = 0; i < $numerosDeLista.length; i++) {
        arrayNumerosDeLista.push (Number($numerosDeLista[i].textContent));
    }
    
    let promedio = calcularPromedio(arrayNumerosDeLista);
    let numeroMayor = Number(Math.max(...arrayNumerosDeLista));
    let numeroMenor = Number(Math.min(...arrayNumerosDeLista));
    let numeroMasFrecuente = obtenerNumeroMasRepetido(arrayNumerosDeLista);

    $promedio.textContent = `El promedio es ${promedio}`
    $numeroMayor.textContent = `El numero mas grande es ${numeroMayor}`
    $numeroMenor.textContent = `El numero mas pequeño es ${numeroMenor}`
    $numeroMasFrecuente.textContent = `El numero mas frecuente es ${numeroMasFrecuente}`

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


