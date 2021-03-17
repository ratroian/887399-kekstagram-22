import {createObject} from './data.js'

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createObject();

// pictures.forEach((picture) => {
//   const pictureElement = pictureTemplate.cloneNode(true);
//   pictureElement.querySelector('src').textContent = picture.url;
//   pictureElement.querySelector('.picture__likes').textContent = picture.likes;
//   pictureElement.querySelector('.picture__comments').textContent = picture.comments.id;
//   pictureListElement.appendChild(pictureElement);
// });


const pictureListFragment = document.createDocumentFragment();

pictures.forEach(({src, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('src').textContent = src;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.id;
  pictureListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(pictureListFragment);
