

// TODO: Module : Modulos

// Antes
const hello = require("./module");

console.log(hello());

// Ahora

import { hello } from "./module.js";

const saludo = hello();
console.log(saludo);
