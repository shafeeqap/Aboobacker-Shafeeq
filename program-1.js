class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;

      case "substract":
        return this.a - this.b;

      case "multiply":
        return this.a * this.b;

      case "divide":
        if (this.b === 0) {
          return "Can not divide by zero";
        }
        return this.a / this.b;

      default:
        return "Invalid operation";
    }
  }
}

const cal1 = new Calculator(10.5, 5.2, 'add');
console.log('Add:',cal1.calculate());

const cal2 = new Calculator(12.5, 2.5, 'substract')
console.log('Substract:',cal2.calculate());

const cal3 = new Calculator(10.5, 2.5, 'multiply')
console.log('Multiply:',cal3.calculate());

const cal4 = new Calculator(10.5, 2.5, 'divide')
console.log('Divide:',cal4.calculate());

