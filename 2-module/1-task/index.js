function sumSalary(salaries) {
  let result = 0;
  // проверка, что параметр функции является объектом
  if (typeof salaries === "object") {
    // обходим все свойства объекта
    for (key in salaries) {
      // проверка, что значение типа number
      // проверка, что значение не является NaN/Infinity/-Infinity
      // можно сделать еще проверку на исключение свойств с ключами month, currency, isPayed
      // key !== "month" && key !== "currency" && key !== "isPayed"
      if (typeof salaries[key] === 'number' && isFinite(salaries[key]) ) {
        result += salaries[key];
      }
    }
  }
  return result;
}
