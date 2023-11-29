const allInputs = document.querySelectorAll("input");
const phoneInput = document.getElementById("phone");
const emailInput = document.querySelector("input[type=email]");
const passwordInput = document.querySelector("input[type=password]");
const confirmPasswordInput = document.getElementById("pass2");
const usernameInput = document.getElementById("uname");

allInputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    const errorBoard = event.target.nextElementSibling;
    validateRequiredField(event.target.value, errorBoard);
  });
});

emailInput.addEventListener("blur", (event) => {
  const errorBoard = event.target.nextElementSibling;
  validateRequiredField(event.target.value, errorBoard);
  validateEmail(event.target.value, errorBoard);
});

phoneInput.addEventListener("blur", (event) => {
  const errorBoard = event.target.nextElementSibling;
  validateRequiredField(event.target.value, errorBoard);
  validatePhoneNumber(event.target.value, errorBoard);
});

usernameInput.addEventListener("blur", (event) => {
  const errorBoard = event.target.nextElementSibling;
  validateRequiredField(event.target.value, errorBoard);
  validateUsername(event.target.value, errorBoard);
});

passwordInput.addEventListener("blur", (event) => {
  const errorBoard = event.target.nextElementSibling;
  validateRequiredField(event.target.value, errorBoard);
  validatePassword(event.target.value, errorBoard);
  validateStrongPassword(event.target.value, errorBoard);
});

confirmPasswordInput.addEventListener("blur", (event) => {
  const errorBoard = event.target.nextElementSibling;
  validateRequiredField(event.target.value, errorBoard);
  validateMatchingPasswords(passwordInput.value, event.target.value, errorBoard);
});

function validateRequiredField(value, errorBoard) {
  if (value.trim() === "") {
    errorBoard.innerHTML = "This field is required!";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validateEmail(email, errorBoard) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    errorBoard.innerHTML = "Enter a valid email address";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validatePhoneNumber(phone, errorBoard) {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    errorBoard.innerHTML = "Enter a valid phone number!";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validateUsername(username, errorBoard) {
  const usernameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
  if (!usernameRegex.test(username)) {
    errorBoard.innerHTML = "Enter a valid username!";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validatePassword(password, errorBoard) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
  if (!passwordRegex.test(password)) {
    errorBoard.innerHTML = "Enter a valid password";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validateStrongPassword(password, errorBoard) {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!strongPasswordRegex.test(password)) {
    errorBoard.innerHTML = "Password should be strong (at least 8 characters, including uppercase, lowercase, number, and special character)";
  } else {
    errorBoard.innerHTML = "";
  }
}

function validateMatchingPasswords(password1, password2, errorBoard) {
  if (password1 !== password2) {
    errorBoard.innerHTML = "Passwords must match";
  } else {
    errorBoard.innerHTML = "";
  }
}



// The validate function should return true if the form is valid and false otherwise.
function validate() {
  const allInputs = document.querySelectorAll("input");
  let isValid = true;

  allInputs.forEach((input) => {
    const errorBoard = input.nextElementSibling;
    const value = input.value.trim();

    // Validate required field
    validateRequiredField(value, errorBoard);

    // Validate email
    if (input.type === "email") {
      validateEmail(value, errorBoard);
    }

    // Validate phone number
    if (input.id === "phone") {
      validatePhoneNumber(value, errorBoard);
    }

    // Validate username
    if (input.id === "uname") {
      validateUsername(value, errorBoard);
    }

    // Validate password
    if (input.type === "password") {
      validatePassword(value, errorBoard);
      validateStrongPassword(value, errorBoard);
    }
  });

  // Validate matching passwords
  const passwordInput = document.querySelector("input[type=password]");
  const confirmPasswordInput = document.getElementById("pass2");
  const passwordMatchErrorBoard = confirmPasswordInput.nextElementSibling;
  validateMatchingPasswords(passwordInput.value, confirmPasswordInput.value, passwordMatchErrorBoard);

  // Check if any error messages are present
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((error) => {
    if (error.innerHTML !== "") {
      isValid = false;
    }
  });

  // If the form is valid, show a confirmation message
  if (isValid) {
    alert("Form submitted successfully!");
  }

  return isValid;
}
