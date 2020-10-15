let generalList =  [ "вася", "петя", "маша", "даша", "женя"];
let userName;
let findName = "";
let nameOfList;
let decision;
let warning;

function findNameInList(){
    userName = document.getElementById("name_user").value ;
  for (let i = 0; i < generalList.length; i++){

      if (userName === generalList[i]) {
          decision = ", проходи!";
          console.log(decision);
      }
      else decision = ", проваливай!"
      console.log(decision);
  }

    document.getElementById("showMessage").innerHTML = userName + decision;

}
