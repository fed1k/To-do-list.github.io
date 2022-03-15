const add = document.querySelector('#button');
const form = document.querySelector('form');
const section = document.querySelector('section');

class Whole{
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}
add.addEventListener('click', (e) =>{
    if(form.title.value && form.author.value){
        const obj = new Whole(form.title.value, form.author.value);
        const convertToJsn = JSON.stringify(obj);
        localStorage.setItem(obj.title, convertToJsn);
        const div = document.createElement('div');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const remove = document.createElement('button');
        const br = document.createElement('br');
        const hr = document.createElement('hr');
        console.log(obj.title);
        remove.style.display = 'block';
        remove.textContent = 'Remove';
        section.appendChild(div);
        div.append(span1, br, span2, remove, hr);
        remove.addEventListener('click', ()=>{
            section.removeChild(div);
            localStorage.removeItem(obj.title);
        })
        span1.textContent = obj.title
        span2.textContent = obj.author
        form.title.value = null
        form.author.value = null
    }else{
        e.preventDefault();
    }
})