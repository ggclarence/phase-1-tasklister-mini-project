
document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form')
let taskInput = document.getElementById(`new-task-description`)
let taskList = document.getElementById(`tasks`)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo()
  
    form.reset();
       })



  function addToDo(){
        let li = document.createElement(`li`)
        li.innerText = taskInput.value
        taskList.appendChild(li);

        let btn = document.createElement(`button`);
        btn.textContent = 'x'
        li.appendChild(btn)
        btn.addEventListener(`click`, () => {
        li.remove();
    })
  }
})









