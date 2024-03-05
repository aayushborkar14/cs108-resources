function validateName() {
  /*Check whether name is entered or not.
    Throw an error if name field is empty.
    Error message will be "Full name is required."*/
  const name = document.getElementById("fullName").value;
  if (name == "") throw new Error("All fields are required");
}

function validateEmail() {
  /*Check whether email is valid or not, as per the rules stated in problem statement.
    Use regex and test() function to validate the email address.
    Throw an error if email is invalid.
    Error message will be "Invalid Email Address."*/
  const re = /^[a-z1-9]+@[a-z]+\.[a-z]{3}$/;
  const email = document.getElementById("email").value;
  if (email == "") throw new Error("All fields are required");
  if (!re.test(email)) throw new Error("Invalid Email Address");
}

function validatePassword() {
  /*Check whether password is made of atleast 9 characters.
    /If not, throw an error.
    Error message will be "Password must be at least 9 characters"*/
  const password = document.getElementById("password").value;
  if (password == "") throw new Error("All fields are required");
  if (password.length < 9)
    throw new Error("Password must be at least 9 characters");
}

function ConfirmPassword() {
  /*Check whether the re-entered password is same as the password entered first.
    If not, throw an error.
    Error message will be "Passwords do not match"*/
  const pass = document.getElementById("password").value;
  const con = document.getElementById("confirmPassword").value;
  if (pass != con) throw new Error("Passwords do not match");
}

function validateForm() {
  try {
    /*Check whether all fields are entered or not*/
    //Your code here

    validateName();
    validateEmail();
    validatePassword();
    ConfirmPassword();

    // Additional validation rules can be added here

    //After checking all the rules, if the program throws no error, it will reach this part of code.
    //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
    //Your code here
    document.getElementById("feedback").innerHTML =
      `<span class="success">Registration successful!</span>`;
  } catch (error) {
    //After checking all the rules, if the program throws an error, it will reach this part of code.
    //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
    //Your code here
    document.getElementById("feedback").innerHTML =
      `<span class="error">${error}.</span>`;
  }
}

