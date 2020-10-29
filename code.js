let listChildren = ["Вася","Маша", "Саша", "Паша", "Софи", "Маша", "Гоша", "Марго", "Макс", "Аня",];

let teamOne = [];
let teamTwo = [];

function addInTeamOne() {
    teamOne = listChildren.splice(0, 1);
    document.getElementById("team_1").innerHTML = teamOne + ' в команде 1';
}
function addInTeamTwo() {
    teamTwo = listChildren.splice(0, 1);
    document.getElementById("team_2").innerHTML = teamTwo + ' в команде 2';
}

