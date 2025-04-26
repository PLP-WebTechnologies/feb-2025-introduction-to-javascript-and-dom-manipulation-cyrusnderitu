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
        parentElement.appendChild(newTask);
        inputField.value = ""
    }
})

parentElement.addEventListener('click', (e)=>{
    if(e.target.tagName === 'li'){
        e.target.classList.toggle('complete')
    }
})



