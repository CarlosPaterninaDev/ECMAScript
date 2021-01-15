/* TODO: Propiedad de objetos mejorada */

let name = "Carlos";
let age = 29;

// Antes

obj = {
  name: name,
  age: age,
};

console.log(obj);

// Ahora :
objES6 = {
  name,
  age,
};

console.log(objES6);
