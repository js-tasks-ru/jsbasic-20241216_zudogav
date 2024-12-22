/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // первая проверка на undefinded
  // вторая проверка на наличие пробелов, вместо indexOf можно использовать цикл и перебирать все символы name до появления пробела
  // третья проверка на длину строки
  if (name && name.indexOf(' ') == -1 && name.length >= 4) {
    return true;
  } else {
    return false;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

