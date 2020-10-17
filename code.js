let generalList = ["вася", "петя", "маша", "даша", "женя"];
let blackList = ["фома", "гия", "жора"];
let listForbes = ["хаби", "бузо", "крид"];
let userName;
let decision = false;
let message;

function allListGuests() {
    userName = document.getElementById("name_user").value;
}


function returnTrue() {
    return true;
}

function checkIsTrue_() {
    if (returnTrue()) {
        alert("checked function returns true")
    }
}

// function sum(a, b) {
//     return a + b;
// }
//
// result = sum( 5,3);
// console.log(result);

let a = 1;
let b = 6;


function simile() {
    if (a < b)
    return true;

}
function checkIsTrue() {
    if (simile()){
        console.log("да")
    }else {
        console.log ("No")
    }
}


let numberEnterUser;

function simileNumber() {
    numberEnterUser = document.getElementById("getNumber").value;
    if (numberEnterUser > b){
        return true ;
    }
}

function equally() {
    numberEnterUser = parseInt(document.getElementById("getNumber").value);
    if (numberEnterUser === b){
        return true;

    }
}


function checkSimile() {
    if (simileNumber()){
        console.log(`${numberEnterUser} БОЛЬШЕ заданого числа 6`)
    } else if (equally()) {
        console.log(`${numberEnterUser} РавнО заданому числу 6`)
    }else {console.log(`${numberEnterUser} меньше заданого числа 6`)}
}