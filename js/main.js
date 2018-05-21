console.log('test')




var teenCount = 0;
var percCount = 0;

function statCount() {
    if (teenCount < 160000) {
        teenCount += 250;
        document.getElementById('num').innerHTML = teenCount;
    }
}


function percentCount() {
    if (percCount < 56) {
        percCount++;
        document.getElementById('num2').innerHTML = percCount;
    }
}

setInterval(function () {
    statCount();
}, 1);

setInterval(function () {
    percentCount();
}, 70);