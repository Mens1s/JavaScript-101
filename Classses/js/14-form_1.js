
let formDom = document.querySelector("#userform")
formDom.addEventListener("submit", formSubmit)

let scoreInputDom = document.querySelector("#score")

if(localStorage.getItem("score") != null){
    let pre = document.querySelector("#pre")
    pre.innerHTML = "Previous number is " + localStorage.getItem("score")
}

function formSubmit(event){
    event.preventDefault()
    console.log("Submitted")
    console.log(scoreInputDom.value)
    localStorage.setItem("score",scoreInputDom.value)
}