var score=localStorage.getItem("score")



// var length = sum;
// if (length !== 0) {
    
//     document.getElementById("screen").innerHTML = score;
// }


/* Function to open the modal */
function openModal() {
    var modal = document.getElementById('scoreModal');
    // var scoreValue = document.getElementById('scoreValue');

    /* Retrieve the score from local storage */
    var score1 = localStorage.getItem('score');

    /* Update the modal content with the score */
    scoreValue.textContent = 'Score: ' + score;

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