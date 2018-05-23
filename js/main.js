console.log('test')




var teenCount = 0;
var percCount = 0;
var imgNumber = 1;
var backgroundImages = ['http://www.musictruth.com/wp-content/uploads/2016/11/sunset.jpg','https://hdwallsource.com/img/2014/10/ocean-sunset-35994-36819-hd-wallpapers.jpg',]


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

function imageIndex(option) {
	console.log("imgIndex here");
	if(option === 'left') {
		showImages(imgNumber -= 1);
	} else if(option === 'right') {
		showImages(imgNumber += 1);
	} else {
		showImages(imgNumber);
	}
}

imageIndex(0);

function showImages(check) {
	var temp = document.getElementById('title');
	
	if(check > backgroundImages.length) {
		imgNumber = 1;
	} else if( check === 0) {
		imgNumber = backgroundImages.length;
	}
	console.log(imgNumber);
	
	temp.style.backgroundImage = "url(" + backgroundImages[imgNumber-1] + ")";
	
}