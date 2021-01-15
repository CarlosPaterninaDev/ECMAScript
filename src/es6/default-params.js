/* TODO: Default params : Parametros por defecto */

// ANTES
function newFuntion(name, age, country) {
  var name = name || "carlos";
  var age = age || 29;
  var country = country || "Colombia";
  console.log(name, age, country);
}
// AHORA

function newFuntionES6(name = "Carlos", edad = 29, country = "Colombia") {
  console.log(name, edad, country);
}

newFuntion();
newFuntionES6();
