let username = prompt(" Enter username : ")
let age = prompt("Enter your age : ")

// let p = document.querySelector("#parag")

if(username.length > 0){
    p.innerHTML = `Welcome Mr. ${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`
}
else{
    p.innerHTML = "Your are not login!"
}

if(username && age >= 18){
    p.innerHTML = `Welcome Mr. ${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`
}
else if(username){
    p.innerHTML = `Hi, Mr. ${username[0].toUpperCase()}${username.slice(1).toLowerCase()} You cannot use this web site!`
}
else{
    p.innerHTML = `Enter USERNAME!`
}

let userName = prompt("Enter username : ")
let info = document.querySelector("#parag")
info.innerHTML = `${userName.length > 0 ? `Welcome, Mr.  ${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`  : "Not entered Username"}`
