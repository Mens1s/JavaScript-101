// son ögeye erismek
let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild)
lastChild.innerHTML = "lastChild"

// ilk ogeye erismek
let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "firstChild"

// ogeye sondan eklemek
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "kendi olusutrudugumuz oge"
ulDOM.append(liDOM)


// ogeye bastan eklemek
let headDOM = document.createElement("li")
headDOM.innerHTML = "ilk element olacak"

ulDOM.prepend(headDOM)