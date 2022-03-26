// import { Template } from 'webpack';
import './style.css';
// import adder from './functions.js';

class Template {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let array = [];
// const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
// array = getFromLocalStorage;
const sendToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(array));
};

const section = document.querySelector('section');
section.innerHTML = `
  <div class="main-div">
    <p id="header">Today's To Do <i class="fas fa-sync"></i></p>
    <form class="form">
      <input class="dataEntry" type="text" placeholder="Add to your list..." required></input>
    </form>
    <p id="clear">Clear all completed</p>
  </div>
`;
// Create list
const createList = () => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  const listText = document.createElement('p');
  listText.className = 'listContent';
  const icon1 = document.createElement('i');
  icon1.className = 'fas fa-ellipsis-v';
  const icon2 = document.createElement('i');
  icon2.className = 'fas fa-trash-alt icon2';
  list.append(checkboxes, listText, icon1, icon2);
  // Add event to checkboxes
  // console.log(array);
  // for(let i=0;i<test)
  // console.log(test);
  // checkboxes.forEach((element) => {
  //   console.log(element);
  // });
  for (let i = 0; i < list.length; i += 1) {
    console.log(list[i]);
  }
  checkboxes.addEventListener('click', () => {
    console.log(list);
    icon1.classList.toggle('remove-icon-active');
    icon2.classList.toggle('icon2');
    listText.classList.toggle('listContent-disable');
    list.classList.toggle('changeBg');
  });
  // Remove from list event
  // inddd = test[i];

  // delete test[i];
  // delete test[i];
  // array.splice(array[test]);
  // console.log(test);
  // console.log(array);
  icon2.addEventListener('click', () => {
    // const inddd = 0;
    form.removeChild(list);
  });
  // Edit event listener
  icon1.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'listContent';
    editInput.style.backgroundColor = '#fffed3';
    list.style.backgroundColor = '#fffed3';
    editInput.value = listText.textContent;
    list.replaceChild(editInput, listText);
  });
};

const dataEntry = document.querySelector('.dataEntry');
dataEntry.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && dataEntry.value) {
    const object = new Template(dataEntry.value, false, array.length);
    array.push(object);
    e.preventDefault();
    createList();
    const listText = document.querySelectorAll('.listContent');
    for (let i = 0; i < array.length; i += 1) {
      listText[i].textContent = array[i].description;
    }
    dataEntry.value = null;
    sendToLocalStorage();
  }
});

window.addEventListener('load', () => {
  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getFromLocalStorage.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getFromLocalStorage[i].description;
    array = getFromLocalStorage;
  }
});
// test.forEach((element) => {
//   console.log(element);
// });

// for (let i = 0; i < checkboxes.length; i += 1) {
// console.log(checkboxes[i]);
// }
// checkbox.addEventListener('click', () => {
//   const threeDots = document.querySelectorAll('.fas fa-ellipsis-v');
//   const removeIcon = document.querySelectorAll('.fas fa-trash-v');
//   threeDots.classList.toggle('remove-icon-active');
//   removeIcon.classList.toggle('icon2');
// });
// });
//     const input = document.createElement('input');
//     input.className = 'input';
//     input.setAttribute('type', 'checkbox');
//     const p = document.createElement('p');
//     p.className = 'listContent';
//     for (let i = 0; i < count; i += 1) {
//       p.textContent = array[i].description;
//     }
//     const icon = document.createElement('i');
//     const icon2 = document.createElement('i');
//     icon.className = 'fas fa-ellipsis-v';
//     icon2.className = 'fas fa-trash-alt icon2';
//     inputDiv.append(input, p, icon, icon2);

// let count = 0;
// add.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter' && add.value) {
//     count += 1;
//     e.preventDefault();
//     const obj = new Template(add.value, false, count);
//     array.push(obj);
//     localStorage.setItem('local', JSON.stringify(array));
//     add.value = null;
//     const inputDiv = document.createElement('div');
//     inputDiv.className = 'input-div';
//     form.appendChild(inputDiv);

//     // Remove element from the list
//     icon2.addEventListener('click', () => {
//       form.removeChild(inputDiv);
//       const getFromLocalStorage = JSON.parse(localStorage.getItem('local'));
//       localStorage.setItem('local', JSON.stringify(getFromLocalStorage));
//     });
//     // Checkbox event
//     input.addEventListener('click', () => {
//       p.classList.toggle('listContent-disable');
//       icon.classList.toggle('remove-icon-active');
//       icon2.classList.toggle('icon2');
//     });
//   }
// });

// window.addEventListener('load', () => {
//   const getFromLocal = JSON.parse(localStorage.getItem('local'));
//   for (let i = 0; i < getFromLocal.length; i += 1) {
//     createList();
//     p.textContent = getFromLocal[i].description;
//     icon2.addEventListener('click', () => {
//       form.removeChild(inputDiv);
//       const getFromLocalStorage = JSON.parse(localStorage.getItem('local'));
//       delete getFromLocalStorage[i];
//       localStorage.setItem('local', JSON.stringify(getFromLocalStorage));
//     });
//     // Checkbox event
//     input.addEventListener('click', () => {
//       p.classList.toggle('listContent-disable');
//       icon.classList.toggle('remove-icon-active');
//       icon2.classList.toggle('icon2');
//     });
//   }
// });

// const markTask = () => {
//   for (let i = 0; i < checkbox.length; i += 1) {
//     checkbox[i].addEventListener('change', () => {
//       if (checkbox[i].checked) {
//         checkbox[i].classList.add('input-after');
//         checkbox[i].nextElementSibling.classList.add('checked');
//         status(i, true);
//       } else {
//         checkbox[i].classList.remove('input-after');
//         checkbox[i].nextElementSibling.classList.remove('checked');
//         status(i, false);
//       }
//     });
//   }
// };
