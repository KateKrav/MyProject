let generalList =  [ "вася", "петя", "маша", "даша", "женя"];
let userName;
let findName = "";

function findNameInList(){
    userName = document.getElementById("name_user").value ;
  for (let i = 0; i < generalList.length; i++){
      // console.log(generalList[i]);
      if (userName === generalList[i]){
          console.log(userName + " проходи!");
      }else {
          console.log("Проваливай!")
      }

  }
}
