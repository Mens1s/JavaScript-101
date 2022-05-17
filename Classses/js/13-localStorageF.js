let parag = document.querySelector("#parag")
let user = {username : "mens1s", isActive : true}

localStorage.setItem('userInfo', JSON.stringify(user) )

let userInfo = localStorage.getItem('userInfo')

userInfo = JSON.parse(userInfo)

parag.innerHTML = userInfo.username + "   " + userInfo.isActive
