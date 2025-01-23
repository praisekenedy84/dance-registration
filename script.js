document.getElementById("registrationForm").addEventListener("submit", function (e) {
    // Prevent the form from submitting by default
    e.preventDefault();

    let isValid = true; // Track overall form validity

    // Full Name
    const fullName = document.getElementById("fullName");
    const fullNamePattern = /^[a-zA-Z\s]+$/; // Only letters and spaces
    if (fullName.value.trim().length < 6) {
        alert("Full Name must be at least 6 characters long.");
        fullName.style.border = "2px solid red";
        isValid = false;
    } else {
        fullName.style.border = "2px solid green";
    
    }  if (!fullNamePattern.test(fullName.value.trim())) {
        alert("Full Name must contain only letters and spaces.");
        fullName.style.border = "2px solid red";
        isValid = false;
    } else {
        fullName.style.border = "2px solid green";
    }


    // Email
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.style.border = "2px solid red";
        isValid = false;
    } else {
        email.style.border = "2px solid green";
    }

    // Gender
    const gender = document.getElementById("gender");
    if (gender.value === "") {
        alert("Please select your gender.");
        gender.style.border = "2px solid red";
        isValid = false;
    } else {
        gender.style.border = "2px solid green";
    }

    // Password
    const password = document.getElementById("password");
    if (password.value.trim().length < 8) {
        alert("Password must be at least 8 characters long.");
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        password.style.border = "2px solid green";
    }

    // Confirm Password
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        confirmPassword.style.border = "2px solid red";
        isValid = false;
    } else {
        confirmPassword.style.border = "2px solid green";
    }

    // Dance Type
    const danceType = document.getElementById("danceType");
    if (danceType.value === "") {
        alert("Please select a dance type.");
        danceType.style.border = "2px solid red";
        isValid = false;
    } else {
        danceType.style.border = "2px solid green";
    }

    // Start Date
   // Set the "min" attribute for the Start Date field to today's date
const startDateField = document.getElementById("startDate");
const today = new Date().toISOString().split("T")[0];
startDateField.setAttribute("min", today);

// Validate Start Date
function validateForm() {
    let isValid = true;

    const startDate = startDateField.value;
    if (!startDate || new Date(startDate) < new Date(today)) {
        alert("Start Date must be today or in the future.");
        startDateField.style.border = "2px solid red";
        isValid = false;
    } else {
        startDateField.style.border = "2px solid green";
    }

    return isValid;
}

    // Phone Number
    const phone = document.getElementById("phone");
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        alert("Please enter a valid 10-digit phone number.");
        phone.style.border = "2px solid red";
        isValid = false;
    } else {
        phone.style.border = "2px solid green";
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset(); // Reset form
        document.querySelectorAll("input, select").forEach((el) => {
            el.style.border = "1px solid #ddd"; // Reset borders
        });
    }
});