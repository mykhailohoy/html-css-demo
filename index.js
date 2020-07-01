const form = document.getElementById("form");
/* const email = document.getElementById("email");
const name = document.getElementById("name");
const request = document.getElementById("request");

email.addEventListener("blur", function() {
  console.log("it worked");
  if (!this.validity.valid) {
    
  }
})


function showBasicError(element) {
  
}

function showEmailError(element) {
  
} */

form.addEventListener("submit", function() {
  this.reset();
  alert("Thank you for submitting a request! We will contact you soon.")
})