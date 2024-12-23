function factorial(n) {
  let result;
  n = Number(n);
  switch (true) {
    case (!Number.isInteger(n) || n < 0):
      console.log('Факториал вычисляется из целого положительного числа');
      break;
    default:
      result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      break;
  }
  return result;
}