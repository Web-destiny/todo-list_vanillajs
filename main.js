let todoContent = document.querySelector('.todo-content')
let i = 0;


let todoInput = document.querySelector('.todo-input').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        i++
        let res = `<div class="todo-content-item"><p>${this.value}</p>
            <button class="btn btn-primary todo-remove-button" data-token="token${i}">Удалить</button>
        </div>`
        todoContent.innerHTML += res
        localStorage.setItem(`token${i}`, res)
        this.value = ''
    }
  })


function getItem(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i)
        let itemForAppend = localStorage.getItem(key)
        todoContent.innerHTML += itemForAppend
    }
}

getItem()
todoContent.addEventListener('click', function (event) {
    if(event.target.tagName == 'BUTTON'){
        event.target.closest('.todo-content-item').remove()
        let targetLocStItem = event.target.dataset.token
        localStorage.removeItem(targetLocStItem)
    }
})