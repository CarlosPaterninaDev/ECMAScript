/* TODO: Class : Programación Orientada a Objetos */

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(a, b) {
    this.valueA = a;
    this.valueB = b;

    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();

console.log(calc.sum(2, 2));
