/* // Function to open the modal */
function openModal() {
  var modal = document.getElementById('scoreModal');
  var scoreValue = document.getElementById('scoreValue');

  /* // Retrieve the score from local storage */
  var score = localStorage.getItem('score');

  /* // Update the modal content with the score */
  scoreValue.textContent = 'Score: ' + score;
  

  /* // Display the modal */
  modal.style.display = 'block';
}

/* // Function to close the modal */
function closeModal() {
  var modal = document.getElementById('scoreModal');
  window.location="result.html"

  

  /* Hide the modal */
  modal.style.display = 'none';
}

// Call openModal function when the page loads you can call it based on your application logic
window.onload = function () {
  openModal();
};  