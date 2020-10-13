"use strict";


let userRequest;
let refrigeratorFoodList = ["макароны", "салат", "фрукты", "сок", "бутерброд"];
let gasStoveFoodList = ["жаренные бёдрышка", "суп", "борщ", "пюре"];
let cupboardFoodList = ["сухарики", "чипсы", "печенье", "шоколад"];
let refrigeratorIsChecked = false;
let gasStoveIsChecked = false;
let cupboardIsChecked = false;

let refrigeratorListToShow;
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
            orderedDish = prompt("Прийдется поискать. Какое блюдо ты хочешь?");
            getResultOrderedDish();
            break;
        default:
            console.log("There can be no other options");
    }

}

function findFoodInRefrigerator() {
    refrigeratorListToShow = '';
    for (let i = 0; i < refrigeratorFoodList.length; i++) {
        refrigeratorListToShow = refrigeratorListToShow + refrigeratorFoodList[i] + "<br>";
    }

    if (refrigeratorIsChecked === false) {
        if (other_list !== undefined && other_list.length > 0){
            refrigeratorListToShow = refrigeratorListToShow + other_list + "<br>";
        }
        document.getElementById('show_listRefrigerator').innerHTML = refrigeratorListToShow;
        refrigeratorIsChecked = true;
    }

}

function findFoodInGasStove() {
    if (gasStoveIsChecked === false) {
        for (let i = 0; i < gasStoveFoodList.length; i++) {
            GasStoveListToShow = GasStoveListToShow + gasStoveFoodList[i] + "<br>";
            document.getElementById("show_listGasStove").innerHTML = GasStoveListToShow;
        }
        gasStoveIsChecked = true;
    }
}

function findFoodInCupboard() {
    if (cupboardIsChecked === false) {
        for (let i = 0; i < cupboardFoodList.length; i++) {
            cupboardListToShow = cupboardListToShow + cupboardFoodList[i] + "<br>";
            document.getElementById("show_listCupboard").innerHTML = cupboardListToShow;
        }
        cupboardIsChecked = true;
    }
    getFoodInRefrigerator();
}


function getResultOrderedDish() {
    if (refrigeratorFoodList.indexOf(orderedDish) >= 0) {
        alert("Вот" + " " + orderedDish + ", приятного аппетита !");
    } else if (gasStoveFoodList.indexOf(orderedDish) >= 0) {
        alert("Вот" + " " + orderedDish + ", еще тепленькое !");
    } else if (cupboardFoodList.indexOf(orderedDish) >= 0) {
        alert("Вот" + " " + orderedDish + ", твой легкий перекус");
    } else {
        alert("Такого блюда у нас нет");
    }
}

function addFoodInRefrigerator() {
    newRefrigeratorFood = prompt("Что вы хотите добавить в холодильник?");
    refrigeratorFoodList.push(newRefrigeratorFood);
    refrigeratorIsChecked = false;
}

function getFoodInRefrigerator() {
    refrigeratorFoodList.pop();
    refrigeratorIsChecked = false;
}

function deleteFoodInRefrigerator() {
    console.log(refrigeratorFoodList);
    refrigeratorFoodList.splice(1, 2, "компот", "рыба");
    console.log(refrigeratorFoodList);
    refrigeratorIsChecked = false;
}
let other_list;
function addNewArray() {
    other_list = refrigeratorFoodList.concat([NaN, 9]);
    // console.log(addSomething);
    refrigeratorIsChecked = false;
}

// refrigeratorFoodList.forEach(console.log);

// refrigeratorFoodList.forEach(function (item, index, array) {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
// });

let healthy_food = [];
let testy_food = [];
let list_healthy;
let list_testy;

function use_for_each() {

    refrigeratorFoodList.forEach(function (dash) {
        if (dash === 'макароны' || dash === 'бутерброд') {
            testy_food.push(dash);
        } else healthy_food.push(dash)
    });
    // console.log(`Перечень здоровой еды в холодильнике:${healthy_food}\nПеречень такой себе еды в холодильнике:${testy_food}`);
    list_healthy = 'Перечень здоровой еды в холодильнике:'+ " " + healthy_food;
    document.getElementById("healthy_list_food").innerHTML = list_healthy;
    list_testy = 'Перечень такой себе еды в холодильнике:'+ " "+ testy_food;
    document.getElementById("testy_list_food").innerHTML = list_testy;
}
let gas_stone_is_clean = false;



function cleanGas_Stone() {
if (gas_stone_is_clean === false){
    console.log('I cleaning gas stone!');
    gas_stone_is_clean = true;
}
}

function cookingBorscht() {
console.log(`i dirtied the stove when cooked the borscht!`);
gas_stone_is_clean = false;
}


