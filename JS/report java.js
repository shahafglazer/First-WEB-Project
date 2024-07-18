// JavaScript validation form function
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var location = document.getElementById('location').value.trim();
    var licensePlate = document.getElementById('licensePlate').value.trim();
    var description = document.getElementById('description').value.trim();
    var isValid = true;

    // JavaScript validation for name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // JavaScript validation for email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // JavaScript validation for location
    if (location === '') {
        document.getElementById('locationError').textContent = 'Location is required';
        isValid = false;
    } else {
        document.getElementById('locationError').textContent = '';
    }

    // JavaScript validation for License Plate
    if (licensePlate === '') {
        document.getElementById('licensePlateError').textContent = 'License Plate is required';
        isValid = false;
    } else {
        document.getElementById('licensePlateError').textContent = '';
    }

    // JavaScript validation for description
    if (description === '') {
        document.getElementById('descriptionError').textContent = 'Description is required';
        isValid = false;
    } else {
        document.getElementById('descriptionError').textContent = '';
    }
    
    return isValid;
}

function isValidEmail(email) {// validation for an email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}