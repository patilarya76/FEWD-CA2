var score=localStorage.getItem("score")
//assinging phrases
var winningPhrases=[
    "You Won!!, Keep going."
  ];
  
  var loosingPhrases=[
    "Game Over!, Better luck next time"
  ];
  
  //function to get the phrases
  function getRandomPhrase(array){
    var randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
    // location.href="modal.html"
  }
  
  //phrases
  function getResultText(score) {
    if (score >= 70) {
        var result = getRandomPhrase(winningPhrases);
        console.log("Winning phrase:", result);
        return result;
    } else {
        var result = getRandomPhrase(loosingPhrases);
        console.log("Losing phrase:", result);
        return result;
    }
}

/* Function to open the modal */
function openModal() {
    var modal = document.getElementById('scoreModal');
    var resultTextElement = document.getElementById('resultText');

    /* Retrieve the score from local storage */
    var score1 = localStorage.getItem('score');
    var nickname = localStorage.getItem('nickname');
    var playername = localStorage.getItem('playername');

    /* Update the modal content with the score */
    scoreValue.textContent = 'hello, '+ playername +' ('+nickname+') ' +'Score: ' + score;
    resultTextElement.textContent = getResultText(score);

console.log(nickname)

    /* Display the modal */
    modal.style.display = 'block';
   
}


/* Function to close the modal */
function closeModal() {
    var modal = document.getElementById('scoreModal');
    window.location = "result.html";

    /* Hide the modal */
    modal.style.display = 'none';
}

// Call openModal function when the page loads
window.onload = function () {
    openModal();
};

