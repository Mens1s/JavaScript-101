let domain = "kodluyoruz"
let isActive = false
let items = [20, 30 ,40 , isActive, domain]
/*
console.log(items)

console.log("lenght : " + items.length)

console.log(items[0])

console.log( items[ Math.floor(items.length / 2)] )

console.log(items[items.length - 1 ])

console.log( Array.isArray(items) )
*/
// update arrays 

// sona eklemek

items.push(1000)

// basa eklemek

items.unshift(1)

// son elemanı çıkarmak

let lastItem = items.pop()
console.log("Last item :  "+ lastItem)

// bastaki elemanı cıkarmak

let firstItem = items.shift()
console.log("First item : "+firstItem)


// arrayin bir ogesini degistirmek

items[3] = 10
// array methods

items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

// oge ayirmak
let newItems = items.splice(1, 5) // 1. indexten başla 5 tane ögeyi al ve kendine ayır ana arrayden sil
console.log(newItems)
console.log(items)
// array icinde index bulma
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// arrayi kopyalamak
let copyItems = items

console.log(items)
copyItems.pop()
console.log(items) // cift tarafli giti python gibi

copyItems = items.slice() // kopyalar
console.log(items)
copyItems.pop()
console.log(items) 
console.log(copyItems)

// yeni kopyalama türü
let es6Items = [...items]
es6Items.pop()
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // toplamak
console.log(allUsers)

// stringe cevirmek

console.log(allUsers.toString())
console.log(allUsers.join("---"))

// istedigimiz indexe eleman ekleme
console.log(allUsers)
allUsers.splice(allUsers.length - 1, 0, "Melisa")
console.log(allUsers)

