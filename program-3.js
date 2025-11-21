function generateSeries(a) {
  if (a % 2 === 0) {
    a = a - 1;
  }

  let result = [];
  for (let i = 1; i <= a; i++) {
    result.push(2 * i - 1);
  }

  return result.join(",");
}

console.log('Odd:',generateSeries(3));
console.log('Even:',generateSeries(4));
