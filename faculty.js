let griffindor = [ "Альбус", "Гарри", "Гермиона", "Рон"];
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

 let faculty;
let facultyList = false;
let listStudent = true;

function scanFaculty() {
    if (facultyList === false){
        for (let i = 0; i < hogwartsFaculty.length; i++) {
            if (listStudent===true){
                for (let j = 0; j < hogwartsFaculty.length; j++){
                    console.log(hogwartsFaculty[i]+[j])
                }
            }


        }
    }
    facultyList = true;
}