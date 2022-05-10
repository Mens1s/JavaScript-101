let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", domClick )

function domClick(){
    console.log("Tiklandı")
    this.style.color = "red"
    console.log(this.innerHTML = "BilgiEklendi")
}