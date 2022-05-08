let fullname = prompt("Enter name:")

let title = document.querySelector("#title")

fullname = `${fullname[0].toUpperCase()}${fullname.slice(1).toLowerCase()}`;
title.innerHTML = "Welcome Mr. " + fullname + `<h3 style = "color:green">You are best!</h3>`
