// Open the sign-up form
function openForm() {
    document.getElementById('form-container').style.display = 'flex';
}

// Close the sign-up form
function closeForm() {
    document.getElementById('form-container').style.display = 'none';
}

// Handle form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for signing up!');
    closeForm();
});
