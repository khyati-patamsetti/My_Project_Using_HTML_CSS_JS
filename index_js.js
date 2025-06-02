document.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('Video');
    video.playbackRate = 4.0;

    var signUpButton = document.getElementById('signUpButton');
    var signUpDetails = document.getElementById('signup-form');
    var loginForm = document.getElementById('login-form');
    var signUpSubmitButton = signUpDetails.querySelector('button[type="submit"]');
    var loginSubmitButton = loginForm.querySelector('button[type="submit"]');

    let users = {};

    signUpButton.addEventListener('click', function() {
        if (signUpDetails.style.display === 'none' || signUpDetails.style.display === '') {
            signUpDetails.style.display = 'block';
            loginForm.style.display = 'none';
        } else {
            signUpDetails.style.display = 'none';
        }
    });

    signUpSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        if (email === '' || username === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all details.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        if (password.length < 8) {
            alert('Password should contain more than 8 characters.');
            return;
        }

        users[username] = { username: username, password: password };
        alert('Signup successful! You can now log in.');
        signUpDetails.style.display = 'none';
        loginForm.style.display = 'block';
    });

    loginSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var loginEmail = document.getElementById('loginEmail').value;
        var loginPassword = document.getElementById('loginPassword').value;

        if (loginEmail in users && users[loginEmail].password === loginPassword) {
            alert('Login successful!');
            window.location.href="./space_task.html"
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});