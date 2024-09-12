// Function to open a modal by its ID
function openModal(modalId) {
  // Get the modal by ID and display it
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "block";
  }
}

// Function to close a modal by its ID
function closeModal(modalId) {
  // Get the modal by ID and hide it
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "none";
  }
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
}
