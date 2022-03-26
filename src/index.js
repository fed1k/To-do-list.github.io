import './style.css';
import {
  addTodo, listDisplay, getData, collectEdit, saveEdit,
} from './functions.js';

window.onload = () => {
  getData();
  listDisplay();
};

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const desc = document.querySelector('#add-todo');
desc.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (!collectEdit())addTodo();
    else saveEdit();
  }
});
