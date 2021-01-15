
// TODO: Generators : Generadores

//Funcion que retonar una serie de valores segun algoritmo definido

function* saludosGeneradores() {
  if (true) {
    yield "Español Hola!";
  }
  if (true) {
    yield "English Hi!";
  }
  if (true) {
    yield "Costeñol Habla!!";
  }
}


const saludosEnIdiomas = saludosGeneradores();

console.log(saludosEnIdiomas.next())
console.log(saludosEnIdiomas.next().value)
console.log(saludosEnIdiomas.next().value);
