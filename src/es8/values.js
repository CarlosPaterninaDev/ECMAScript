// TODO: Values: Transforma los valores de un objeto a un arreglo

const dataFunction = {
  saludar: () => "Hola",
  despedirse: () => "Chao",
};

const values = Object.values(dataFunction);

console.log(values);
console.log(values.length);


for (const funct of values) {
  console.log(funct());
}
