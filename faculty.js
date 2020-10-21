let griffindor = [ "Альбус", "Гарри", "Гермиона", "Рон", "Хагрид"];
let slytherin = ["Суверус", "Малфой", "Волдемор"];
let ravenclaw = ["Седрик","Полумна","Миртл"];
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
        document.getElementById("GETmessage").innerHTML = "Имя не найдено";
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
    document.getElementById("hidden_massege").hidden = false;
    document.getElementById("GETmassege").innerHTML = searchName + ' учится здесь';
}

let newUserName;
let check;
check1 = document.getElementById("1poi");
check2 = document.getElementById("2poi");
check3 = document.getElementById("3poi");
check4 = document.getElementById("4poi");
check5 = document.getElementById("5poi");
check6 = document.getElementById("6poi");


let featureGriffindor =[check1 , check4];
let featureSlytherin =[check2 , check6];
let featureRavenclaw =[check3 , check5];

function findYourFaculty() {
    if (check1 || check4){

    }
}

function addNewStudent() {
   check = document.getElementById("1poi");
    if (check.checked === true){
        console.log("11111")
    }
}






//гриф.=1poi,4poi; слиз= 7poi, когт= 3poi,5poi;
function test() {
    console.dir( document.body);
}