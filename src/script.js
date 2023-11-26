// selecting our elements
var twitterCount = document.getElementsByClassName("twitter-Count")[0];
var youtubeCount = document.getElementsByClassName("youtube-Count")[0];
var facebookCount = document.getElementsByClassName("facebook-Count")[0];
// our functions
// twitter increment function
// creating global varibale
var twCounter = 0;
var twitterFunc = function () {
    // our interval
    var twitterInv = setInterval(function () {
        twCounter += 120;
        twitterCount.textContent = "".concat(twCounter);
        // if value equal then stop interval
        if (twCounter === 12000) {
            clearInterval(twitterInv);
        }
    }, 25);
};
// youtube increment function
// creating global varibale
var ytCounter = 0;
var youtubeFunc = function () {
    // our interval
    var youtubeInv = setInterval(function () {
        ytCounter += 100;
        youtubeCount.textContent = "".concat(ytCounter);
        // if value equal then stop interval
        if (ytCounter === 5000) {
            clearInterval(youtubeInv);
        }
    }, 25);
};
// facebook increment function
// creating global varibale
var fbCounter = 0;
var facebookFunc = function () {
    // our interval
    var facebookInv = setInterval(function () {
        fbCounter += 100;
        facebookCount.textContent = "".concat(fbCounter);
        // if value equal then stop interval
        if (fbCounter === 7500) {
            clearInterval(facebookInv);
        }
    }, 25);
};
// our eventlisnters on load fire this function
window.addEventListener("load", twitterFunc);
window.addEventListener("load", youtubeFunc);
window.addEventListener("load", facebookFunc);
