
// Источник https://learn.javascript.ru/task/random-int-min-max

let minValue = 1;
let maxValue = 14;

let randomInteger = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min < max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    alert('Значение ' + min + 'должно быть больше ' + max)
  }
};

randomInteger (minValue, maxValue);

// Длина строки (авторская=))

let stringComment = ('Определенное количество символов');
let lengthLimit = 140;

let returnLengthString = function (workString, maxLength) {
  if (workString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

returnLengthString(stringComment, lengthLimit);
