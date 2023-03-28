
const loginForm = document.getElementById('login-form');
const forgotPassword = document.getElementById('pass');

loginForm.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the password input element
  const passwordInput = document.getElementById('password');
  const phoneNumber = document.getElementById('phone');

  // check if the password matches the specified value
  if (passwordInput.value === '23081997' && phoneNumber.value == '9877040749') {
    window.location.href="homePage.html"
  } else {
    // if the password doesn't match, display an error message
    alert("Invalid UserName Password")
  }
});

forgotPassword.addEventListener('dblclick', function(event) {
  let email = prompt("Enter email_ID :: ");
  if(email === 'durga12q@gmail.com'){
    alert("Password: '23081997'")
  }
  else{
    alert("Incorrect EmailID")
  }
});