let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", domClick )

function domClick(){
    console.log("Tiklandı")
    console.log(this.style.color);
    if(this.style.color == "red") this.style.color = "pink";
    else this.style.color = "red"
    console.log(this.innerHTML = "BilgiEklendi")
}