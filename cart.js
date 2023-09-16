let carts = [
  { qty: 0, itemName: "Earphone", price: 500 },
  { qty: 0, itemName: "camera", price: 350 },
  { qty: 0, itemName: "watch", price: 150 },
    {qty:0,itemName:"sanitizer",price:150},
    {qty:0,itemName:"phonecase",price:450},
    {qty:0,itemName:"johnson",price:560},
    {qty:0,itemName:"bag",price:320},
    {qty:0,itemName:"oil",price:480},
    {qty:0,itemName:"charger",price:390},
  ];
  
  function getRandomPrice() {
    // Generate a random price within 3 digits and not exceeding 2000
    return Math.floor(Math.random() * 600) + 600;
  }
  
  function updateTotalQuantity() {
    let totalQty = 0;
    for (let i = 0; i < carts.length; i++) {
      totalQty += carts[i].qty;
    }
    document.getElementById("total-quantity").textContent =totalQty;
  }
  
  function check(cartIndex) {
    carts[cartIndex].qty++;
    let price = getRandomPrice();
    let total = price * carts[cartIndex].qty;
    addToCart(cartIndex, total);
    updateTotalQuantity();
  }
  
  function decrease(cartIndex) {
    if (carts[cartIndex].qty > 0) {
      carts[cartIndex].qty--;
      let price = getRandomPrice();
      let total = price * carts[cartIndex].qty;
      addToCart(cartIndex, total);
      updateTotalQuantity();
    }
  }
  
  function addToCart(cartIndex, total) {
    let quantityElement = document.querySelectorAll(".quantity")[cartIndex];
    quantityElement.textContent = "Quantity: " + carts[cartIndex].qty;
    document.querySelectorAll(".price")[cartIndex].innerHTML =  total;
    document.getElementById("buy" + cartIndex).style.visibility = 'visible';
    if (carts[cartIndex].qty > 5) {
      alert("The Product is Out of stock.\n Please visit again later.\n Thankyou!!!");
      document.querySelectorAll("button")[cartIndex * 2].disabled = true;
    }
  };


    // Common validation function
    // Common validation function
    function validateForm(formId, nameField, emailField, passwordField, confirmPasswordField, nameErrorField, emailErrorField, passwordErrorField, confirmPasswordErrorField) {
      const form = document.getElementById(formId);
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameField ? nameField.value.trim() : "";
        const email = emailField.value.trim();
        const password = passwordField ? passwordField.value : "";
        const confirmPassword = confirmPasswordField ? confirmPasswordField.value : "";

        if (nameErrorField) nameErrorField.textContent = "";
        if (emailErrorField) emailErrorField.textContent = "";
        if (passwordErrorField) passwordErrorField.textContent = "";
        if (confirmPasswordErrorField) confirmPasswordErrorField.textContent = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nameField && name.length === 0) {
          nameErrorField.textContent = "Name field cannot be empty";
        }

        if (!emailRegex.test(email)) {
          emailErrorField.textContent = "Invalid email format. Example: name@example.com";
        }

        if (passwordField && password.length < 8) {
          passwordErrorField.textContent = "Password must be at least 8 characters long";
        }

        if (confirmPasswordField && confirmPassword !== password) {
          confirmPasswordErrorField.textContent = "Passwords do not match";
        }

        if (!nameErrorField.textContent && 
          !emailErrorField.textContent &&
           !passwordErrorField.textContent &&
            (!confirmPasswordErrorField || !confirmPasswordErrorField.textContent)) {
          alert(" Submitted successfully!");
          form.reset();
        }
      });
    }

    // Call the validation function for all three forms
    validateForm("registerForm", document.getElementById("registerName"), 
    document.getElementById("registerEmail"), 
    document.getElementById("registerPassword"), 
    document.getElementById("registerPassword2"), 
    document.getElementById("registerError1"), 
    document.getElementById("registerError2"), 
    document.getElementById("registerError3"), 
    document.getElementById("registerError4"));

    validateForm("loginForm", document.getElementById("loginName"),
     document.getElementById("loginEmail"), 
     document.getElementById("loginPassword"),
      null,
       document.getElementById("loginError1"), 
       document.getElementById("loginError2"), 
       document.getElementById("loginError3"), 
       null);

//contact form

  let form = document.getElementById("formC");
  let er1 = document.getElementById("error");
  let er2 = document.getElementById("error1");
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

  form.addEventListener('submit', validForm);

  function validForm(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    let name = form.elements['NName'].value.trim();
    let email = form.elements['NEmail'].value.trim();

    er1.innerHTML = "";
    er2.innerHTML = "";
    let invalid = false; // Initialize invalid to false

    if (!name.length) {
      er1.innerHTML = "Name field must not be empty!";
      invalid = true; // Set to true if there's an error
    }
    if (!regex.test(email)) {
      er2.innerHTML = "Email format should be name23@gmail.com";
      invalid = true;
    }

    if (invalid) {
      return; // Don't submit the form if there are errors
    }

    // If all validations pass, you can submit the form
    alert('Registered');
    form.reset();
  };

