// TODO: Arrow Functions : Funciones de flecha
//Ventajas: Sintaxis reducida, y variable THIS no vinculable

const names = [
  { name: "Carlos", age: 29 },
  { name: "Nely", age: 29 },
];

// Antes
let listadoNombres = names.map(function (name) {
  console.log(name.name);
});

let sumaDosNumeros = function (numeroUno, numeroDos) {
  return numeroUno + numeroDos;
};

console.log(sumaDosNumeros(6, 6));

// Ahora
let listadoNombreAF = names.map((name) => console.log(name.name));

let sumaDosNumerosAF = (n1, n2) => n1 + n2;
console.log(sumaDosNumerosAF(7, 7));
