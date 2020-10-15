let generalList =  [ "вася", "петя", "маша", "даша", "женя"];
let userName;
let findName = "";
let nameOfList;
let messageUser;
let warning;

function findNameInList(){
    userName = document.getElementById("name_user").value ;
  for (let i = 0; i < generalList.length; i++){
      findName = "";
      findName = findName + generalList[i];

      if (userName === findName) {
          messageUser = userName + " проходи!";
          document.getElementById("showMessage").innerHTML = messageUser;

      }
  }

  if (userName!== findName){
      warning = "Проваливай";
      document.getElementById("showMessage").innerHTML = warning;
  }
}
