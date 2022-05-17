let preNot = localStorage.getItem("not")
let preName = localStorage.getItem("name")

if(preNot != null){
    let nots = preNot.split(" ")
    let names = preName.split(" ")

    let a = nots.length

    for(let b = 1; b < a; b++){
        addItem(names[b],nots[b])
    }
    
}

let send = document.querySelector("#userform")
send.addEventListener("submit", addElement)

function addElement(event){
    event.preventDefault()

    const username = document.querySelector("#username")
    const not = document.querySelector("#not")

    if(username.value && not.value){
        let alert =document.querySelector("#alert")
        addItem(username.value , not.value)
    
        preNot += " "+not.value
        preName += " "+username.value

        localStorage.setItem("not",preNot)
        localStorage.setItem("name",preName)
        alert.innerHTML = alertFunction(
            'Basarili',
            'Kaydiniz alindi',
            'success'
        )
    }
    else{
        let alert =document.querySelector("#alert")
        alert.innerHTML = alertFunction(
            'Dikkatli Olunuz',
            'Eksik Bilgi Girdiniz',
            'warning'
        )
    }    
}

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function addItem(username , not){
    
    let userlist = document.querySelector("#userList")
    let text = `
    ${username}
    <span class="badge bg-primary rounded-pill">${not}</span>
    `
    let li = document.createElement("li")

    li.innerHTML = text

    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

    userlist.append(li)

}
