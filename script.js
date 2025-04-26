let inputField = document.querySelector('#inputText');
let btnSubmit = document.querySelector('.todo_add')
let formSubmit = document.querySelector('.todo-head')
let parentElement = document.querySelector('.todo-lists')


formSubmit.addEventListener('submit', function(e){
    e.preventDefault()
    const textSubmit = inputField.value
    if(textSubmit == ""){
        alert("Your input field is empty")
    }
    else{
        let newTask = document.createElement('li')
        newTask.innerHTML = textSubmit;

        newTask.addEventListener('click', ()=>{
            this.classList.toggle('complete')
        })
        parentElement.appendChild(newTask);
        inputField.value = ""
    }
})




