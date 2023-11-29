// - Realiza un script que genere un número aleatorio entre 1 y 99

let numeroRandom = (max,min) => {
    return Math.floor(Math.random()* (min-max))
}

let resultado = numeroRandom(1,99)
console.log(resultado)

