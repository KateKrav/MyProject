let griffindor = ["Альбус", "Гарри", "Гермиона", "Рон", "Хагрид"];
let slytherin = ["Суверус", "Малфой", "Волдемор"];
let ravenclaw = ["Седрик", "Полумна", "Миртл"];
let griffindor_decision = 0;
let slitherin_decision = 0;
let ravenclaw_decision = 0;
let check1;
let check2;
let check3;
let check4;
let check5;
let check6;

let featureGriffindor;
let featureSlytherin;
let featureRavenclaw;
let features;
// console.log(featureGriffindor);
let newUserName;
let check;

function get_values() {
    check1 = document.getElementById("1poi");
    check2 = document.getElementById("2poi");
    check3 = document.getElementById("3poi");
    check4 = document.getElementById("4poi");
    check5 = document.getElementById("5poi");
    check6 = document.getElementById("6poi");
    featureGriffindor = [check1.checked, check2.checked];
    featureSlytherin = [check3.checked, check4.checked];
    featureRavenclaw = [check5.checked, check6.checked];
    features = [featureGriffindor, featureSlytherin, featureRavenclaw];


}


function findYourFaculty() {
    for (let i = 0; i < features.length; i++) {
for (let j = 0; j < features[i].length; j++){
    if (featureGriffindor[j]) {
        griffindor_decision = griffindor_decision + 1;
    } else if (featureSlytherin[j]) {
        slitherin_decision = slitherin_decision + 1;
    } else if (featureRavenclaw[j]) {
        ravenclaw_decision = ravenclaw_decision + 1;
    }
}

    }
}

function addNewStudent() {
    get_values();
    findYourFaculty();
    introduction();
    // check = document.getElementById("1poi");
    //  if (check.checked === true){
    //      console.log("11111")
    //  }
}


//гриф.=1poi,4poi; слиз= 7poi, когт= 3poi,5poi;
function test() {
    console.dir(document.body);
}

function introduction() {
if (griffindor_decision > slitherin_decision && griffindor_decision > ravenclaw_decision){
    console.log("вы приняты в гриффиндор!")
}

else if (slitherin_decision > griffindor_decision && slitherin_decision > ravenclaw_decision){
    console.log("вы приняты в слизерин!")
}

else if (ravenclaw_decision > griffindor_decision && ravenclaw_decision > slitherin_decision){
    console.log("вы приняты в когтевран!")
}

else if (griffindor_decision === slitherin_decision){
    console.log("вы можете выбрать между гриффиндомром и слизерином")
}
else if (griffindor_decision === ravenclaw_decision){
    console.log("вы можете выбрать между гриффиндомром и когтевраном")
}

else if (slitherin_decision === ravenclaw_decision){
    console.log("вы можете выбрать между слизерином и когтевраном")
}

}