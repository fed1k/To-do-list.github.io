import './style.css';

const array = [
  {
    description: 'Shopping',
    completed: false,
    index: 3,
  },
  {
    description: 'Going to school',
    completed: false,
    index: 1,
  },
  {
    description: 'Washing the dishes',
    completed: false,
    index: 2,
  },
];

const section = document.querySelector('section');
const manDiv = document.createElement('div');
manDiv.className = 'main-div';
section.appendChild(manDiv);
const headerP = document.createElement('p');
headerP.id = 'header';
headerP.textContent = "Today's To Do";
const icon1 = document.createElement('i');
icon1.className = 'fas fa-sync';
headerP.appendChild(icon1);
const form = document.createElement('form');
form.classList = 'form';
const lastP = document.createElement('p');
lastP.id = 'clear';
lastP.textContent = 'Clear all completed';
manDiv.append(headerP, form, lastP);
const add = document.createElement('input');
add.setAttribute('type', 'text');
add.setAttribute('placeholder', 'Add to your list...');
form.appendChild(add);
for (let i = 0; i < array.length; i += 1) {
  const inputDiv = document.createElement('div');
  inputDiv.className = 'input-div';
  form.appendChild(inputDiv);
  const input = document.createElement('input');
  input.className = 'input';
  input.setAttribute('type', 'checkbox');
  const p = document.createElement('p');
  p.className = 'listContent';
  p.textContent = array[i].description;
  const icon = document.createElement('i');
  icon.className = 'fas fa-ellipsis-v';
  inputDiv.append(input, p, icon);
}