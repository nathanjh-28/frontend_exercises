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



function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showErr(input, 'Email is not valid')
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showErr(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showErr(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showErr(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showErr(input2, 'Passwords do not match');
    }
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password, password2)

})

// ====== First version before Refactor ======

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     if (username.value === '') {
//         showErr(username, 'Username is required')
//     } else {
//         showSuccess(username);
//     }
//     if (email.value === '') {
//         showErr(email, 'Email is required')
//     } else if (!isValidEmail(email.value)) {
//         showErr(email, 'Email is not Valid')
//     } else {
//         showSuccess(email);
//     }
//     if (password.value === '') {
//         showErr(password, 'Password is required')
//     } else {
//         showSuccess(password);
//     }
//     if (password2.value === '') {
//         showErr(password2, 'Confirm Password is required')
//     } else {
//         showSuccess(password2);
//     }
// })

//function isValidEmail(email) {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }