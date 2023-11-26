// selecting our elements
const twitterCount = document.getElementsByClassName("twitter-Count")[0] as any;
const youtubeCount = document.getElementsByClassName("youtube-Count")[0] as any;
const facebookCount = document.getElementsByClassName(
  "facebook-Count"
)[0] as any;

// our functions

// twitter increment function

// creating global varibale
let twCounter: number = 0;

const twitterFunc = () => {
  // our interval
  const twitterInv = setInterval(() => {
    twCounter += 100;
    twitterCount.textContent = `${twCounter}`;
    // if value equal then stop interval
    if (twCounter === 12000) {
      clearInterval(twitterInv);
    }
  }, 25);
};

// youtube increment function

// creating global varibale
let ytCounter: number = 0;

const youtubeFunc = () => {
  // our interval
  const youtubeInv = setInterval(() => {
    ytCounter += 100;
    youtubeCount.textContent = `${ytCounter}`;
    // if value equal then stop interval
    if (ytCounter === 5000) {
      clearInterval(youtubeInv);
    }
  }, 50);
};
// facebook increment function

// creating global varibale
let fbCounter: number = 0;

const facebookFunc = () => {
  // our interval
  const facebookInv = setInterval(() => {
    fbCounter += 125;
    facebookCount.textContent = `${fbCounter}`;
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
