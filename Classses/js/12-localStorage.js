let count = document.querySelector("#counter")
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let counter = 0

if(localStorage.getItem('counter') == null){
    localStorage.setItem('counter',0);
}
else{
    counter = localStorage.getItem('counter');
    count.innerHTML = counter
}

inc.addEventListener("click", clicked);
dec.addEventListener("click", clicked);

function clicked(){
    counter = parseInt(counter)
    this.id == "inc" ? counter += 1 : counter -= 1
    count.innerHTML = counter
    localStorage.setItem('counter',counter);
}

