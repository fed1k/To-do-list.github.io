import { removeAllList } from './functions.js';

const clearCompleted = () => {
  const clear = document.getElementById('clear-btn');
  clear.addEventListener('click', () => {
    removeAllList();
  });
};
export default clearCompleted;