/* TODO: Tipos de variables */

// Antes
{
  var global = "Global var";
}

// Ahora
{
  let localES6 = "Local var";
  console.log(localES6);
  local = "Reasignación de variable";
  console.log(localES6);
}

{
  const CONSTANTEES6 = "Const var";
  console.log(CONSTANTEES6);
  CONSTANTE = "Nueva"; // No puede ser reasignado el valor
  console.log(CONSTANTEES6);
}

// console.log(global);  Inaccesible por el SCOPE
// console.log(local); Inaccesible por el SCOPE
console.log(CONSTANTE);