let settings = {
    username: "loremIpsum",
    password : "BadPassword",
    isActive: false,
    ip : "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// let userName = settings.userName
// console.log(userName)
let { username: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName)
console.log(user)

// obje icindeki bazi bilgilerin cikarilmasi
//kalan 2 bilgi new settingse atildi
let {username: userName2, password: password2, isActive:isActive2, ...newSettings} = settings

console.log(newSettings)

// objenin destructing ile kopyalanması
let setting2 = settings

setting2.username = "degisen bilg"
// ikisinde de degisti
console.log(settings)
console.log(setting2)
//kopyalar
let setting3 = {...settings}
setting3.username = "orjinale dön"
console.log(setting3)
console.log(settings)

// destructing listlerde de calisir
let score = [100,200,300,400]

let [a1,a2,...a3] = score
console.log(a1,a2,a3)