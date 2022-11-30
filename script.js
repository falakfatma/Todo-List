
let heading = document.getElementById("taskName");
let btn = document.querySelector(".btn");
btn.addEventListener("click", myfunc)
function myfunc() {
  console.log(heading.value)
  alert(heading.value)
  // for(let x of heading.value){
  //   console.log(heading[x])
  // }
localStorage.setItem("Note : ", heading.value)
  // console.log(itemSet)
  // alert(itemSet)
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
