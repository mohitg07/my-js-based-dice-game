// I wish that if my website loads for the first time then my javascript file should not run but if it
// loads more than once then my javascriot file works accordingly and show me the results

// I have taken the below code from stack overflow in order to manage my reloadCount
var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
  state.reloadCount = ++reloadCount;
  history.replaceState(state, null, document.URL);
} else if (reloadCount) {
  delete state.reloadCount;
  reloadCount = 0;
  history.replaceState(state, null, document.URL);
}

// from here, I have applied my own logic
if (reloadCount >= 1) {

  // generating random number for dice 1 and set image of that dice accordingly
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  if (randomNumber1 === 1) {
    document.getElementById("img1").src = "images/dice1.png";
  } else if (randomNumber1 === 2) {
    document.getElementById("img1").src = "images/dice2.png";
  } else if (randomNumber1 === 3) {
    document.getElementById("img1").src = "images/dice3.png";
  } else if (randomNumber1 === 4) {
    document.getElementById("img1").src = "images/dice4.png";
  } else if (randomNumber1 === 5) {
    document.getElementById("img1").src = "images/dice5.png";
  } else {
    document.getElementById("img1").src = "images/dice6.png";
  }

  // generating random number for dice 2 and set image of that dice accordingly
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if (randomNumber2 === 1) {
    document.getElementById("img2").src = "images/dice1.png";
  } else if (randomNumber2 === 2) {
    document.getElementById("img2").src = "images/dice2.png";
  } else if (randomNumber2 === 3) {
    document.getElementById("img2").src = "images/dice3.png";
  } else if (randomNumber2 === 4) {
    document.getElementById("img2").src = "images/dice4.png";
  } else if (randomNumber2 === 5) {
    document.getElementById("img2").src = "images/dice5.png";
  } else {
    document.getElementById("img2").src = "images/dice6.png";
  }

  // now comparing random numbers of both the dices and display message accordingly
  if (randomNumber1 === randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🚩";
  }

}
