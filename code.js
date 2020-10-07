"use strict";


let userRequest;
let refrigeratorFoodList = ["макароны", "салат", "фрукты", "сок", "бутерброт"];
let gasStoveFoodList = ["жаренные бёдрышка", "суп", "борщ", "пюре"];
let cupboardFoodList = ["сухарики", "чипсы", "печенье", "шоколад"];
let refrigeratorIsChecked = false;
let gasStoveIsChecked = false;
let cupboardIsChecked = false;

let refrigeratorListToShow = "";
let GasStoveListToShow = "";
let cupboardListToShow = "";

let orderedDish;
let newRefrigeratorFood;





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
            orderedDish = prompt( "Прийдется поискать. Какое блюдо ты хочешь?");
            getResultOrderedDish();
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


 function getResultOrderedDish() {
    if (refrigeratorFoodList.indexOf(orderedDish) >= 0){
        alert("Вот" + " " + orderedDish + ", приятного аппетита !");
    }else if (gasStoveFoodList.indexOf(orderedDish)>= 0) {
        alert("Вот" + " " + orderedDish + ", еще тепленькое !");
    }else if (cupboardFoodList.indexOf(orderedDish) >= 0){
        alert("Вот" + " " + orderedDish + ", твой легкий перекус");
    }
    else {
         alert("Такого блюда у нас нет");
    }
 }

 function addFoodInRefrigerator() {
     newRefrigeratorFood = prompt("Что вы хотите добавить в холодильник?");
     refrigeratorFoodList.push(newRefrigeratorFood);
}

function getFoodInRefrigerator() {
    refrigeratorFoodList.pop();
}