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
let listGriffindor = false;
let listSlihterin = false;
let listRavenclaw = false;
let showlistGriffindor = "";
let showlistSlihterin = "";
let showlistRavenclaw= "";
let searchName;
let hogwartsFaculty = [ griffindor, slytherin, ravenclaw];




function listGriffindorStudent() {
    if (listGriffindor === false){
        for ( let i = 0; i < griffindor.length; i++){
            showlistGriffindor = showlistGriffindor + griffindor[i] + "<br>";
           document.getElementById("list1").innerHTML = showlistGriffindor;
        }
        listGriffindor = true;
    }

}
function listSlytherinStudent() {
    if (listSlihterin === false){
        for (let i = 0; i< slytherin.length; i++){
           showlistSlihterin = showlistSlihterin + slytherin[i] + "<br>" ;
           document.getElementById("list2").innerHTML = showlistSlihterin;
        }
        listSlihterin = true;
    }

}
function listRavenclawStudent() {
    if (listRavenclaw === false){
        for (let i = 0; i < ravenclaw.length; i++){
            showlistRavenclaw = showlistRavenclaw + ravenclaw[i]+ "<br>";
            document.getElementById("list3").innerHTML = showlistRavenclaw;
        }
        listRavenclaw = true;
    }
}

let result = false;

function getName() {
    searchName = document.getElementById("inputSearch").value;
}

function notFoundName() {
    if (searchName){
        document.getElementById("hidden_message").hidden = false;
        document.getElementById("GET_message").innerHTML = "Имя не найдено";
    }
}

function scanFaculty() {
    getName();
    for (let i = 0; i < hogwartsFaculty.length; i++) {
        for (let j = 0; j < hogwartsFaculty[i].length; j++) {
            if (hogwartsFaculty[i][j] === searchName) {
                getMessage();
                // console.log(searchName + ' учится здесь');
                result = true;

            }notFoundName();

        }
    }

}

function getMessage() {
    document.getElementById("hidden_massage").hidden = false;
    document.getElementById("GET_massage").innerHTML = searchName + ' учится здесь';
}



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


let newStudent;
function getNewNameStudent() {
    newStudent = document.getElementById("enterName").value;

}