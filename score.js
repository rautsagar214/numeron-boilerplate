// Iteration 5: Store the player score and display it on the game over screen
var PlayAgain = document.getElementById("play-again-button")
var ScoreBox = document.getElementById("score-box")
var scoreee = localStorage.getItem("scoore")
ScoreBox.innerHTML=scoreee
 
PlayAgain.onclick=()=>{
    window.location.href="./index.html"
}
