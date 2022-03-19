// Getting referrence to HTML elements
const add = document.querySelector('#button');
const form = document.querySelector('form');
const section = document.querySelector('section');
const container = document.querySelector('#container');
const round = document.querySelector('.cont');
let bookslistContainer;

// Clock with date and hour
const dateSpan = document.querySelector('#span');
const dateShower = ()=>{
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  dateSpan.textContent = `${hour}:${minute}:${second}`;
}
setInterval(dateShower, 1000);
// Template class for objects
class Whole {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Add books to the list
const main = [];
const adder = (e)=>{
  if (form.title.value && form.author.value) {
    const obj = new Whole(form.title.value, form.author.value);
    main.push(obj);
    let s = localStorage.setItem('list', JSON.stringify(main));      
    // Create book every list container
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const remove = document.createElement('button');
    div.className = 'listDiv';
    bookslistContainer = div;
    remove.textContent = 'Remove';
    remove.className = 'remove';
    container.appendChild(div);
    div.append(span1, remove);
    container.style.display = 'none';
    // Remove books from the list
    remove.addEventListener('click', () => {
      for(let i=0;i<main.length;i++){
        div.style.display = 'none';
        delete main[i];
        localStorage.setItem('list', JSON.stringify(main));
      }
    })
    span1.textContent = `"${obj.title}"  by  ${obj.author}`;
    form.title.value = null;
    form.author.value = null;  
  } else {
    e.preventDefault();
  }
}
add.addEventListener('click', adder);
const inputAuthor = document.querySelector('#author');
inputAuthor.addEventListener('keyup', e =>{
  if(e.keyCode === 13){
    adder();
  }
});

// Taking information from the local storage when page loads
window.addEventListener('load', ()=>{
  list.classList.add('addUI');
  let something = localStorage.getItem('list');
  let parsing = JSON.parse(something);
  // main.push(parsing);
  for(let i=0;i<parsing.length;i++){
    if(parsing[i]){
      main.push(parsing[i]);
      // Create book every list container
      const div = document.createElement('div');
      const span1 = document.createElement('span');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
      div.className = 'listDiv';
      bookslistContainer = div;
      // bookslistContainer.classList.add('listDiv-disable');
      container.appendChild(div);
      div.append(span1, remove);
      container.style.display = 'flex';
      span1.textContent = `"${parsing[i].title}"  by  ${parsing[i].author}`;
      remove.addEventListener('click', ()=>{
        delete parsing[i]
        localStorage.setItem('list', JSON.stringify(parsing))
        div.style.display = 'none';
      })  
    }
  }
})

// Navigation event listeners
const list = document.querySelector('.list');
const navAdd = document.querySelector('.nav-add');
const contact = document.querySelector('.contact');
const h1 = document.querySelector('h1');
const logo = document.querySelector('#logo');
const contactSection = document.querySelector('.contact-section');
navAdd.addEventListener('click', ()=>{
  form.style.display = 'flex';
  contactSection.style.display = 'none';
  // h1.style.display = 'none';
  h1.textContent = 'Add a new book';
  navAdd.classList.add('addUI');
  list.classList.remove('addUI');
  contact.classList.remove('addUI');
  // bookslistContainer.classList.toggle('listDiv-disable');
  container.style.display = 'none';
})

const addFunction = ()=>{
  form.style.display = 'none';
  contactSection.style.display = 'none';
  h1.textContent = 'All awesome books';
  list.classList.add('addUI');
  contact.classList.remove('addUI');
  navAdd.classList.remove('addUI');
  // bookslistContainer.classList.add('listDiv-disable');
  container.style.display = 'flex';
}
list.addEventListener('click', addFunction)

contact.addEventListener('click', ()=>{
  form.style.display = 'none';
  h1.textContent = 'Contact information';
  contactSection.style.display = 'flex';
  contact.classList.add('addUI');
  navAdd.classList.remove('addUI');
  list.classList.remove('addUI');
  // bookslistContainer.classList.('listDiv-disable');
  container.style.display = 'none';
})

logo.addEventListener('click', addFunction);

// Night mode button functionality
let day = 1;
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
btn.addEventListener('click', ()=>{
    round.classList.toggle('toggle');
    body.classList.toggle('body-night-mode');
    day ++;
    localStorage.setItem('night', day);
})

window.addEventListener('load', ()=>{
  let isDay = localStorage.getItem('night');
  let getdata = JSON.parse(isDay);
  day = getdata;
  if(getdata % 2 == 0){
    body.classList.add('body-night-mode');
    round.classList.add('toggle');
  }
})