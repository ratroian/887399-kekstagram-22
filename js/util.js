// ---Генераци уникального значения---
// Источник https://learn.javascript.ru/task/random-int-min-max

const MIN_VALUE = 1;
const MAX_VALUE = 10;

const randomInteger = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min < max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    alert('Значение ' + min + ' должно быть больше ' + max)
  }
};

randomInteger(MIN_VALUE, MAX_VALUE);

export {randomInteger};

// ---Массив уникальных значений---

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = randomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {makeUniqueRandomIntegerGenerator};

// ---Длина строки (авторская=))---

const stringComment = 'Определенное количество символов';
const lengthLimit = 140;

const returnLengthString = function (current, max) {
  return current.length <= max;
};

returnLengthString(stringComment, lengthLimit);
