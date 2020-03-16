'use strict'
var today = new Date();
// 
var datevar = (today.getMonth() + 1) + " " + today.getDate() + " " + today.getFullYear();
document.getElementById('today').innerHTML = datevar;

var toDo = [];
function ToDoCon(name, date) {
    this.name = name;
    this.date = date;
    toDo.push(this);
}
ToDoCon.prototype.deleteToDo = function () {
    toDo.pop(this);
}
var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var done = event.target.done.value;
    var dataaa = event.target.dataaa.value;
    var user = new ToDoCon(done, dataaa);
    updateToDo();
    render();
})
function updateToDo() {
    var userString = JSON.stringify(toDo);
    localStorage.setItem('toDoList', userString);

}
function getToDo() {
    var userString = localStorage.getItem('toDoList');
    if (toDoList) {
        toDo = JSON.parse(userString);
        render();
    }
}

function render() {
    var tableE1 = document.getElementById('table');
    tableE1.innerHTML = "";
    for (var i = 0; i < toDo.length; i++) {
        var trE1 = document.createElement('tr');
        tableE1.appendChild(trE1);
        var tdE1 = document.createElement('td');
        trE1.appendChild(tdE1);

        var pE1 = document.createElement('p');
        tdE1.appendChild(pE1);
        pE1.textContent = (i + 1) + ". " + toDo[i].name;
        var pE2 = document.createElement('p');
        tdE1.appendChild(pE2);
        pE2.textContent = toDo[i].date;
        pE2.setAttribute('class', 'date');


        tdE1.setAttribute('class', 'first');
        var tdE2 = document.createElement('td');
        trE1.appendChild(tdE2);

        var butE1 = document.createElement('button');
        tdE2.appendChild(butE1);
        butE1.textContent = "X";
        butE1.setAttribute('class', 'second');
        butE1.setAttribute("id",i);
        butE1.addEventListener('click', removeItem);

    }


}

function removeItem(event) {
    var id = event.target.id;
    console.log("Im here");
    console.log("id = " + id);
    toDo.splice(id, 1);
    updateToDo()
    render();
}

