"use strict";

let refrigeratorFoodList = ["макароны", "салат", "фрукты", "сок", "бутерброд"];
let refrigeratorIsChecked = false;
let refrigeratorListToShow;


function generateList() {
    refrigeratorListToShow = "";
    for (let i = 0; i < refrigeratorFoodList.length; i++){
        refrigeratorListToShow = refrigeratorListToShow + refrigeratorFoodList[i] + "<br>";
    }
}

function addOther_itemsToList() {
    if (other_list !== undefined && other_list.length > 0){
        refrigeratorListToShow = refrigeratorListToShow + other_list + "<br>";
    }

}
function printList() {
    if ( refrigeratorIsChecked === false){
        document.getElementById("show_listRefrigerator").innerHTML = refrigeratorListToShow;
        refrigeratorIsChecked = true;
    }
}

function findFoodInRefrigerator() {
    generateList();
    addOther_itemsToList();
    printList();
}

let other_list;
function addNewArray() {
    other_list = refrigeratorFoodList.concat([NaN, 9]);
    refrigeratorIsChecked = false;
}