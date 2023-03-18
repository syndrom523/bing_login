
// Get the form element
var form = document.getElementById("login-form");

// Get the input elements
var username = document.getElementById("uname");
var password = document.getElementById("psw");

// Get the error message element
var error = document.getElementById("error");

// Add an event listener for form submission
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of form submission
  event.preventDefault();

  // Validate the user input
  if (username.value == "" || password.value == "") {
    // Display an error message if any field is empty
    error.textContent = "Please fill out all fields.";
    error.style.color = "red";
  } else {
    // Send an AJAX request to the server with the user input
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/action_page.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("uname=" + username.value + "&psw=" + password.value);

    // Handle the response from the server
    xhr.onload = function() {
      if (xhr.status == 200) {
        // Display a success message if the server returns OK status
        error.textContent = "Login successful!";
        error.style.color = "green";
      } else {
        // Display an error message if the server returns any other status
        error.textContent = "Login failed: " + xhr.statusText;
        error.style.color = "red";
      }
    };
  }
});
