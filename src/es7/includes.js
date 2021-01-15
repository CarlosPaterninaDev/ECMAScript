// TODO: Method Includes

let numbers = [2, 10, 58, 100, 36]; // Ejemplo 1
// let numbers =  [2, 10, 58, 100, 36, 2 ]; // Ejemplo 2

// Antes

const numeroBuscadro = numbers.indexOf(58);

console.log(numeroBuscadro);
console.log(numbers[numeroBuscadro]);

/* TODO: Remover comentarios, comentar ejemplo 1 y ejecutar código */

// Ahora
const valorBuscado = numbers.includes(58);
const valorDesdeUnIndex = numbers.includes(2, 3);

console.log(valorBuscado);
console.log(valorDesdeUnIndex);

if (numbers.includes(100)) {
  console.log("El valor 100 está dentro del arreglo de números");
}

if (numbers.includes(2, 3)) {
  console.log(
    "El valor 2 está dentro del arreglo de números despues del index 3"
  );
} else {
  console.log("No se encontró el valor de 2 despues del index 3");
}
