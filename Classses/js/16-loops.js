let users = ["Lorem" , "ipsum", "dolor"]

const userListDom = document.querySelector("#userList")

for(let index = 0; index < users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDom.appendChild(liDOM)
}  

let c = 0
while(c < 10){
    console.log(c)
    c++
}

const proDOM = document.querySelector("#proList")
const products = ["Laptop","pc","phone","speaker","mouse","server","keyboard"]

products.forEach(product => console.log(product))
products.forEach(  (product, index, arr) => arr[index] = `${product.toUpperCase()}` )
console.log(products)

products.forEach(product => {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = product
    proDOM.append(liDOM)
})
