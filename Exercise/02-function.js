
let counter = 0
let counDom = document.querySelector("#counter")
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")

inc.innerHTML = "Increase"
dec.innerHTML = "Decrease"
counDom.innerHTML = counter.toString()

// const update = counter => counDom.innerHTML = counter.toString()

// inc.addEventListener("click",function(){
//     counter++;
//     update(counter);
// })
// dec.addEventListener("click",function(){
//     counter--;
//     update(counter);
// })

inc.addEventListener("click",clickEvent)
dec.addEventListener("click",clickEvent)


function clickEvent(){
    console.log(this.id)
    this.id == "inc" ? counter += 1 : counter -= 1
    counDom.innerHTML = counter
}