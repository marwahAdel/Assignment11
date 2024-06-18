var signupName = document.getElementById('signup_Name');
var signupEmail = document.getElementById('signup_Email');
var signupPassword = document.getElementById('signup_Password');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

var signUpArray = [];
if (localStorage.getItem('users') != null) {
    signUpArray = JSON.parse(localStorage.getItem('users'));
}

function isEmpty() {
    return signupName.value !== "" && signupEmail.value !== "" && signupPassword.value !== "";
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function signUp() {
    if (!isEmpty()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    };

    if (isEmailExist()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        return false;
    }

    signUpArray.push(signUp);
    localStorage.setItem('users', JSON.stringify(signUpArray));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
    return true;
}

// for login
function isLoginEmpty() {
    return signinPassword.value !== "" && signinEmail.value !== "";
}

function login() {
    if (!isLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }
    var password = signinPassword.value;
    var email = signinEmail.value;
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name);
            location.replace('/home.html');
            return true;
        }
    }
    document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>';
    return false;
}

// for logout
function logout() {
    localStorage.removeItem('sessionUsername');
}
