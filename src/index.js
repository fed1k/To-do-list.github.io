import './style.css';
import clearCompleted from './clear.js';
import {
  addTodo, listDisplay, storageGet, collectEdit, saveEdit,
} from './functions.js';

window.onload = () => {
  storageGet();
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
clearCompleted();
