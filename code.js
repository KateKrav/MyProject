let generalList = ["вася", "петя", "маша", "даша", "женя"];
let userName;
let decision = false;

function findNameInList() {
    userName = document.getElementById("name_user").value;
    for (let i = 0; i < generalList.length; i++) {

        if (userName === generalList[i]) {
            decision = true;
            // console.log(decision);
        }
    }
    let message = ", УХОДИ";
    if (decision === true) {
        message = ", ПРОХОДИ"
    }
    document.getElementById("showMessage").innerHTML = userName + message;
}
