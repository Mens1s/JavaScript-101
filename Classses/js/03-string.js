let email = "mens1s@gmail.com"
let firstName = "ahmet"
let lastName = "yigit"

// length

console.log(email.length)

// find char in the index

console.log( firstName[0] )
console.log( firstName.charAt(0) )

// to upper/lower case

firstName =  firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// search

console.log( email.search("@") ) // varsa 0 yoksa -1

// slice
let com = email.indexOf(".");

let domain = email.slice( email.search("@") + 1 , com );
console.log( domain );

//replace

email = email.replace("gmail.com", "mens1s.com");
console.log(email);

//includes true false return 
console.log( email.includes("@") );
console.log( email.includes("p") );

// startsWith endsWith
console.log( email.startsWith("mens1s") );
console.log( email.endsWith("mens1s.com") );

// ilk harfeleri büyük yapma

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

console.log(fullName)