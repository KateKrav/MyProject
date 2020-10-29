let children = ["Вася", "Маша", "Саша", "Паша", "Софи", "Маша", "Гоша", "Марго", "Макс", "Аня"];
let sortedChildrenList = children;
let teamOne = [];
let teamTwo = [];

function addInTeamOne(id) {
    teamOne.push(children[id]);
    delete children[id];
    document.getElementById("team_1").innerHTML = teamOne[teamOne.length - 1] + ' в команде 1';
    updateData();

}

function addInTeamTwo(id) {
    teamTwo.push(children.splice(id, 1));
    document.getElementById("team_2").innerHTML = teamTwo[id] + ' в команде 2';
    updateData();

}

function updateData() {
    sortChildren();
    document.getElementById("children").innerHTML = "нераспределенные дети: " + sortedChildrenList;
    document.getElementById("team1").innerHTML = "команда №1: " + teamOne;
    document.getElementById("team2").innerHTML = "команда №2: " + teamTwo;
}

function print_selection() {
    for (let i = 0; i < children.length; i++) {
        document.write(
            `
    <div>
    <p>${children[i]}</p>
    <button id="${i}" onclick="addInTeamOne(${i}); this.disabled = true; this.hidden = true"  class="btn_1">В команду 1</button>
    <button onclick="addInTeamTwo(${i})" class="btn_2">В команду 2</button>
    </div>
`
        )
    }
    updateData();
}


function sortChildren() {
    sortedChildrenList = [];
    for (let i = 0; i < children.length; i++) {
        if (children[i]) {
            sortedChildrenList.push(children[i])
        }
    }
}