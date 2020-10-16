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

function sum(a, b) {
    return a + b;
}

result = sum( 5,3);
console.log(result);

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


let userNumber;
  userNumber = document.getElementById("getNumber").value;
function simileNumber() {
    if (userName > b){
        return true;
    }
}

function checkSimile() {
    if (simileNumber()){
        console.log(`${userNumber}> заданого числа 6`)
    }else {
        console.log(`${userNumber}< заданого числа или равно 6`)
    }
}