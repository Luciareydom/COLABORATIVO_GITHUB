    //Crea una función que determine si un número es primo o no
function esPrimo (numero) {
    for (let i = numero - 1; i > 1; i--) {
        resto = numero % i
        if (resto === 0) {
            return false
        }
    }
    return true
}