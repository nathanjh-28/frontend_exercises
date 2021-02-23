const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showErr(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (username.value === '') {
        showErr(username, 'Username is required')
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showErr(email, 'Email is required')
    } else if (!isValidEmail(email.value)) {
        showErr(email, 'Email is not Valid')
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showErr(password, 'Password is required')
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showErr(password2, 'Confirm Password is required')
    } else {
        showSuccess(password2);
    }

})