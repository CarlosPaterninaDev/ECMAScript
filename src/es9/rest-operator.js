const carlos = {
  nombre: "Carlos",
  edad: 29,
  country: "CO",
};

let { nombre, ...others } = carlos;

console.log(others);

console.log(carlos);

const nely = {
  
  nombre: "Nely",
  ...others,
};

console.log(nely);
