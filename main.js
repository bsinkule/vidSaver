const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.classList.add('as');
  li.classList.add('if');
  const vid = document.createElement('iframe');
  vid.classList.add('bonk');

  if(text.indexOf('m.') !== -1){
    text = text.replace('m.', '')
  }
  let cow = 'www.youtube.com/watch?v='
  let it = 'youtu.be/'
  if(text.indexOf(it) !== -1){
    text = text.replace(it, cow)
  } 
   
  text = text.replace('watch?v=', 'embed/');
  vid.src = text;
  vid.setAttribute('allowFullScreen', '')
  li.appendChild(vid);
  ul.insertBefore(li, ul.childNodes[0]);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

