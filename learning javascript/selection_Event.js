// selection  change    event

console.log(document.getElementById("btn"))
// console.log(document.getElementsByClassName("class"))
console.log(document.getElementsByTagName("h1"))


// textContent=> used for modification
var btn = document.querySelector("h1")
btn.textContent ="hello javascript.."
btn.textContent += "starting.."
console.log(<i>"Hello world"</i>)

// innerHTML
var h1 =document.querySelector("h1")
h1.textContent ="<i>hello</i>"
h1.innerHTML="<i>hello</i>"

var h1=document.querySelector("h2")
h1.classList.add("mark")