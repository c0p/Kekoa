console.log('test')




var teenCount = 0;
var percCount = 0;
var peopleCount = 0;

function statCount() {
    if (teenCount < 160000) {
        teenCount += 500;
        document.getElementById('num').innerHTML = teenCount;
    }
}


function percentCount() {
    if (percCount < 56) {
        percCount++;
        document.getElementById('num2').innerHTML = percCount;
    }
}

function addPeople() {
    if (peopleCount < 140) {
        peopleCount++;
        var peopleElem = document.createElement('i');
        peopleElem.id = "people"
        peopleElem.className = "mdi mdi-human-male"
        document.getElementById('peoples').appendChild(peopleElem)

    }

}

setInterval(function () {
    statCount();
}, 20);

setInterval(function () {
    addPeople();
}, 50);

setInterval(function () {
    percentCount();
}, 70);