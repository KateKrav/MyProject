let new_arr = [ 1, "text", 20, 15];

function funPush() {
    new_arr.push("newText");
    console.log(new_arr);
}

function funPop() {
    new_arr.pop();
    console.log(new_arr);
}

function funShift() {
    new_arr.shift();
    console.log(new_arr);
}

function funUnshift() {
    new_arr.unshift("Kakulina");
    console.log(new_arr);
}

let box = ["apple", "book", "pencil","glasses", "old newspaper"];
function deleteElement() {
    box.splice(3,1);
    console.log(box);
}

function replaceElement(){
    box.splice(1, 3, "Рыба", "Носок", "12", "Лодка", "Свитер");
    console.log(box);
}

function addElements() {


}