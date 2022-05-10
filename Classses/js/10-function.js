function update(id, argument){
    document.querySelector(`#${id}`).innerHTML = argument;
}

function greetings(firstName = "Mens1s"){   //  ? firstName : "Mens1s"

    let info = `Welcome ${firstName}`;
    return info
}

update("parag",greetings("mens1s"));

const helloFuncV1 = (firstname) => {console.log(`Hello ${firstname}`)}
helloFuncV1("h12")

const helloFuncV2 = firstname => console.log(`Hello ${firstname}`)
helloFuncV2("h122")

const helloFuncV3 = (firstname, lastname) => {console.log(`Hello ${firstname} ${lastname}`)}
helloFuncV3("h122","enough")

const helloFuncV4 = (firstname, lastname) => {
    let info = (`Hello ${firstname} ${lastname}`);
    console.log(info)
    return info
}

update("parag",helloFuncV4("asd","sadsad"))

