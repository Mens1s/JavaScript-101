let username = prompt("Enter your name please : ");
document.querySelector("#myName").innerHTML = username
showTime();
function showTime(){
    const d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    min = addZero(min);
    sec = addZero(sec);

    document.querySelector("#myClock").innerHTML = hours + ':' + min + ':' + sec;
    setTimeout(showTime,1000);
}
function addZero(a){
    if(a < 10) a = "0" + a;
    return a;
}