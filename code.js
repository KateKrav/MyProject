"use strict";


let getStatus;
let refrigerator = ["макароны", "салат", "фрукты", "сок","бутерброт"];
let gasStove = ["жаренная курочка", "суп", "борщ", "пюре"];
let cupboard= ["сухарики", "чипсы", "печенье", "шоколад"];
let i;

function getFood() {
    getStatus = document.getElementById("inputMessage").value;
    switch (getStatus) {
        case "1" :
            console.log("Kate is at home");
            break;
        case "2" :
            console.log("Kate is not at home");
            break;
        default:
            console.log("There can be no other options");
    }
}

function findFoodInRefrigerator () {
    for (i = 0, i < refrigerator.length; i++){
        document.getElementById("show_list").innerHTML= refrigerator.length[i]
    }
}