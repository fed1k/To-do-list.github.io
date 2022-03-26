/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
let list = [];
let currentEdit = false;
let nowEdit = null;
const listSave = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

const storageGet = () => {
  const formData = JSON.parse(localStorage.getItem('list'));
  if (formData == null) {
    list = [];
  } else {
    list = formData;
  }
};

const toggleListCheck = (todo) => {
  list = list.map((addlist_) => {
    if (addlist_.index === todo.index) {
      return { ...todo, completed: !addlist_.completed };
    }
    return addlist_;
  });
  listSave();
};

const listDisplay = () => {
  const listElement = document.getElementById('list-space');
  listElement.innerHTML = '';
  for (let i = 0; i < list.length; i += 1) {
    const todoElement = document.createElement('li');
    todoElement.classList.add('todo');

    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    checkbox.checked = list[i].completed;
    checkbox.addEventListener('change', () => {
      toggleListCheck(list[i]);
    });

    const desc = document.createElement('p');
    desc.innerText = list[i].description;

    todoContent.appendChild(checkbox);
    todoContent.appendChild(desc);

    const actionBtns = document.createElement('div');
    actionBtns.classList.add('actions');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.classList.add('hidden');
    editBtn.setAttribute('type', 'button');
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    editBtn.addEventListener('click', () => {
      editTodo(list[i]);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.classList.add('hidden');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.innerHTML = '<i class="fa fa-trash">';
    deleteBtn.addEventListener('click', () => {
      removeTodo(list[i].index);
    });

    const moreBtn = document.createElement('button');
    moreBtn.classList.add('more-btn');
    moreBtn.setAttribute('type', 'button');
    moreBtn.innerHTML = '<i class="fa fa-ellipsis-v"></i>';
    moreBtn.addEventListener('click', () => {
      editBtn.classList.toggle('hidden');
      deleteBtn.classList.toggle('hidden');
    });

    actionBtns.appendChild(editBtn);
    actionBtns.appendChild(deleteBtn);
    actionBtns.appendChild(moreBtn);

    todoElement.appendChild(todoContent);
    todoElement.appendChild(actionBtns);
    listElement.appendChild(todoElement);
  }
  listSave();
};

const addTodo = () => {
  const desc = document.querySelector('#add-todo');
  if (desc.value) {
    const completed = false;
    const description = desc.value;
    const index = list.length + 1;
    list.push({ completed, description, index });
    listDisplay();
    listSave();
    desc.value = null;
  }
};

const editTodo = (todo) => {
  currentEdit = true;
  nowEdit = todo;
  const desc = document.querySelector('#add-todo');
  desc.value = todo.description;
  desc.focus();
};

const saveEdit = () => {
  const desc = document.querySelector('#add-todo');
  if (desc.value) {
    list = list.map((todo) => {
      if (todo.index === nowEdit.index) {
        return { ...todo, description: desc.value };
      } return todo;
    });
    listDisplay();
    listSave();
    desc.value = null;
    currentEdit = false;
    nowEdit = null;
  }
};

const removeTodo = (index_) => {
  list.splice((index_ - 1), 1);
  list = list.map(
    (todo, index) => (
      { completed: todo.completed, description: todo.description, index: index + 1 }
    ),
  );
  listDisplay();
};

const collectEdit = () => currentEdit;

const removeAllList = () => {
  const completedaddlists = list.filter((todo) => todo.completed);
  if (completedaddlists.length > 0) {
    completedaddlists.forEach((todo) => {
      removeTodo(todo.index);
      removeAllList();
    });
  }
};

export {
  addTodo, storageGet, listDisplay, removeTodo, collectEdit, saveEdit, removeAllList,
};
