let generalList =  [ "вася", "петя", "маша", "даша", "женя"];
let userName;
let findName = "";

function findNameInList(){
    userName = document.getElementById("name_user").value ;
  for (let i = 0; i < generalList.length; i++){
      findName = "";
      findName = findName + generalList[i];
      // console.log(generalList[i]);
      if (userName === findName){
          console.log(userName + " проходи!");
      }else {
          console.log("Проваливай!")
      }
  }

}
