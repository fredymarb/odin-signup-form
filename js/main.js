function validatePasswords(event) {
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  if (password !== confirmPassword) {
    event.preventDefault();
    alert("passwords do not match!");
  }
}

const createAccount = document.querySelector("#submit-btn");
createAccount.addEventListener("click", e => {
  validatePasswords(e);
});