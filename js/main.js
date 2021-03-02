
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

const ID_OBJECTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const LINKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const COMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const getRandomArrayElement = (elements) => {
  return elements[randomInteger(1, ID_OBJECTS.length)];
};

const createObject = () => {

  return {
    id: getRandomArrayElement(ID_OBJECTS),
    url: 'photos/' + getRandomArrayElement(LINKS) + '.jpg',
    description: 'Нормальное описание к фото',
    likes: randomInteger(15, 200),
    comments: {
      id: _.random(1, 200),
      avatar: 'img/avatar' + randomInteger(1, 6) + '.svg',
      message: getRandomArrayElement(COMENTS),
      name: 'Артем' + randomInteger(1, 6),
    },
  };
};

// console.log(createObject());

const TOTAL_OBJECT = 25;

const similarObjects = new Array(TOTAL_OBJECT).fill(null).map(() => createObject());

similarObjects.forEach((element, index, array) => {
  let isElementInclud = false;
  array.forEach((el, ind) => {
    if (element.url === el.url && element.id !== el.id) {
      isElementInclud = true;
    };
  });
  if (isElementInclud === true) {
    element.url = 'photos/' + getRandomArrayElement(LINKS) + '.jpg';
  };
  console.log(isElementInclud, element.url);
});

// Длина строки (авторская=))

const stringComment = 'Определенное количество символов';
const lengthLimit = 140;

const returnLengthString = function (current, max) {
  return current.length <= max;
};

returnLengthString(stringComment, lengthLimit);


