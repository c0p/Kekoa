var teenCount = 0;
var percCount = 0;
var imgNumber = 1;
var backgroundImages = ['http://www.musictruth.com/wp-content/uploads/2016/11/sunset.jpg', 'https://hdwallsource.com/img/2014/10/ocean-sunset-35994-36819-hd-wallpapers.jpg', ]
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

$('#fullpage').fullpage({
    sectionsColor: ['white', 'white', 'white', 'white'],
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Welcome To Kekoa', 'Our Mission', 'the problem', 'statistic', 'social media', 'more information'],


    'afterLoad': function (anchorLink, index) {
        if (index == 4) {
            setInterval(function () {
                statCount();
            }, 20);

            setInterval(function () {
                addPeople();
            }, 50);

            setInterval(function () {
                percentCount();
            }, 70);

        }
    },

});

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}



function imageIndex(option) {
    console.log("imgIndex here");
    if (option === 'left') {
        showImages(imgNumber -= 1);
    } else if (option === 'right') {
        showImages(imgNumber += 1);
    } else {
        showImages(imgNumber);
    }
}

imageIndex(0);

function showImages(check) {
    var temp = document.getElementById('title');

    if (check > backgroundImages.length) {
        imgNumber = 1;
    } else if (check === 0) {
        imgNumber = backgroundImages.length;
    }
    console.log(imgNumber);

    temp.style.backgroundImage = "url(" + backgroundImages[imgNumber - 1] + ")";

}