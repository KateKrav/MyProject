let generalList = ["вася", "петя", "маша", "даша", "женя"];
let blackList = ["фома", "гия", "жора"];
let userName;
let decision = false;
let message;

function findNameInList() {
    userName = document.getElementById("name_user").value;
    for (let i = 0; i < generalList.length; i++) {

        if (userName === generalList[i]) {
            decision = true;
            // console.log(decision);
        } // let message = ", УХОДИ";
        findNameInBlackList();
    }

    if (decision === true) {
        message = ", ПРОХОДИ"
    }
    document.getElementById("showMessage").innerHTML = userName + message;
}


function findNameInBlackList() {
    for(let i = 0; i< blackList.length; i++){
        if (userName === blackList[i]){
            decision = true;
            message = ", простите, мест нет"
        }

    }

}