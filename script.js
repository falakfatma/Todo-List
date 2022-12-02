let btn = document.querySelector(".btn");
let todosHeading = document.getElementById("taskName")
let taskListId = document.getElementById("taskListId");
let todosText = document.getElementById("textarea");
let div = document.createElement("li");
div.style.listStyle = 'none'
//on create 
btn.addEventListener("click", (event) => {
  event.preventDefault()
  localStorage.setItem(todosHeading.value, todosText.value)
 div.innerHTML += 
   `
   <h1>${todosHeading.value}</h1>
   <p> ${todosText.value}</p>
   `
  console.log(div)
  taskListId.append(div)
  todosHeading.value = '';
  todosText.value = '';
})
//
// // on delete
deleteBtn.addEventListener("click", (event) => {
  event.preventDefault()
  localStorage.removeItem(todosHeading.value, todosText.value)
 div.innerHTML = ""
  // console.log(div)
  taskListId.append(div)
  todosHeading.value = '';
  todosText.value = '';
})
// // let notes = prompt(`Write your Note`)
// // // if(todosHeading){
// confirm(` Its Heading is ${todosHeading}`)
// // }
// let clear = confirm(` want to delete your all notes`)
// let clearone = confirm(` want to delete your note`)
// if (clearone) {
//   localStorage.removeItem(todosHeading)

// }
// if (clear) {
//   localStorage.clear()
//   alert(`delete successfully`)
// }
