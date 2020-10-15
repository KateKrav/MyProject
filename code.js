let generalList = ["вася", "петя", "маша", "даша", "женя"];
let blackList = ["фома", "гия", "жора"];
let listForbes = [ "хаби", "бузо","крид"];
let userName;
let decision = false;
let message;

function allListGuests() {
    userName = document.getElementById("name_user").value;
    for (let i = 0; i < generalList.length; i++) {
        if (userName === generalList[i]) {
            decision = 1;
        }else if (userName !== generalList[i]){
            for (let j = 0; j < blackList.length; j++){
                if (userName ===blackList[j]){
                    decision = 2;
                }
            }

        }else{
            for (let l = 0; l < listForbes; l++){
                if (userName === listForbes[l]){
                    decision = 3;
                }
            }

        }
        }


    // for(let i = 0; i< blackList.length; i++){
    //     if (userName === blackList[i]){
    //         decision = true;
    //     }
    // }


    //
    // if (decision === true) {
    //     message = ", ПРОХОДИ"
    // }
    // document.getElementById("showMessage").innerHTML = userName + message;

    // switch (decision) {
    //     case : 1
    //
    // }
}

