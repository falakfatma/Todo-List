let btn = document.querySelector(".btn");
let todosHeading = document.getElementById("taskName")
let taskListId = document.getElementById("taskListId");
let todosText = document.getElementById("textarea");
let deleteBtn = document.getElementById('deleteBtn')
let deleteItem = document.getElementsByClassName('btn-danger')


taskListId.style.listStyle = 'none'

// on delete a item 
function myFunction(e) {
  let objectKey = localStorage.key(e)
  localStorage.removeItem(objectKey)
  setTimeout(() => {
    location.reload()
  }, 1000)
}

// on get
const getTasks = () => {
  const tasks = localStorage;
  for (const [key, value] of Object.entries(tasks)) {
    taskListId.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="fw-bold">${key}</div>
      ${value}
      <button class="btn btn-danger" onClick=myFunction(todosHeading)>Delete</button>
    </li>
   `
  }
}
window.onload = getTasks()



const createTask = (e) => {
  e.preventDefault()
  taskListId.innerHTML +=
    `
    <li class="list-group-item d-flex justify-content-between align-items-start">
         <div class="fw-bold" >${todosHeading.value}</div>
         ${todosText.value}
          <button class="btn btn-danger" onclick="myFunction(todosHeading)">Delete</button>
    </li>
   `
  localStorage.setItem(todosHeading.value, todosText.value)
  todosHeading.value = '';
  todosText.value = '';
}

//on create 
btn.addEventListener("click", createTask)

const deleteAllTask = (e) => {
  e.preventDefault()
  localStorage.clear()
  taskListId.innerHTML = ""
  todosHeading.value = '';
  todosText.value = '';
}

// on delete All
deleteBtn.addEventListener("click", deleteAllTask)
