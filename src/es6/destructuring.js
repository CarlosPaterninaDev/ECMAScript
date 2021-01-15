
/* TODO: Destructuring Objects: "Destructuración de objetos" */

let person = {
  name: "Carlos",
  age: 29,
  country: "CO",
};

// Antes
console.log(person.name);
console.log(person.age);
console.log(person.country);

let country = "Lo que sea";
// Redefiniendo mis variables.
let { name: nombre, age: edad, country: pais } = person;

console.log(nombre);
console.log(edad);
console.log(pais);