
let btn = document.querySelector(".btn");
let heading = document.getElementById("taskName");
let taskListId = document.getElementById("taskListId");
  // console.log(heading)
  // alert(heading)
  // for(let x of heading.value){
  //   console.log(heading[x])
  // }
btn.addEventListener("click", myfunc)
function myfunc(event) {
  event.preventDefault()

  localStorage.setItem("Note : ", heading.value)
  taskListId.innerHTML +=  `<li class="liClassList" style="list-style: none;padding: 17px;">${heading.value}</li> `
  heading.value = '';
}

// let notes = prompt(`Write your Note`)
// // if(heading){
// confirm(` Its Heading is ${heading}`)
// // }
// let clear = confirm(` want to delete your all notes`)
// let clearone = confirm(` want to delete your note`)
// if (clearone) {
//   localStorage.removeItem(heading)

// }
// if (clear) {
//   localStorage.clear()
//   alert(`delete successfully`)
// }
