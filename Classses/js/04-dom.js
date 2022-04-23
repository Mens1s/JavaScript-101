
// DOM YAPISI
document.body.style.backgroundColor = "aqua"


let h2 = document.getElementById('title')
console.log(h2.innerHTML)
h2.innerHTML = 'deneme'

// querySelector! the most important thing is!
let link = document.querySelector("ul#list>li>a")
console.log(link.innerHTML)
link.innerHTML = "link bilgisi degisti"
//or
let link2 = document.querySelector("#linkID")
console.log(link2.innerHTML)
link2.innerHTML += " mens1s was changed?" 

link2.style.color = "red"
link2.classList.add("btn")

