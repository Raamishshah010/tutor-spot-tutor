

function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') return window.alert('Please enter all required fields');


    var settings = {
        "url": "http://localhost:5000/api/teacher/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "email": "tutor123@gmail.com",
            "password": "123456"
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response.token);

        localStorage.setItem('teacherID', response.token);

        window.location.href = '../dashboard.html'
    });
}