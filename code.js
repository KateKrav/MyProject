"use strict";


let userRequest;
let refrigeratorFoodList = ["макароны", "салат", "фрукты", "сок", "бутерброт"];
let gasStoveFoodList = ["жаренная курочка", "суп", "борщ", "пюре"];
let cupboardFoodList = ["сухарики", "чипсы", "печенье", "шоколад"];
let refrigeratorIsChecked = false;
let gasStoveIsChecked = false;
let cupboardIsChecked = false;

let refrigeratorListToShow = "";
let GasStoveListToShow = "";
let cupboardListToShow = "";

let orderedDish;




function getFood() {
    userRequest = document.getElementById("inputMessage").value;
    switch (userRequest) {
        case "1" :
            console.log("Kate is at home");
            orderedDish = prompt("Чего бы ты хотел поесть?");
            getResultOrderedDish();
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
        for (let i = 0; i < refrigeratorFoodList.length; i++) {
            refrigeratorListToShow = refrigeratorListToShow + refrigeratorFoodList[i] + "<br>";
            document.getElementById('show_listRefrigerator').innerHTML = refrigeratorListToShow;
        }
        refrigeratorIsChecked = true;

    }
}

function findFoodInGasStove() {
    if(gasStoveIsChecked === false){
        for (let i = 0; i < gasStoveFoodList.length; i++){
            GasStoveListToShow = GasStoveListToShow + gasStoveFoodList[i]+ "<br>";
            document.getElementById("show_listGasStove").innerHTML = GasStoveListToShow;
        }
        gasStoveIsChecked = true;
    }
}

function findFoodInCupboard() {
    if(cupboardIsChecked === false){
        for (let i = 0; i < cupboardFoodList.length; i++){
            cupboardListToShow = cupboardListToShow + cupboardFoodList[i]+ "<br>";
            document.getElementById("show_listCupboard").innerHTML = cupboardListToShow;
        }
        cupboardIsChecked = true;
    }
}
 function getFoodFromKate() {
     if (userRequest === "1"){
         orderedDish = prompt("Чего бы ты хотел поесть?");
         refrigeratorFoodList.indexOf(orderedDish);
         getResultOrderedDish();

     }
 }

 function getResultOrderedDish() {
    if (refrigeratorFoodList.indexOf(orderedDish)){
        alert("Вот" + orderedDish + ", приятного аппетита !");
    }else if (orderedDish === false){
         alert("Такого блюда нет");
    }
 }