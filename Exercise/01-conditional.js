let username = prompt("Enter your username : ")
let not = prompt("Enter your grade : ")
let cGrade = ""

if(not > 90) cGrade = "AA"
else if(not > 85) cGrade = "AB"
else if(not > 80) cGrade = "BB"
else if(not > 75) cGrade = "BC"
else if(not > 65) cGrade = "CC"
else if(not > 60) cGrade = "DC";
else if(not > 50) cGrade = "DD";
else cGrade = "FF"

let info = document.querySelector("#parag")

info.innerHTML = `Hi Mr. ${username[0].toUpperCase()}${username.slice(1).toLowerCase()} YOUR FINAL GRADE IS ${cGrade} `
