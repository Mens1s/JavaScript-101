//  It similars to dictionary

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "1kg" : 1,
    
} // object oldugunu belirtir

console.log(laptop1.model)
console.log(laptop1["1kg"])

// Change information
laptop1.brand = "Mac"
console.log(laptop1.brand)

// Add information
laptop1.version = "2020"
console.log(laptop1.version)

// reach keys
keys = Object.keys(laptop1)
console.log(keys)

keys.forEach(element => {
    console.log(element)
    console.log(laptop1[element])
});

//add methods
let user1 = {
    firstName : "Bilgin",
    lastName : "Uzman",
    score: [ 1, 2, 3, 4],
    isActive : true,
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
};
console.log(user1.shortName())