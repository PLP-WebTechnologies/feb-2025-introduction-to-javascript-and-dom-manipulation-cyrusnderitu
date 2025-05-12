let inputField = document.querySelector('#inputText');
let btnSubmit = document.querySelector('.todo_add')
let formSubmit = document.querySelector('.todo-head')
let parentElement = document.querySelector('.todo-lists')
const noTasksMsg = document.getElementById('noTasksMsg');


if(parentElement.children.length !== 0){
    noTasksMsg.style.display = "none"
}
else{
    noTasksMsg.style.display="block"
}
formSubmit.addEventListener('submit', function(e){
    e.preventDefault()
    
    let newTask = document.createElement('li')
    const textSubmit = inputField.value
    if(textSubmit == ""){
        alert("Your input field is empty")
    }
    else{     
        newTask.textContent = textSubmit;

        // Adding the click functionality to the child "li" for completion
        newTask.addEventListener('click', ()=>{
            newTask.classList.toggle('complete');
            saveData()
        })
        parentElement.appendChild(newTask);
        inputField.value = ""
        saveData()
    }

    // Adding Delete Functionality to each Li
    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete-icon'); // custom class for styling
    newTask.appendChild(deleteSpan);
    deleteSpan.addEventListener("click", (e)=>{
        e.stopPropagation();
        newTask.remove()
        saveData()
    })
})

// Save Data to Local Storage
function saveData(){
    localStorage.setItem("todos", parentElement.innerHTML)
}

// Show Saved data on Page Load
function showTodos(){
    parentElement.innerHTML = localStorage.getItem("todos")
}
showTodos()







