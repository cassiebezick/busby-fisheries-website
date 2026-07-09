function getFormData() {
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const inquiry = document.getElementById('inquiry').value;
const message = document.getElementById('message').value;

console.log({ firstname, lastname, email, inquiry, message});
}