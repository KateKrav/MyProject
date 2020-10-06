"use strict";


let getStatus;
let refrigerator = ["макароны", "салат", "фрукты", "сок", "бутерброт"];
let gasStove = ["жаренная курочка", "суп", "борщ", "пюре"];
let cupboard = ["сухарики", "чипсы", "печенье", "шоколад"];
let refrigeratorIsChecked = false;
let gasStoveIsChecked = false;
let cupboardIsChecked = false;

let frigleFoogList = "";
let frigleFoogListGasStove = "";
let frigleFoogListCupboard = "";



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


function findFoodInRefrigerator() {
    if (refrigeratorIsChecked === false) {
        for (let i = 0; i < refrigerator.length; i++) {
            frigleFoogList = frigleFoogList + refrigerator[i] + "<br>";
            document.getElementById('show_listRefrigerator').innerHTML = frigleFoogList;
        }
        refrigeratorIsChecked = true;

    }
}

function findFoodInGasStove() {
    if(gasStoveIsChecked === false){
        for (let i = 0; i < gasStove.length; i++){
            frigleFoogListGasStove = frigleFoogListGasStove + gasStove[i]+ "<br>";
            document.getElementById("show_listGasStove").innerHTML = frigleFoogListGasStove;
        }
        gasStoveIsChecked = true;
    }
}

function findFoodInCupboard() {
    if(cupboardIsChecked === false){
        for (let i = 0; i < cupboard.length; i++){
            frigleFoogListCupboard = frigleFoogListCupboard + cupboard[i]+ "<br>";
            document.getElementById("show_listCupboard").innerHTML = frigleFoogListCupboard;
        }
        cupboardIsChecked = true;
    }
}
