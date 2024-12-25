let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  isKeys() {
    // проверка на существование ключей a и b
    if ("a" in this && "b" in this) {
      return true;
    } else {
      return false;
    }
  },
  sum() {
    if (this.isKeys()) {
      return +this.a + +this.b;
    }
  },
  mul() {
    if (this.isKeys()) {
      return +this.a * +this.b;
    }
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
