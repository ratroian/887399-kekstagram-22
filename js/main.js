
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
// const likes = _.random(15, 200);
const COMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const createObject = () => {

  const getRandomArrayElement = (elements) => {
    return elements[_.random(0, elements.length - 1)];
  };

  const getArrayElement = (elements) => {
    for (let i = 0; i < ID_OBJECTS.length; i++) {
      elements[i++]
    }
  };

  return {
    id: getRandomArrayElement(ID_OBJECTS),
    url: 'photos/' + getRandomArrayElement(LINKS) + '.jpg',
    description: 'Нормальное описание к фото №' + getRandomArrayElement(LINKS),
    likes: _.random(15, 200),
    comments: {
      id: _.random(1, 200),
      avatar: 'img/avatar' + _.random(1, 6) + '.svg',
      message: getRandomArrayElement(COMENTS),
      name: 'Артем' + _.random(1, 6),
    },
  };
};

console.log(createObject());

const TOTAL_OBJECT = 25;

const similarObjects = new Array(TOTAL_OBJECT).fill(null);
// .map(() => createObject())
const uniqObject = similarObjects;
if (uniqObject !== similarObjects) {similarObjects.map(() => createObject())}
console.log(similarObjects);



// // Длина строки (авторская=))

// const stringComment = 'Определенное количество символов';
// const lengthLimit = 140;

// const returnLengthString = function (current, max) {
//   return current.length <= max;
// };

// returnLengthString(stringComment, lengthLimit);

// // Создаю пустые массивы
// const idObjects = [];
// const links = [];
// const arrayLength = 25;
// const likes = [];

// // Вношу данные в массивы
// for(i = 0; i < arrayLength; i++) Links.push(i);
// for(i = 0; i < arrayLength; i++) idObjects.push(i);
// for(i = 15; i < 250; i++) likes.push(i);


// const createObject = () => {
//   const randomIdIndex = randomInteger(0, idObjects.length);
//   const randomUrlIndex = randomInteger(0, links.length);
//   const randomLikeIndex = randomInteger(0, likes.length);

//   return {
//     id: idObjects[randomIdIndex],
//     url: links[randomUrlIndex],
//     description: '',
//     likes: likes[randomLikeIndex],
//     comments: '',
//   };
// };

