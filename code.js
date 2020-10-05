"use strict";


let getStatus;
let refrigerator = ["макароны", "салат", "фрукты", "сок","бутерброт"];
let gasStove = ["жаренная курочка", "суп", "борщ", "пюре"];
let cupboard= ["сухарики", "чипсы", "печенье", "шоколад"];
let i;
let str = ' ';
let str1 = ' ';
let str2 = ' ';
let open_list = " ";



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
    for (i = 0; i < refrigerator.length; i++){
        if (refrigerator[i]!==undefined){
            str += refrigerator[i]+'<br>';
            document.getElementById("show_listRefrigerator").innerHTML = str;
        }
    }
    end_of_list();
    }

function end_of_list() {
    if (open_list===false){
    } str = open_list;
    str1 = open_list;
    str2 = open_list;
}


function findFoodInGasStove () {
    for (i = 0; i < gasStove.length; i++){
        if (gasStove[i]!==undefined){
            str1 += gasStove[i]+'<br>';
            document.getElementById("show_listGasStove").innerHTML = str1;
        }
    }
    end_of_list();
}

function findFoodInCupboard () {
    for (i = 0; i < cupboard.length; i++){
        if (cupboard[i]!==undefined){
            str2 += cupboard[i]+'<br>';
            document.getElementById("show_listCupboard").innerHTML = str2;
        }
    }
    end_of_list();
    }
