// filter kullanimi
const products = ["Laptop","pc","phone","speaker","mouse","server","keyboard"]

const new_pro = products.filter( item => item.length > 5)
new_pro.forEach( item => console.log(item) )

const userss = [
    {fullName: "Ayse Der", isActive : false},
    {fullName: "Ahmet Ur", isActive : true},
    {fullName: "Asya Bas", isActive : true},
    {fullName: "Aksel Demez", isActive : false},
]

const active_users = userss.filter( user => user.isActive === true)
active_users.forEach( user => console.log(user) ) 

// map kullanimi
const users = ["AYSE","MehMet","TugCE","AkSEL"]
const new_users = users.map( user => user.toLowerCase() )
console.log(users)
console.log(new_users)

const users_obj = users.map( item => {
    return {username : item, shortName: `${item[0].toUpperCase()}.`, newName : `${item[0].toUpperCase()+item.slice(1).toLowerCase()}`}
})
console.log(users_obj)