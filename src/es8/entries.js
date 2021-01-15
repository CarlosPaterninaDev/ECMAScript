// TODO: Entries: Permite transformar objetos en matriz

const data = {
  frontend: "Carlos",
  backend: "Moises",
  design: "Migue",
  bda: "Antonio",
  saludar: () => console.log('Hola'),
};

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);  // Validamos cuentos elementos o cuantas propiedades tiene nuestro objeto

for (const entrie of entries) {
  console.log(entrie[1]);
  // console.log(entrie[1]());

}
