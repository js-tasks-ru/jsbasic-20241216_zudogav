function isEmpty(obj) {
  // проверка, что параметр функции является объектом, иначе функция вернет undefined
  if (typeof obj === 'object') {
    let result = true;
    // проверка ну пустоту путем перебора свойств объекта, если есть хоть один, то выходим из цикла
    //for (var key in obj) {
    //  result = false;
    //  break;
    //}
    // проверка на пустоту методом Object.keys, если ключей объекта больше нуля, значит не пустой
    if (Object.keys(obj).length > 0) {
      result = false;
    }
    return result;
  }
}
