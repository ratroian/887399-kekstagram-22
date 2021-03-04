import {randomInteger} from './util.js';
import {makeUniqueRandomIntegerGenerator} from './util.js'

const ID_OBJECTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const LINKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const COMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const getUniqueRandomIntegerId = makeUniqueRandomIntegerGenerator(0, ID_OBJECTS.length - 1);
const getUniqueRandomIntegerUrl = makeUniqueRandomIntegerGenerator(0, LINKS.length - 1);
const getUniqueRandomIntegerCommentsId = makeUniqueRandomIntegerGenerator(1, 200);

const getRandomArrayElement = (elements) => {
  return elements[randomInteger(0, elements.length)];
};

const createObject = () => {

  return {
    id: getUniqueRandomIntegerId(),
    url: 'photos/' + getUniqueRandomIntegerUrl() + '.jpg',
    description: 'Нормальное описание к фото',
    likes: randomInteger(15, 200),
    comments: {
      id: getUniqueRandomIntegerCommentsId(),
      avatar: 'img/avatar' + randomInteger(1, 6) + '.svg',
      message: getRandomArrayElement(COMENTS),
      name: 'Артем' + randomInteger(1, 6),
    },
  };
};

const TOTAL_OBJECT = 25;

const similarObjects =  new Array(TOTAL_OBJECT).fill(null).map(() => createObject());

similarObjects.forEach((element, index, array) => {
  let isElementInclud = false;
   array.forEach((el, ind) => {
    if (element.url === el.url && element.id !== el.id) {
      isElementInclud = true;
    };
  });
  // if (isElementInclud === true) {
  //   element.url = 'photos/' + getRandomArrayElement(LINKS) + '.jpg';
  // };
  // console.log(isElementInclud, element.url, element.id);
});

// console.log(similarObjects)
