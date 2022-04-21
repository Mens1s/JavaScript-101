// let ve const (ant) kullanilir

// var eskiden

var dnsName = "kodluyoruz.org"
console.log(dnsName)


// let
let serverName;
serverName = "mens1s.here"
console.log(serverName)

serverName += ".wasIt"
console.log(serverName)

// const

const serverPassword = "Bilgi eklendi"
console.log(serverPassword)

// number variables

let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = priceTax + price;

console.log("Price:", price, "KDV:", tax,"KDV PRICE:", priceTax,"Last price:" , total);

let counter = 320;
counter++;
counter*=10;
counter++;
counter/=2;
console.log(counter);

console.log( 2**4 );

// MATH LIBRARY

console.log("To floor : ", Math.floor(1.9)); //1
console.log("To up : ", Math.ceil(1.1)); // 2

console.log("To closest : ", Math.round(1.49));//1

// type casting

let strNumber = "13";
let num = Number(strNumber);
console.log(num);

// BOOLEAN VARIABLES

let isActive = false;
let username1;
isActive = Boolean(username1);
console.log(isActive);// false

username1 = "mens1s";
isActive = Boolean(username1);
console.log(isActive); // true

// TYPE

console.log(
    "price : ",
    typeof(111),
)// number

console.log(
    "price : ",
    typeof(" 12332 "),
)//string

console.log(
    "price : ",
    typeof(true),
)//boolean
// casting ext

let number1 = "11";
number1 = parseInt(number1);
console.log("Number 1 : ", number1, typeof(number1)) //11

let number2 = "11px";
number2 = parseInt(number2);
console.log("Number 2 : ", number2, typeof(number2)) //11

let number3 = "px11";
console.log("Number 3 : ", parseInt(number3), typeof(number3)) // NAN

let n4 = "15.6fd";
n4 = parseFloat(n4);
console.log(n4) //15.6

let n5 = 55;
n5 = n5.toString();
console.log("Number 5 : ", n5 , typeof(n5));

// TEMPLATE Literals Kullanimi
let username = "mens1s";
let DOMAIN = "github.com/";

let email = DOMAIN + username;

let info = `Merhaba ${username} sitemize hosgeldin ... 
github adresin : ${email}
github adresinin uzunlugu ise : ${email.length}
saat bilgimiz : ${new Date().getHours()}:${new Date().getMinutes()}
`;

console.log(info)